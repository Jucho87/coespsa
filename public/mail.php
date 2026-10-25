<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false]); exit; }

// Limpia texto y elimina saltos de línea en campos que van a cabeceras (evita header injection)
function campo($k, $oneLine = true) {
    $v = trim(strip_tags($_POST[$k] ?? ''));
    return $oneLine ? str_replace(["\r", "\n"], ' ', $v) : $v;
}
$nombre    = campo('nombre');
$empresa   = campo('empresa');
$documento = campo('documento');
$email     = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$telefono  = campo('telefono');
$ciudad    = campo('ciudad');
$gerencia  = campo('gerencia');
$servicio  = campo('servicio');
$mensaje   = campo('mensaje', false);
$radicado  = campo('radicado');
if (!$email || !$nombre || !$mensaje) {
    http_response_code(400);
    echo json_encode(['ok'=>false,'error'=>'Campos requeridos faltantes']);
    exit;
}
$to      = 'asistente@grupocoespsa.com'; // Buzón de Servicio al Cliente (cambiar si aplica)
$subject = '=?UTF-8?B?' . base64_encode("Solicitud de Contacto [$radicado] - $nombre") . '?=';
$body    = "Radicado: $radicado\nNombre: $nombre\nEmpresa: $empresa\nNIT/Documento: $documento\nEmail: $email\nTeléfono: $telefono\nCiudad: $ciudad\nGerencia: $gerencia\nServicio: $servicio\n\nMensaje:\n$mensaje";
$headers = "From: noreply@grupocoespsa.com\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\nX-Mailer: PHP";
$sent    = mail($to, $subject, $body, $headers);
if (!$sent) http_response_code(500);
echo json_encode(['ok'=> $sent]);

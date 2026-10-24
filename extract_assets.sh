#!/usr/bin/env bash
set -e

mkdir -p public/assets/extracted

echo "=== 1. Cropping 6 machinery photos from collage (2636x1263) ==="
# Row 1
convert public/assets/extracted/machinery_collage.jpg -crop 878x631+0+0 -quality 92 public/assets/extracted/heavy_bulldozer.jpg
convert public/assets/extracted/machinery_collage.jpg -crop 878x631+878+0 -quality 92 public/assets/extracted/mining_excavator_load.jpg
convert public/assets/extracted/machinery_collage.jpg -crop 880x631+1756+0 -quality 92 public/assets/extracted/crawler_drilling_rigs.jpg
# Row 2
convert public/assets/extracted/machinery_collage.jpg -crop 878x632+0+631 -quality 92 public/assets/extracted/mining_shovel_truck.jpg
convert public/assets/extracted/machinery_collage.jpg -crop 878x632+878+631 -quality 92 public/assets/extracted/volvo_haul_fleet.jpg
convert public/assets/extracted/machinery_collage.jpg -crop 880x632+1756+631 -quality 92 public/assets/extracted/mountain_excavator.jpg

echo "=== 2. Cropping Naval Engineering photos ==="
convert public/assets/aistudio/img20261024_10293449_aa4ce6ec.png -rotate 270 public/assets/extracted/slide_naval_full.jpg
convert public/assets/extracted/slide_naval_full.jpg -crop 900x670+100+1520 -quality 92 public/assets/extracted/naval_cutting_torch.jpg
convert public/assets/extracted/slide_naval_full.jpg -crop 1000x670+1000+1520 -quality 92 public/assets/extracted/naval_vessel_dismantling.jpg
convert public/assets/extracted/slide_naval_full.jpg -crop 950x670+2000+1520 -quality 92 public/assets/extracted/naval_shipyard_port.jpg

echo "=== 3. Cropping Civil Engineering photos ==="
convert public/assets/aistudio/img20261024_10284626_ec77d0c7.png -rotate 270 public/assets/extracted/slide_civil_full.jpg
convert public/assets/extracted/slide_civil_full.jpg -crop 920x670+100+1520 -quality 92 public/assets/extracted/civil_bridge_infrastructure.jpg
convert public/assets/extracted/slide_civil_full.jpg -crop 950x670+1020+1520 -quality 92 public/assets/extracted/civil_hangar_structure.jpg
convert public/assets/extracted/slide_civil_full.jpg -crop 950x670+1970+1520 -quality 92 public/assets/extracted/civil_earthworks_grading.jpg

echo "=== 4. Cropping Operations & GPS Telemetry photos ==="
convert public/assets/aistudio/img20261024_10301529_1b1144f3.png -rotate 270 public/assets/extracted/slide_ops_full.jpg
convert public/assets/extracted/slide_ops_full.jpg -crop 1200x700+650+1520 -quality 92 public/assets/extracted/operations_control_room.jpg
convert public/assets/extracted/slide_ops_full.jpg -crop 1000x700+1850+1520 -quality 92 public/assets/extracted/operations_gps_tracking_map.jpg

echo "=== 5. Cropping Transport Fleet photos ==="
convert public/assets/aistudio/img20261024_10375249_a2d3453e.png -rotate 270 public/assets/extracted/slide_transport_full.jpg
convert public/assets/extracted/slide_transport_full.jpg -crop 2600x750+200+1480 -quality 92 public/assets/extracted/transport_tanker_fleet.jpg

echo "=== 6. Cropping Security & Strategic Logistics ==="
convert public/assets/aistudio/img20261024_10355058_33360a76.png -rotate 270 public/assets/extracted/slide_security_full.jpg
convert public/assets/extracted/slide_security_full.jpg -crop 950x680+100+1520 -quality 92 public/assets/extracted/security_fleet_inspection.jpg
convert public/assets/extracted/slide_security_full.jpg -crop 950x680+1050+1520 -quality 92 public/assets/extracted/security_police_coordination.jpg
convert public/assets/extracted/slide_security_full.jpg -crop 950x680+2000+1520 -quality 92 public/assets/extracted/security_topographic_route_map.jpg

echo "=== 7. Organigram Chart clean extraction ==="
convert public/assets/aistudio/img20261024_10280796_e2027665.png -rotate 270 public/assets/extracted/slide_organigram_full.jpg
convert public/assets/extracted/slide_organigram_full.jpg -crop 2600x1600+250+650 -quality 92 public/assets/extracted/organigram_chart.jpg

echo "=== 8. Clean cropped logo without edges ==="
convert public/assets/extracted/logo_clean.png -trim +repage public/assets/extracted/coespsa_logo.png

echo "Extraction finished successfully!"

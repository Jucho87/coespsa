#!/usr/bin/env bash
set -e

echo "=== STARTING HIGH-FIDELITY IMAGE REMASTERING PIPELINE ==="

EXT_DIR="public/assets/extracted"
mkdir -p "$EXT_DIR"

# Helper function to remaster a photo
remaster_photo() {
  local in_file="$1"
  local out_file="$2"
  local w="$3"
  local h="$4"
  
  echo "Remastering: $out_file ..."
  if [ -n "$w" ] && [ -n "$h" ]; then
    convert "$in_file" \
      -filter Lanczos \
      -resize "${w}x${h}^" \
      -gravity center \
      -extent "${w}x${h}" \
      -auto-level \
      -contrast-stretch 0.2%x0.2% \
      -modulate 102,125,100 \
      -unsharp 0x1.2+1.8+0.02 \
      -sampling-factor 4:4:4 \
      -quality 98 \
      "$out_file"
  else
    convert "$in_file" \
      -auto-level \
      -contrast-stretch 0.2%x0.2% \
      -modulate 102,125,100 \
      -unsharp 0x1.2+1.8+0.02 \
      -sampling-factor 4:4:4 \
      -quality 98 \
      "$out_file"
  fi
}

# 1. Remaster Machinery Collage (2636x1263) from uncompressed slide
echo "1. Remastering machinery collage..."
convert "public/assets/aistudio/img20261024_10573185_24e44930.png" \
  -rotate 270 \
  -auto-level \
  -contrast-stretch 0.2%x0.2% \
  -modulate 102,128,100 \
  -unsharp 0x1.2+1.8+0.02 \
  -sampling-factor 4:4:4 \
  -quality 98 \
  "$EXT_DIR/machinery_collage.jpg"

# Crop the 6 individual machinery photos with enhanced vibrance and resolution
# From rotated 2636x1263:
# Top row (y=0 to 630):
# 1. Bulldozer (left): x=0 to 878
# 2. Mining Excavator Loading (center): x=878 to 1756
# 3. Drilling Rig (right): x=1756 to 2636
# Bottom row (y=630 to 1263):
# 4. Large Shovel Truck (left): x=0 to 878
# 5. Volvo Haul Dumpers (center): x=878 to 1756
# 6. Mountain Track Excavator (right): x=1756 to 2636

echo "1b. Cropping and remastering individual machinery photos..."
convert "$EXT_DIR/machinery_collage.jpg" -crop 878x630+0+0 +repage -filter Lanczos -resize 1200x860 \
  -unsharp 0x1.0+1.5+0.02 -quality 98 "$EXT_DIR/heavy_bulldozer.jpg"

convert "$EXT_DIR/machinery_collage.jpg" -crop 878x630+878+0 +repage -filter Lanczos -resize 1200x860 \
  -unsharp 0x1.0+1.5+0.02 -quality 98 "$EXT_DIR/mining_excavator_load.jpg"

convert "$EXT_DIR/machinery_collage.jpg" -crop 880x630+1756+0 +repage -filter Lanczos -resize 1200x860 \
  -unsharp 0x1.0+1.5+0.02 -quality 98 "$EXT_DIR/crawler_drilling_rigs.jpg"

convert "$EXT_DIR/machinery_collage.jpg" -crop 878x630+0+630 +repage -filter Lanczos -resize 1200x860 \
  -unsharp 0x1.0+1.5+0.02 -quality 98 "$EXT_DIR/mining_shovel_truck.jpg"

convert "$EXT_DIR/machinery_collage.jpg" -crop 878x630+878+630 +repage -filter Lanczos -resize 1200x860 \
  -unsharp 0x1.0+1.5+0.02 -quality 98 "$EXT_DIR/volvo_haul_fleet.jpg"

convert "$EXT_DIR/machinery_collage.jpg" -crop 880x630+1756+630 +repage -filter Lanczos -resize 1200x860 \
  -unsharp 0x1.0+1.5+0.02 -quality 98 "$EXT_DIR/mountain_excavator.jpg"

# 2. Remaster Naval Engineering Photos from slide img20261024_10241787_84d73009.png (3204x2444 when rotated)
echo "2. Re-extracting and remastering Naval photos at native 3204x2444..."
convert "public/assets/aistudio/img20261024_10241787_84d73009.png" -rotate 270 /tmp/naval_slide_rot.png

# Left: Cutting torch worker
convert /tmp/naval_slide_rot.png -crop 1000x800+80+1480 +repage \
  -auto-level -contrast-stretch 0.3%x0.3% -modulate 102,128,100 \
  -filter Lanczos -resize 1400x1000 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/naval_cutting_torch.jpg"

# Center: Vessel dismantling
convert /tmp/naval_slide_rot.png -crop 1100x800+1050+1480 +repage \
  -auto-level -contrast-stretch 0.3%x0.3% -modulate 102,130,100 \
  -filter Lanczos -resize 1500x1000 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/naval_vessel_dismantling.jpg"

# Right: Shipyard port
convert /tmp/naval_slide_rot.png -crop 1000x800+2130+1480 +repage \
  -auto-level -contrast-stretch 0.3%x0.3% -modulate 102,125,100 \
  -filter Lanczos -resize 1400x1000 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/naval_shipyard_port.jpg"

# 3. Remaster Civil Engineering Photos from slide img20261024_10250171_831ba848.png
echo "3. Re-extracting and remastering Civil Engineering photos..."
convert "public/assets/aistudio/img20261024_10250171_831ba848.png" -rotate 270 /tmp/civil_slide_rot.png

# Left: Bridge infrastructure
convert /tmp/civil_slide_rot.png -crop 1020x800+80+1480 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1450x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/civil_bridge_infrastructure.jpg"

# Center: Hangar structure
convert /tmp/civil_slide_rot.png -crop 1020x800+1080+1480 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1450x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/civil_hangar_structure.jpg"

# Right: Earthworks grading
convert /tmp/civil_slide_rot.png -crop 1020x800+2080+1480 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1450x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/civil_earthworks_grading.jpg"

# 4. Remaster Operations & Telemetry Photos from slide img20261024_10254466_5011a327.png
echo "4. Re-extracting and remastering Operations & Control Room photos..."
convert "public/assets/aistudio/img20261024_10254466_5011a327.png" -rotate 270 /tmp/ops_slide_rot.png

# Left: Operations Control Room
convert /tmp/ops_slide_rot.png -crop 1250x820+60+1460 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1600x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/operations_control_room.jpg"

# Center: Police Coordination
convert /tmp/ops_slide_rot.png -crop 950x820+1300+1460 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1300x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/security_police_coordination.jpg"

# Right: GPS Tracking Map
convert /tmp/ops_slide_rot.png -crop 900x820+2240+1460 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1250x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/operations_gps_tracking_map.jpg"

# 5. Remaster Transport Fleet Photos from slide img20261024_10272742_e85b12a2.png
echo "5. Re-extracting and remastering Transport Fleet photos..."
convert "public/assets/aistudio/img20261024_10272742_e85b12a2.png" -rotate 270 /tmp/trans_slide_rot.png

# Left: Tanker Fleet
convert /tmp/trans_slide_rot.png -crop 1050x820+60+1460 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1450x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/transport_tanker_fleet.jpg"

# Center: Fleet Inspection
convert /tmp/trans_slide_rot.png -crop 1000x820+1100+1460 +repage \
  -auto-level -contrast-stretch 0.2%x0.2% -modulate 102,125,100 \
  -filter Lanczos -resize 1400x1050 \
  -unsharp 0x1.2+1.8+0.02 -sampling-factor 4:4:4 -quality 98 \
  "$EXT_DIR/security_fleet_inspection.jpg"

# 6. Remaster Organigram Chart from slide img20261024_10280796_e2027665.png
echo "6. Remastering Organigram Chart with ultra-sharp text..."
convert "public/assets/aistudio/img20261024_10280796_e2027665.png" -rotate 270 \
  -crop 2850x1800+180+400 +repage \
  -auto-level \
  -contrast-stretch 0.4%x0.4% \
  -sharpen 0x1.0 \
  -sampling-factor 4:4:4 \
  -quality 98 \
  "$EXT_DIR/organigram_chart.jpg"

# 7. Remaster COESPSA Logo
echo "7. Remastering COESPSA Logo..."
convert "public/assets/aistudio/img20261024_10573185_0001_01a8a9ad.png" -rotate 270 \
  -auto-level \
  -contrast-stretch 0.5%x0.5% \
  -unsharp 0x1.2+2.0+0.02 \
  "$EXT_DIR/logo_clean.png"

# Create a clean high-res transparent PNG logo icon from the emblem
convert "$EXT_DIR/logo_clean.png" \
  -crop 350x350+10+50 +repage \
  -transparent white \
  -fuzz 15% \
  -resize 512x512 \
  "$EXT_DIR/coespsa_logo.png"

# Clean up temp files
rm -f /tmp/naval_slide_rot.png /tmp/civil_slide_rot.png /tmp/ops_slide_rot.png /tmp/trans_slide_rot.png

echo "=== HIGH-FIDELITY REMASTERING COMPLETED SUCCESSFULLY ==="

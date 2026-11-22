Add-Type -AssemblyName System.Drawing

$width = 4096
$height = 2304

# Create 24-bit RGB bitmap (non-transparent as required by Google)
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# 1. Background Gradient (Deep midnight navy to slate indigo)
$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$cTopLeft = [System.Drawing.Color]::FromArgb(7, 11, 25)
$cBottomRight = [System.Drawing.Color]::FromArgb(15, 23, 42)
$brushBg = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $cTopLeft, $cBottomRight, 45.0)
$g.FillRectangle($brushBg, $rect)

# 2. Subtle modern glowing ambient accents (Cyber blue & electric purple)
$cyanGlow = [System.Drawing.Color]::FromArgb(25, 14, 165, 233)
$brushCyan = New-Object System.Drawing.SolidBrush($cyanGlow)
$g.FillEllipse($brushCyan, -300, -300, 1800, 1800)

$indigoGlow = [System.Drawing.Color]::FromArgb(30, 99, 102, 241)
$brushIndigo = New-Object System.Drawing.SolidBrush($indigoGlow)
$g.FillEllipse($brushIndigo, 2400, 800, 2200, 2200)

$blueGlow = [System.Drawing.Color]::FromArgb(20, 37, 99, 235)
$brushBlue = New-Object System.Drawing.SolidBrush($blueGlow)
$g.FillEllipse($brushBlue, 1000, 1200, 1800, 1800)

# Subtle grid lines
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(12, 255, 255, 255), 2)
for ($x = 0; $x -lt $width; $x += 160) {
    $g.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 0; $y -lt $height; $y += 160) {
    $g.DrawLine($gridPen, 0, $y, $width, $y)
}

# 3. Load Logo
$logoPath = "C:\Users\kushs\OneDrive\Documents\Web Development\Chittortech-Website\public\play_store_assets\app_icon_512x512.png"
if (-not (Test-Path $logoPath)) {
    $logoPath = "C:\Users\kushs\OneDrive\Documents\Web Development\Chittortech-Website\public\chittortech_logo.png"
}

$logoSize = 580
$logoX = [int](($width - $logoSize) / 2)
$logoY = 380

# Outer glowing ring for logo
$ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 56, 189, 248), 6)
$g.DrawEllipse($ringPen, $logoX - 16, $logoY - 16, $logoSize + 32, $logoSize + 32)

$ringPen2 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, 129, 140, 248), 16)
$g.DrawEllipse($ringPen2, $logoX - 28, $logoY - 28, $logoSize + 56, $logoSize + 56)

if (Test-Path $logoPath) {
    $srcImg = [System.Drawing.Image]::FromFile($logoPath)
    $g.DrawImage($srcImg, $logoX, $logoY, $logoSize, $logoSize)
    $srcImg.Dispose()
}

# 4. Typography
# Title: CHITTORTECH
$titleFont = New-Object System.Drawing.Font("Segoe UI", 120, [System.Drawing.FontStyle]::Bold)
$titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255))
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
$sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center

$titleY = 1100
$g.DrawString("CHITTORTECH", $titleFont, $titleBrush, ($width / 2), $titleY, $sfCenter)

# Subtitle / Tagline
$subFont = New-Object System.Drawing.Font("Segoe UI", 48, [System.Drawing.FontStyle]::Regular)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(203, 213, 225))
$subY = 1260
$g.DrawString("Intelligent AI Engineering  *  Mobile Apps  *  Enterprise Software", $subFont, $subBrush, ($width / 2), $subY, $sfCenter)

# 5. Badges / Capability Pills
$badgeFont = New-Object System.Drawing.Font("Segoe UI", 32, [System.Drawing.FontStyle]::Bold)
$badges = @("Android & iOS Apps", "Custom AI & LLMs", "Cloud & Web Platforms", "Govt. Recognized")
$badgeWidth = 560
$badgeHeight = 90
$badgeGap = 40
$totalBadgeW = ($badges.Count * $badgeWidth) + (($badges.Count - 1) * $badgeGap)
$startX = [int](($width - $totalBadgeW) / 2)
$badgeY = 1430

$badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
$badgeBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 56, 189, 248), 3)
$badgeTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(224, 242, 254))

for ($i = 0; $i -lt $badges.Count; $i++) {
    $bx = $startX + ($i * ($badgeWidth + $badgeGap))
    $rectB = New-Object System.Drawing.Rectangle($bx, $badgeY, $badgeWidth, $badgeHeight)
    $g.FillRectangle($badgeBgBrush, $rectB)
    $g.DrawRectangle($badgeBorderPen, $rectB)
    $g.DrawString($badges[$i], $badgeFont, $badgeTextBrush, ($bx + ($badgeWidth / 2)), ($badgeY + ($badgeHeight / 2)), $sfCenter)
}

# 6. Bottom Brand Accent Bar & Website
$webFont = New-Object System.Drawing.Font("Segoe UI", 36, [System.Drawing.FontStyle]::Bold)
$webBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(56, 189, 248))
$g.DrawString("www.chittortech.in", $webFont, $webBrush, ($width / 2), 1660, $sfCenter)

# Bottom border glowing accent line
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 56, 189, 248), 8)
$g.DrawLine($linePen, 600, 1850, 3496, 1850)

# Save to Downloads and play_store_assets
$outDownloads = "C:\Users\kushs\Downloads\chittortech_play_header_4096x2304.png"
$outAssets = "C:\Users\kushs\OneDrive\Documents\Web Development\Chittortech-Website\public\play_store_assets\header_image_4096x2304.png"

$bmp.Save($outDownloads, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($outAssets, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()

Write-Output "SUCCESS: Created $outDownloads and $outAssets with size $($width)x$($height)"


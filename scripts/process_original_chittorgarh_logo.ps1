Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\kushs\.gemini\antigravity\brain\3a334877-21cd-4a6d-b809-9e0e3c3b867c\.user_uploaded\media_1795019609365_c0377964.jpg"
$downloads = [System.IO.Path]::Combine($env:USERPROFILE, "Downloads")

$srcImg = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Source Width: $($srcImg.Width), Height: $($srcImg.Height)"

# 1. Generate 512x512 App Icon
# Play store requires 512x512 px PNG or 32-bit JPEG, max 1MB.
$iconBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($iconBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Clear background with black (matching the emblem border)
$g.Clear([System.Drawing.Color]::Black)

# Draw image scaled to fit 512x512 nicely with small margin
$g.DrawImage($srcImg, 0, 0, 512, 512)

$iconDestPath = Join-Path $downloads "visitchittorgarh_app_icon_512x512.png"
$iconBmp.Save($iconDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$iconBmp.Dispose()
Write-Host "Generated: $iconDestPath"

# 2. Generate 1024x500 Feature Graphic incorporating this emblem
$fgBmp = New-Object System.Drawing.Bitmap(1024, 500, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g2 = [System.Drawing.Graphics]::FromImage($fgBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g2.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Background gradient: Deep royal black-navy with warm golden glow
$rectFg = New-Object System.Drawing.Rectangle(0, 0, 1024, 500)
$cLeft = [System.Drawing.Color]::FromArgb(10, 10, 15)
$cRight = [System.Drawing.Color]::FromArgb(40, 20, 10)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectFg, $cLeft, $cRight, 0.0)
$g2.FillRectangle($brush, $rectFg)

# Draw the emblem on the right or center-right
# The emblem is 1024x1024 (square). Let's fit it on the right side: 480x480 at X=520, Y=10
$emblemSize = 480
$emblemX = 525
$emblemY = 10
$g2.DrawImage($srcImg, $emblemX, $emblemY, $emblemSize, $emblemSize)

# Left Side Typography & Branding
$fontBadge = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Bold)
$fontH1 = New-Object System.Drawing.Font("Arial", 38, [System.Drawing.FontStyle]::Bold)
$fontH2 = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Bold)
$fontBullet = New-Object System.Drawing.Font("Arial", 15, [System.Drawing.FontStyle]::Regular)
$fontUrl = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)

$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 185, 95))
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(226, 232, 240))
$badgeBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(184, 91, 19))

# Tag badge
$g2.FillRectangle($badgeBg, 50, 50, 310, 34)
$sfBadge = New-Object System.Drawing.StringFormat
$sfBadge.LineAlignment = [System.Drawing.StringAlignment]::Center
$g2.DrawString("UNESCO WORLD HERITAGE", $fontBadge, $whiteBrush, 65, 67, $sfBadge)

# Main Title
$g2.DrawString("CHITTORGARH FORT", $fontH1, $goldBrush, 45, 100)
$g2.DrawString("Official Tourist Travel & Audio Guide", $fontH2, $whiteBrush, 48, 160)

# Feature Bullets
$g2.DrawString("*  Complete Fort Audio Stories & Offline Map", $fontBullet, $mutedBrush, 50, 220)
$g2.DrawString("*  Udaipur Airport / City Private AC Cabs", $fontBullet, $mutedBrush, 50, 260)
$g2.DrawString("*  Licensed Multi-Language Tour Guides", $fontBullet, $mutedBrush, 50, 300)
$g2.DrawString("*  Light & Sound Show Timings & Tickets", $fontBullet, $mutedBrush, 50, 340)

# Web & Branding Footer
$pillBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(245, 185, 95), 2)
$g2.DrawRectangle($pillBorder, 50, 400, 380, 50)
$g2.DrawString("visitchittorgarh.in  *  ChittorTech", $fontUrl, $goldBrush, 65, 415)

$fgDestPath = Join-Path $downloads "visitchittorgarh_feature_graphic_1024x500.png"
$fgBmp.Save($fgDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g2.Dispose()
$fgBmp.Dispose()
Write-Host "Generated: $fgDestPath"

$srcImg.Dispose()
Write-Host "ALL ASSETS SUCCESSFULLY CREATED!"


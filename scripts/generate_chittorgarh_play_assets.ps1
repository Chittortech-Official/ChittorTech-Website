Add-Type -AssemblyName System.Drawing

$downloads = [System.IO.Path]::Combine($env:USERPROFILE, "Downloads")

# 1. Generate 512x512 App Icon
$iconBmp = New-Object System.Drawing.Bitmap(512, 512)
$g = [System.Drawing.Graphics]::FromImage($iconBmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Royal Heritage Gradient Background
$rect = New-Object System.Drawing.Rectangle(0, 0, 512, 512)
$colorTop = [System.Drawing.Color]::FromArgb(26, 16, 61)       # Royal Navy / Midnight
$colorBottom = [System.Drawing.Color]::FromArgb(184, 91, 19)    # Royal Saffron / Ochre
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $colorTop, $colorBottom, 45.0)
$g.FillRectangle($brush, $rect)

# Draw decorative outer gold ring
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(235, 185, 95), 8)
$g.DrawEllipse($goldPen, 24, 24, 464, 464)

# Draw Fort / Stambh silhouette icon
$archBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 230, 200))
# Central tower (Vijay Stambh representation)
$g.FillRectangle($archBrush, 226, 150, 60, 210)
$g.FillRectangle($archBrush, 210, 200, 92, 25)
$g.FillRectangle($archBrush, 200, 270, 112, 25)
$g.FillRectangle($archBrush, 185, 340, 142, 35)

# Dome on top of tower
$g.FillPie($archBrush, 216, 105, 80, 80, 180, 180)

# Golden flag on pinnacle
$flagPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 215, 0), 4)
$g.DrawLine($flagPen, 256, 105, 256, 75)
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 166, 35))
$flagPoints = @(
    (New-Object System.Drawing.PointF(256, 75)),
    (New-Object System.Drawing.PointF(290, 88)),
    (New-Object System.Drawing.PointF(256, 100))
)
$g.FillPolygon($goldBrush, $flagPoints)

# Typography on Icon
$fontTitle = New-Object System.Drawing.Font("Arial", 34, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$goldTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 215, 110))

$g.DrawString("CHITTORGARH", $fontTitle, $goldTextBrush, 256, 405, $sf)
$g.DrawString("FORT GUIDE & CABS", $fontSub, $whiteBrush, 256, 445, $sf)

$iconPath = Join-Path $downloads "chittorgarh_fort_icon_512x512.png"
$iconBmp.Save($iconPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$iconBmp.Dispose()


# 2. Generate 1024x500 Feature Graphic
$fgBmp = New-Object System.Drawing.Bitmap(1024, 500)
$g2 = [System.Drawing.Graphics]::FromImage($fgBmp)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g2.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Royal Heritage Deep Gradient
$rectFg = New-Object System.Drawing.Rectangle(0, 0, 1024, 500)
$c1 = [System.Drawing.Color]::FromArgb(15, 23, 42)     # Deep Midnight Slate
$c2 = [System.Drawing.Color]::FromArgb(180, 83, 9)     # Royal Amber / Rajasthan Ochre
$brushFg = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectFg, $c1, $c2, 30.0)
$g2.FillRectangle($brushFg, $rectFg)

# Decorative Gold Border
$borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(217, 119, 6), 6)
$g2.DrawRectangle($borderPen, 15, 15, 994, 470)

# Inner Badge / Tag
$badgeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
$badgeTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
$fontBadge = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Bold)
$g2.FillRectangle($badgeBrush, 70, 75, 340, 38)
$sfLeft = New-Object System.Drawing.StringFormat
$sfLeft.LineAlignment = [System.Drawing.StringAlignment]::Center
$g2.DrawString("UNESCO WORLD HERITAGE FORT", $fontBadge, $badgeTextBrush, 85, 94, $sfLeft)

# Main Title & Subtitle
$fontH1 = New-Object System.Drawing.Font("Arial", 46, [System.Drawing.FontStyle]::Bold)
$fontH2 = New-Object System.Drawing.Font("Arial", 22, [System.Drawing.FontStyle]::Bold)
$fontBody = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Regular)

$textWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$textGold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(253, 230, 138))
$textMuted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(226, 232, 240))

$g2.DrawString("CHITTORGARH FORT", $fontH1, $textGold, 70, 140)
$g2.DrawString("Official Tourist Travel & Audio Guide", $fontH2, $textWhite, 72, 215)

# Bullet points / feature highlights
$g2.DrawString("- Offline Audio Tour & GPS Walking Map", $fontBody, $textMuted, 75, 275)
$g2.DrawString("- Certified Multi-Language Tour Guides", $fontBody, $textMuted, 75, 315)
$g2.DrawString("- Udaipur Airport / City to Fort Taxi Booking", $fontBody, $textMuted, 75, 355)
$g2.DrawString("- Light & Sound Show Timings & Entry Ticket Info", $fontBody, $textMuted, 75, 395)

# Right decorative emblem / card
$cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
$cardPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(251, 191, 36), 3)
$g2.FillRectangle($cardBrush, 680, 80, 270, 340)
$g2.DrawRectangle($cardPen, 680, 80, 270, 340)

# Stambh Tower representation on right side
$stambhBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(254, 240, 138))
$g2.FillRectangle($stambhBrush, 795, 140, 40, 170)
$g2.FillRectangle($stambhBrush, 785, 180, 60, 18)
$g2.FillRectangle($stambhBrush, 775, 230, 80, 18)
$g2.FillRectangle($stambhBrush, 765, 280, 100, 25)
$g2.FillPie($stambhBrush, 785, 105, 60, 60, 180, 180)

# Right Card Labels
$fontCardH = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
$fontCardS = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Regular)
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
$g2.DrawString("VISITCHITTORGARH.IN", $fontCardH, $textGold, 815, 335, $sfCenter)
$g2.DrawString("Powered by ChittorTech", $fontCardS, $textWhite, 815, 365, $sfCenter)

$fgPath = Join-Path $downloads "chittorgarh_feature_graphic_1024x500.png"
$fgBmp.Save($fgPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g2.Dispose()
$fgBmp.Dispose()

Write-Host "SUCCESS: Generated icon and feature graphic in Downloads!"


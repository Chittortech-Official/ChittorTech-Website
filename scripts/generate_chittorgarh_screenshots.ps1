Add-Type -AssemblyName System.Drawing

$downloads = [System.IO.Path]::Combine($env:USERPROFILE, "Downloads")

function Generate-Screenshot($filename, $badge, $title, $subtitle, $details) {
    $width = 1080
    $height = 1920
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background gradient
    $rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
    $cTop = [System.Drawing.Color]::FromArgb(15, 23, 42)     # Deep Midnight Slate
    $cBottom = [System.Drawing.Color]::FromArgb(45, 25, 80)  # Rich Royal Indigo
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $cTop, $cBottom, 90.0)
    $g.FillRectangle($bgBrush, $rect)

    # Top Pill Badge
    $pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $pillTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
    $fontBadge = New-Object System.Drawing.Font("Arial", 22, [System.Drawing.FontStyle]::Bold)
    $g.FillRectangle($pillBrush, 140, 100, 800, 65)
    $sfCenter = New-Object System.Drawing.StringFormat
    $sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
    $sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($badge, $fontBadge, $pillTextBrush, 540, 132, $sfCenter)

    # Header Title & Subtitle
    $fontTitle = New-Object System.Drawing.Font("Arial", 52, [System.Drawing.FontStyle]::Bold)
    $fontSub = New-Object System.Drawing.Font("Arial", 30, [System.Drawing.FontStyle]::Regular)
    $titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(254, 240, 138))
    $subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(226, 232, 240))

    $rectTitle = New-Object System.Drawing.RectangleF(80, 200, 920, 180)
    $g.DrawString($title, $fontTitle, $titleBrush, $rectTitle, $sfCenter)

    $rectSub = New-Object System.Drawing.RectangleF(100, 390, 880, 100)
    $g.DrawString($subtitle, $fontSub, $subBrush, $rectSub, $sfCenter)

    # Central App Preview Mockup Card
    $cardRect = New-Object System.Drawing.Rectangle(100, 520, 880, 1200)
    $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 41, 59))
    $cardBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(217, 119, 6), 5)
    $g.FillRectangle($cardBrush, $cardRect)
    $g.DrawRectangle($cardBorder, $cardRect)

    # Mock phone status bar
    $phoneHeaderBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
    $g.FillRectangle($phoneHeaderBrush, 100, 520, 880, 100)
    $fontPhoneHead = New-Object System.Drawing.Font("Arial", 28, [System.Drawing.FontStyle]::Bold)
    $phoneHeadTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.DrawString("CHITTORGARH FORT GUIDE", $fontPhoneHead, $phoneHeadTextBrush, 540, 570, $sfCenter)

    # Draw Detail Items inside Mockup
    $yPos = 680
    $fontItemTitle = New-Object System.Drawing.Font("Arial", 32, [System.Drawing.FontStyle]::Bold)
    $fontItemDesc = New-Object System.Drawing.Font("Arial", 24, [System.Drawing.FontStyle]::Regular)
    $itemTitleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(253, 230, 138))
    $itemDescBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(203, 213, 225))
    $itemBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(51, 65, 85))

    foreach ($item in $details) {
        $itemRect = New-Object System.Drawing.Rectangle(140, $yPos, 800, 180)
        $g.FillRectangle($itemBgBrush, $itemRect)
        $g.DrawRectangle([System.Drawing.Pens]::Gold, $itemRect)

        $sfLeft = New-Object System.Drawing.StringFormat
        $sfLeft.LineAlignment = [System.Drawing.StringAlignment]::Center
        $g.DrawString($item.Head, $fontItemTitle, $itemTitleBrush, 170, $yPos + 50)
        $g.DrawString($item.Desc, $fontItemDesc, $itemDescBrush, 170, $yPos + 115)

        $yPos += 220
    }

    # Footer Watermark
    $fontFoot = New-Object System.Drawing.Font("Arial", 22, [System.Drawing.FontStyle]::Bold)
    $footBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(148, 163, 184))
    $g.DrawString("VisitChittorgarh.in  -  Verified by ChittorTech", $fontFoot, $footBrush, 540, 1820, $sfCenter)

    $outPath = Join-Path $downloads $filename
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

# 1. Screenshot 1: Monuments & Audio Tour
Generate-Screenshot `
    "chittorgarh_screenshot_1.png" `
    "UNESCO WORLD HERITAGE SITE" `
    "Complete Fort Audio Guide & Map" `
    "Explore 700 Acres of Living History Offline" `
    @(
        @{ Head = "[*] Vijay Stambh & Kirti Stambh"; Desc = "Complete architecture, history & 157 steps guide" },
        @{ Head = "[*] Rani Padmini & Kumbha Palace"; Desc = "Legendary Jauhar history & water pavilion view" },
        @{ Head = "[*] 7 Historic Fort Gates"; Desc = "Padan Pol, Bhairon Pol, Ram Pol historical stories" }
    )

# 2. Screenshot 2: Cabs & Airport Transfers
Generate-Screenshot `
    "chittorgarh_screenshot_2.png" `
    "TRUSTED PRIVATE TRANSPORT" `
    "Udaipur to Chittorgarh Cabs" `
    "Airport Transfers & Local Fort Day Sightseeing" `
    @(
        @{ Head = "[Car] Udaipur Airport (UDR) Pickup"; Desc = "Door-to-door AC Sedan & Innova transfers (90 mins)" },
        @{ Head = "[Car] Full Day Fort & City Tour"; Desc = "Hassle-free cab coverage across all 700 acres" },
        @{ Head = "[Car] Transparent Fixed Pricing"; Desc = "No hidden surcharges, verified experienced drivers" }
    )

# 3. Screenshot 3: Multi-Language Licensed Guides
Generate-Screenshot `
    "chittorgarh_screenshot_3.png" `
    "CERTIFIED LOCAL EXPERTS" `
    "Licensed Multi-Language Guides" `
    "English, French, German, Spanish & Mewari" `
    @(
        @{ Head = "[Guide] Govt Approved Certified Guides"; Desc = "Deep historical insights, authentic storytelling" },
        @{ Head = "[Guide] Foreign Tourist Special Assistance"; Desc = "Fluent in French, German, Italian, Spanish & English" },
        @{ Head = "[Guide] Personalized Custom Itineraries"; Desc = "Half-day, full-day or photography-special walks" }
    )

# 4. Screenshot 4: Light & Sound Show & Local Culture
Generate-Screenshot `
    "chittorgarh_screenshot_4.png" `
    "EVENING SPECTACLE & CULTURE" `
    "Light & Sound Show & Local Food" `
    "Daily Timings, Ticket Assistance & Mewari Cuisine" `
    @(
        @{ Head = "[Show] Kumbha Palace Sound & Light Show"; Desc = "Hindi & English show timings, best seating guide" },
        @{ Head = "[Food] Authentic Mewari Cuisine"; Desc = "Best Dal Baati Churma & heritage dining recommendations" },
        @{ Head = "[Shop] Heritage Handicrafts & Textiles"; Desc = "Akola block prints, Bassi wooden art & Thewa jewelry" }
    )

Write-Host "SUCCESS: Generated 4 high-res phone screenshots in Downloads!"


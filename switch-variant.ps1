# Quick switch between A/B/C test variants
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('A','B','C')]
    [string]$Variant
)

Write-Host "Switching to Variant $Variant..." -ForegroundColor Cyan

$appDir = "app"

if ($Variant -eq 'A') {
    Write-Host "Deploying Version A (Benefit & Example Focused)..." -ForegroundColor Green
    if (Test-Path "$appDir\page-variant-a.tsx.backup") {
        Copy-Item "$appDir\page-variant-a.tsx.backup" "$appDir\page.tsx" -Force
        Write-Host "✓ Version A deployed" -ForegroundColor Green
    } else {
        Write-Host "Warning: page-variant-a.tsx.backup not found. Using current page.tsx" -ForegroundColor Yellow
    }
} elseif ($Variant -eq 'B') {
    Write-Host "Deploying Version B (Problem-Agitation-Solution)..." -ForegroundColor Red
    if (Test-Path "$appDir\page-variant-b.tsx") {
        # Backup current as A if not already backed up
        if (-not (Test-Path "$appDir\page-variant-a.tsx.backup")) {
            Copy-Item "$appDir\page.tsx" "$appDir\page-variant-a.tsx.backup" -Force
            Write-Host "✓ Current version backed up as Variant A" -ForegroundColor Yellow
        }
        Copy-Item "$appDir\page-variant-b.tsx" "$appDir\page.tsx" -Force
        Write-Host "✓ Version B deployed" -ForegroundColor Red
    } else {
        Write-Host "Error: page-variant-b.tsx not found!" -ForegroundColor Red
        exit 1
    }
} elseif ($Variant -eq 'C') {
    Write-Host "Deploying Version C (Collaborative Pilot Partners)..." -ForegroundColor Blue
    if (Test-Path "$appDir\page-variant-c.tsx") {
        # Backup current as A if not already backed up
        if (-not (Test-Path "$appDir\page-variant-a.tsx.backup")) {
            Copy-Item "$appDir\page.tsx" "$appDir\page-variant-a.tsx.backup" -Force
            Write-Host "✓ Current version backed up as Variant A" -ForegroundColor Yellow
        }
        Copy-Item "$appDir\page-variant-c.tsx" "$appDir\page.tsx" -Force
        Write-Host "✓ Version C deployed" -ForegroundColor Blue
    } else {
        Write-Host "Error: page-variant-c.tsx not found!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Variant $Variant is now live!" -ForegroundColor Cyan
Write-Host "Refresh your browser to see changes: http://localhost:3004" -ForegroundColor Gray
Write-Host ""
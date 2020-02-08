<#

.SYNOPSIS
This is a Powershell script to o start creating your own slides and specify a name for your presentation.

.DESCRIPTION

.PARAMETER PresentationName
The name of the presentation.

#>

[CmdletBinding()]
Param(
    [Parameter(Position = 0, Mandatory = $true)]
    [string]$PresentationName
)

Write-Host "Cloning Reveal.js Starter repository..."
& git clone "https://github.com/laurentkempe/reveal.js-starter" .\docs\$PresentationName
Set-Location .\docs\$PresentationName
Remove-Item -Recurse -Force .git
Remove-Item README.md, js\.gitkeep, css\.gitkeep, lib\.gitkeep, img\.gitkeep, plugin\.gitkeep

Write-Output "Installing dependencies..."
& npm install
Write-Output ""

Write-Host "Presentation sucessfully set up in '.\docs\$PresentationName'" -ForegroundColor Green
Write-Host "Run 'npm run serve' to open it in your browser."

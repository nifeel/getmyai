param(
  [string]$Message = "Update site content",
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectRoot

$NodeDir = "D:\Develop\Nodejs"
if (Test-Path $NodeDir) {
  $env:Path = "$NodeDir;$env:Path"
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "git was not found in PATH."
}

if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
  throw "npm.cmd was not found. Install Node.js or update the NodeDir path in this script."
}

$Branch = (& git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($Branch)) {
  throw "Cannot detect the current git branch."
}

$Remote = (& git remote get-url origin).Trim()
if ([string]::IsNullOrWhiteSpace($Remote)) {
  throw "Git remote 'origin' is not configured."
}

Write-Host "Project: $ProjectRoot"
Write-Host "Remote:  $Remote"
Write-Host "Branch:  $Branch"

if (-not $SkipBuild) {
  Write-Host ""
  Write-Host "Building project..."
  & npm.cmd run build
}

Write-Host ""
Write-Host "Checking changes..."
$Changes = (& git status --porcelain)
if ([string]::IsNullOrWhiteSpace($Changes)) {
  Write-Host "No changes to upload."
  exit 0
}

& git status --short

Write-Host ""
Write-Host "Committing changes..."
& git add -A

$CachedChanges = (& git diff --cached --name-only)
if ([string]::IsNullOrWhiteSpace($CachedChanges)) {
  Write-Host "No staged changes to commit."
  exit 0
}

& git commit -m $Message

Write-Host ""
Write-Host "Pushing to origin/$Branch..."
& git push origin $Branch

Write-Host ""
Write-Host "Upload complete."

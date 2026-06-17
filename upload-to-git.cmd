@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0upload-to-git.ps1" %*
pause

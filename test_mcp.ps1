$env:GOOGLE_CLOUD_QUOTA_PROJECT = 'gen-lang-client-0042983757'
$env:GOOGLE_CLOUD_PROJECT = 'gen-lang-client-0042983757'

$node = 'C:\Users\Acer\.gemini\antigravity\node-v22-pkg\node-v22.14.0-win-x64\node.exe'
$script = 'C:\Users\Acer\.gemini\antigravity\node_modules\@_davideast\stitch-mcp\bin\stitch-mcp.js'

$pinfo = New-Object System.Diagnostics.ProcessStartInfo
$pinfo.FileName = $node
$pinfo.Arguments = "$script proxy"
$pinfo.RedirectStandardError = $true
$pinfo.RedirectStandardOutput = $true
$pinfo.UseShellExecute = $false
$pinfo.EnvironmentVariables['GOOGLE_CLOUD_QUOTA_PROJECT'] = 'gen-lang-client-0042983757'
$pinfo.EnvironmentVariables['GOOGLE_CLOUD_PROJECT'] = 'gen-lang-client-0042983757'

$p = New-Object System.Diagnostics.Process
$p.StartInfo = $pinfo
$p.Start() | Out-Null

Start-Sleep 5
$p.Kill()

Write-Host "=== STDOUT ==="
Write-Host $p.StandardOutput.ReadToEnd()
Write-Host "=== STDERR ==="
Write-Host $p.StandardError.ReadToEnd()

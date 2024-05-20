## Create a profile to FNM (Fast Node Version Manager)
<p>Add the following to the end of your profile file:</p>

~~~
if (!(Test-Path -Path <ediklecio>)) {New-Item -ItemType File -Path <ediklecio> -Force}
~~~

Source: [https://github.com/Schniz/fnm](https://github.com/Schniz/fnm)

File location: <br>
C:\Users\{yourprofileonwindows}\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

In case of error with script execution on windows:
[Allow Scrip Exec on W10](https://answers.microsoft.com/pt-br/windows/forum/all/permitir-a-execu%C3%A7%C3%A3o-de-scripts-no/f6b195cf-0be7-46e2-b88c-358c79f78343)


## Create a profile to FNM (Fast Node Version Manager)
<p>Add the following to the end of your profile file:</p>

~~~
if (!(Test-Path -Path <ediklecio>)) {New-Item -ItemType File -Path <ediklecio> -Force}
~~~

Source: [https://github.com/Schniz/fnm](https://github.com/Schniz/fnm)

File location: <br>
C:\Users\{yourprofileonwindows}\Documents\WindowsPowerShell\{profilename}.ps1


@echo off
echo Iniciando proceso de despliegue a Git...

:: Añadir todos los cambios al staging
git add .

:: Obtener fecha y hora actual en formato: DD-MM-YYYY HH:MM:SS
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /format:list') do set datetime=%%I
set año=%datetime:~0,4%
set mes=%datetime:~4,2%
set dia=%datetime:~6,2%
set hora=%datetime:~8,2%
set minuto=%datetime:~10,2%
set segundo=%datetime:~12,2%

:: Crear mensaje de commit con fecha y hora
set mensaje=Actualización automática - %dia%-%mes%-%año% %hora%:%minuto%:%segundo%

:: Realizar commit con el mensaje formateado
echo Realizando commit: %mensaje%
git commit -m "%mensaje%"

:: Push al repositorio remoto
echo Subiendo cambios al repositorio...
git push

echo Proceso completado con éxito.
pause 
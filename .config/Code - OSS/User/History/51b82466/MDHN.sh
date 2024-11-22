#!/bin/bash

# Colours
red="\e[31m"
green="\e[32m"
yellow="\e[33m"
end="\e[0m"


# Aseguraremos de que el usuario proporciona la entrada al script, y si no, 
# imprime un ejemplo de uso y salida.

if [ -z $1 ]
then
echo './recon.sh &lt;list of domain&gt;'
exit 1
fi

# Primera acción que realizará nuestro script es enumerar los subdominios.

echo 'FINDING SUBDOMAINS...'

while read $line
do
    for var in $line
    do
        echo 'Enumerating:' $var
        subfinder -silent -d $var > out1.txt
        cat out1.txt >> subs1.txt

        assetfinder -subs-only $var > out2.txt
        cat out2.txt >> subs2.txt

        rm out1.txt out2.txt
    done
done < $1

# Combinar los resultados, eliminar los duplicados y guardar el resultado 
# en un archivo llamado all_subs.

sort -u subs1.txt subs2.txt > all_subs.txt
rm subs1.txt subs2.txt
echo 'Saved subdomains to all_subs.txt'



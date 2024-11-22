#!/bin/bash

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
        echo 'enumerating:' $var
        subfinder -silent -d $var > out1.txt
        cat out1.txt >> subs1.txt

        assetfinder -subs-only $var > out2.txt
        cat out2.txt >> subs2.txt

        rm out1.txt out2.txt
    done
done < $1


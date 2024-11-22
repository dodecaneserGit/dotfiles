#!/bin/bash

# Colours
red="\e[31m"
green="\e[32m"
yellow="\e[33m"
blue="\e[34m"
cian="\e[36m"
end="\e[0m"

# Bot Telegram
#bot_token=$token
#chat_ID=$chat_ID
#url="https://api.telegram.org/bot$bot_token/sendMessage"


# Aseguraremos de que el usuario proporciona la entrada al script, y si no, 
# imprime un ejemplo de uso y salida.

if [ -z $1 ]
then
echo $green'Usage: ./recon.sh <list of domain>'$end
exit 1
fi

# Primera acción que realizará nuestro script es enumerar los subdominios.

echo $red'[+/FINDING SUBDOMAINS...'$end

while read $line
do
    for var in $line
    do
        echo $green'Enumerating: '$end $var
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

#  Toma la lista de subdominios y usa httprobe para filtrar los live hosts, 
# guardando los resultados en un archivo llamado live_subs.

echo 'FINDING LIVE HOSTS...'

cat all_subs | httprobe > live_subs.txt
echo 'Saved live hosts to live_subs.txt'

# Probar lista de subdominios para un potencial Subdomain TakeOver.

echo 'CHECKING FOR SUBDOMAIN TAKEOVER...'

subjack -w all_subs.txt -a
echo 'DONE'



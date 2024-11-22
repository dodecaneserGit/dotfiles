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
echo $green'[+]Usage: ./recon.sh <list of domain>'$end
exit 1
fi

# Primera acción que realizará nuestro script es enumerar los subdominios.

echo $red'[+]FINDING SUBDOMAINS...'$end

while read $line
do
    for var in $line
    do
        echo $green'[+]Enumerating: '$end $var
        subfinder -silent -d $var > subfinder_domains.txt
        cat subfinder_domains.txt >> subs1.txt

        assetfinder -subs-only $var > assetfinder_domains.txt
        cat assetfinder_domains.txt >> subs2.txt

        amass enum -df $var -passive -o amass_passive_domains.txt
        cat amass_passive_domains.txt >> subs3.txt

        rm subfinder_domains.txt assetfinder_domains.txt amass_passive_domains.txt
    done
done < $1

# Combinar los resultados, eliminar los duplicados y guardar el resultado 
# en un archivo llamado all_domains.

sort -u subs1.txt subs2.txt subs3.txt -o all_domains.txt
rm subs1.txt subs2.txt subs3.txt
echo $red'[+]Saved subdomains to all_domains.txt'$end

#  Toma la lista de subdominios y usa httprobe para filtrar los live hosts, 
# guardando los resultados en un archivo llamado live_subs.

echo $red'[+]FINDING LIVE HOSTS...'$end

cat all_domains.txt | httprobe > live_subs.txt
echo $red'[+]Saved live hosts to live_subs.txt'$end

# Probar lista de subdominios para un potencial Subdomain TakeOver.

echo $red'[+]CHECKING FOR SUBDOMAIN TAKEOVER...'$end

subjack -w all_domains.txt -a > alive.txt
echo $red'[+]DONE'$end



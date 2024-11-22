#!/bin/bash

# Aseguraremos de que el usuario proporciona la entrada al script, y si no, 
# imprime un ejemplo de uso y salida.

if [ -z $1 ]
then
echo './recon.sh &lt;list of domain&gt;'
exit 1
fi

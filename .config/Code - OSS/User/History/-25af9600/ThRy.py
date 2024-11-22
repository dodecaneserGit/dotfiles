import requests
import signal
import time
import sys
import pdb

from pwd import *

def def_hundler(sig, frame):
    print("\n\n[!] Saliendo ...\n")
    sys.exit(1)

#Ctrl + C 
signal.signal(signal.SIGINT, def_hundler)


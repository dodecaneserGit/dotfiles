import json

username = input("What your name? >> ")

filename = 'username.json'
with open(filename, 'w') as f_obj:
    json.dump(username, f_obj)
    print("We'll remenber you when you come back, " + username.title() + "!")

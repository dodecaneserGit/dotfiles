# Saving  and reading Data
# Refactoring

import json

def greet_user():
    filename = 'username.json'
    try:
        with open(filename) as f_obj:
            username = json.load(f_obj)
    except FileNotFoundError:
        username = input("What your name? >> ")
    
        with open(filename, 'w') as f_obj:
            json.dump(username, f_obj)
            print("We'll remenber you when you come back, " + username.title() + "!")
    else:
        print("Wellcome back, " + username + "!")


greet_user()
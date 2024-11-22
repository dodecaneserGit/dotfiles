#Pasar lista como argumento
def greet_user(names):
    """Print a simple greeting to each user in the list"""
    for name in names:
        msg = "Hello, " + name.title() + "!"
        print(msg)

usernames = ['osuna', 'rodriguez', 'hernandez']
greet_user(usernames)

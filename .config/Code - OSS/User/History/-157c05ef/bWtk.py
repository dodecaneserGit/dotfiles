users = {
    'David':{
        'first':'Osuna',
        'last':'Calle',
        'location':'Madrid'
    },
    'Laura':{
        'first':'Osuna',
        'last':'Calle',
        'location':'Tetuan'
    },
}

for username, user_info in users.items():
    print("\nUsername: " + username)
    full_name = user_info['first'] + " " + user_info['last']
    location = user_info['location']
    
    print
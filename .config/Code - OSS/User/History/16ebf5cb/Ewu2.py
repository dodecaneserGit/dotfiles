def greet_user(name, username='Osuna'):
    """Return a dictionary of information abput a person"""
    person = {'first': name, 'last': username}
    return person

casa = greet_user('David', 'Calle')
print(casa)

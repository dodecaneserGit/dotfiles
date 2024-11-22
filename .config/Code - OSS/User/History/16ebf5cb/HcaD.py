def greet_user(name, username='Osuna', age=''):
    """Return a dictionary of information abput a person"""
    person = {'first': name, 'last': username}
    if age:
        person['age'] = age
    
    return person

casa = greet_user('David', 'Calle', age=46)
print(casa)
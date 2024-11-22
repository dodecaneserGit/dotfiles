file_path = '/home/dodecaneser/python/pi_digits.txt'
with open(file_path) as file_object:
    contents = file_object.read()
    print(contents.rstrip()) #Borra espacios en blanco


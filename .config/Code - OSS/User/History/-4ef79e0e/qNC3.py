# Variable con la ruta del archivo
file_path = '/home/dodecaneser/pythonCrashBook/pi_digits.txt'
with open(file_path) as file_object:
    contents = file_object.read()
    print(contents.rstrip()) #Borra espacios en blanco


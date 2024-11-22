# Variable con la ruta del archivo
file_path = '/home/dodecaneser/pythonCrashBook/pi_digits.txt'
with open(file_path) as file_object:
    contents = file_object.read()
    print(contents.rstrip()) #Borra espacios en blanco

# Leer archivo linea a linea
file_path_name = '/home/dodecaneser/pythonCrashBook/nombres.txt'
with open(file_path_name) as file_object_name:
    for line in file_object_name:
        print(line.rstrip().title())


# Lista de lineas desde un archivo
file_path_name = '/home/dodecaneser/pythonCrashBook/nombres.txt'

with open(file_path_name) as file_object_name:
    lines = file_object_name.readlines()

for line in lines:
    print(line.title().rstrip())

# Trabajo con archivos
file_path = '/home/dodecaneser/pythonCrashBook/pi_digits.txt'
with open(file_path) as file_object:
    lines = file_object.readlines()

pi_string = ''
for line in lines:
    pi_string += line.strip()

print(pi_strin)
print(len(pi_string))

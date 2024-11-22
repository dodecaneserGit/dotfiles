# Nombre del archivo
filename = '/home/dodecaneser/pythonCrashBook/pi_digits.txt'

# Abrir archivo y leerlo linea linea
with open(filename) as file_object:
    lines = file_object.readlines()
    
pi_string = ''
for line in lines:
    pi_string += line.rstrip()

#Comprobar si los numeros introducidos
birthday = input("Enter your birthday, in the form mmddyy: ")

if birthday in pi_string:
    print("Your birthday appears in the first million of pi!")
else:
    print("Your birthday does not appear in the first million of pi!")
    
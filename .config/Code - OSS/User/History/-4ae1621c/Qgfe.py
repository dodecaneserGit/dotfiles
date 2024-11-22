message_1 = "hello     "
message_2 = "wordl my friend"

print(message_1.rstrip().upper() + message_2.upper())

# Uso de Listas
bicycles = ['trek','orbea','redline','aca']

print(bicycles)

print(bicycles[1])
print(bicycles[2])

print(bicycles[0].upper())

message_3 = "My bike is " + bicycles[0].title() + "."
print(message_3)

bike = bicycles.pop(0).upper()

print("Mi bicicleta es " + bike)

print(bicycles)

# Ordenar lista con sort()
bicycles.sort()

# Uso le len(), longitud de lista
print(bicycles)
print(len(bicycles))

print(bicycles[-1])

for bikeprint in bicycles:
    print("\n" + bikeprint.title() + " es mi bicicleta.\n")

# Uso de range()
for value in range(1,6):
    print(value)

numbers = list(range(1,6))
print(numbers)

even_numbers = (list(range(2,11,2)))
print (even_numbers)

# Buquel for
squares = []
for value in range(1,11):
    square = value**2
    squares.append(square)
print(squares)

# Min() Max()
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(min(number))
print(max(number))

# List Comprehensions
squares_2 = [value**2 for value in range(1,11)]
print(squares_2)

# Trabajo con listas

colors = ['red', 'blue', 'yellow', 'pink', 'white', 'blank']
print(colors[0:3])
print(colors[1:4])
print(colors[:4])
print(colors[2:])
print(colors[-3:])

foods =['pizza', 'bread', 'meat', 'fish']
friend_food = foods[:]

foods.append('canoli')
friend_food.append('cake')

print("This is my favorite food ")
print(foods)

print("\nMy friend's favorite food are:")
print(friend_food)
print("\n")

# Bucles
print("Este es uno de mis colores favoritos ")
for color in colors[:3]:
    print(color.title() + "\n")

# Tuples
dimensions = (200, 50)
print(dimensions[0])
print(dimensions[1])

print("\nOriginal dimension\n")

for dimension in dimensions:
    print(dimension)
print("\n")

# Condicional if
cars = ['audi', 'bmw','vw', 'seat']
my_car = 'nissan'

for car in cars:
    if car == 'vw':
        print(car.upper())
    else:
        print(car.title())

print("\n")
for car in cars:
    if car != 'vw':
        print(car.upper())
    else:
        print(car.title())

if my_car not in cars:
    print(my_car.upper() + " ese es mi coche")
else:
    print('My car has broken')

message_1 = "hello     "
message_2 = "wordl my friend"

print(message_1.rstrip().upper() + message_2.upper())

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

bicycles.sort()

print(bicycles)
print(len(bicycles))

print(bicycles[-1])

for bikeprint in bicycles:
    print("\n" + bikeprint.title() + " es mi bicicleta.\n")


for value in range(1,6):
    print(value)

numbers = list(range(1,6))
print(numbers)

even_numbers = (list(range(2,11,2)))
print (even_numbers)

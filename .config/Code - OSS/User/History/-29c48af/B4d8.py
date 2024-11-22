filename = 'programming.txt'

with open(filename, 'w') as file_object:
    file_object.write("I love programming 2")

# Writing Multiple Lines
filename_2 = 'programming_2.txt'

with open(filename_2, 'w') as file_object_2:
    file_object_2.write("I love programming.\n")
    file_object_2.write("I love creating new games.\n")
# Append to a file
filename_3 = 'programming.txt'

with open(filename, 'a') as file_object_3:
    file_object_3.write("I also love finding meaning in large datasets.\n")
    file_object_3.write("I love creating apps that can run in a browser.\n ")

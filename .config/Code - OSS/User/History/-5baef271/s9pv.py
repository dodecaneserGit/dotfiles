import json

numbers = [2, 3, 5, 6, 8, 10, 13]

filename = 'numbers.json'
with open(filename, 'w') as f_obj:
    json.dump(numbers, f_obj)



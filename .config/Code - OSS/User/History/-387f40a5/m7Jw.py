def make_pizza(size, *toppings):
    """Print the list od toppings that have been requested
    Multiples argumentos
    """
    print("\nMaking a " + str(size) + "-inch pizza with the following toppings: ")
    for topping in toppings:
        print("\n[*] " + topping.title())

make_pizza(16, 'pepperoni')
make_pizza(20, 'mozarella', 'formaggio', 'green peppers')

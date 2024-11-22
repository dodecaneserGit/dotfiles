def make_pizza(*toppings):
    """Print the list od toppings that have been requested
    Multiples argumentos
    """
    print("\nMaking a pizza with the following toppings: ")
    for topping in toppings:
        print("\n[*] " + topping)

make_pizza('pepperoni')
make_pizza('mozarella', 'formaggio', 'green peppers')

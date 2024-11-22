def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print("\nMaking a " + str(size) + "-inch pizza with the following topping:")
    for topping in toppings:
        print("[*] " + topping)

def make_piadina(*toppings):
    """Summarize the piadina we are
    about to make
    """
    print("\nMaking a piadina with the following topping:")
    for topping in toppings:
        print("[*] " + topping)

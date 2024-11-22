def print_models(unprinted_designs, completed_models):
    """
    Simulate printing each desing, until none are left.
    Move each desing to completed_models after printind.

    Args:
        unprinted_designs (_type_): _description_
        completed_models (_type_): _description_
    """
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        
        #Simulate creating a 3D print from design
        print("Print model: " + current_design)
        completed_models.append(current_design)
        
def show_completed_models(completed_models):
    """Show all the models that were printed."""
    print("\nThe following models have been printed: ")
    for completed_model in completed_models:
        print(completed_model)

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []
print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)


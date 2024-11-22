
class Dog():
    def __init__(self, name, age):
        """Inicializamos los atributos name y age."""
        self.name = name
        self.age = age
    
    def sit(self):
        """Simula que el perro se sienta"""
        print(self.name.title() + " is now sitting")
    
    def roll_over(self):
        """simula roll_over"""
        print(self.name.title() + " rolled over!")


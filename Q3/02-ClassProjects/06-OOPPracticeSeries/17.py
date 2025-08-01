'''
Class Decorators
Assignment:
Create a class decorator add_greeting that modifies a class to add a greet() method returning "Hello from Decorator!".
Apply it to a class Person.
'''

def add_greeting(cls):
    def greet(self):
        return "Hello from Decorator!"
    cls.greet = greet
    return cls

@add_greeting
class Person:
    def __init__(self, name):
        self.name = name

# Create object of Person
p = Person("Alice")

# Call the added method
print(p.greet())

'''
Composition
Assignment:
Create a class Engine and a class Car. Use composition by passing an Engine object to the Car class
during initialization. Access a method of the Engine class via the Car class.
'''

class Engine:
    def start(self):
        print("Engine started.")

class Car:
    def __init__(self, engine):
        self.engine = engine  # Composition: Engine is a part of Car

    def start_car(self):
        self.engine.start()  # Accessing Engine's method through Car

# Create Engine object
engine = Engine()

# Pass Engine object to Car
my_car = Car(engine)

# Start the car (which starts the engine)
my_car.start_car()

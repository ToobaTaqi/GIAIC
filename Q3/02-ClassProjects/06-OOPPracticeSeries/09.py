'''
Abstract Classes and Methods
Assignment:
Use the abc module to create an abstract class Shape with an abstract method area().
Inherit a class Rectangle that implements area().
'''

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Create Rectangle object and call area
rect = Rectangle(5, 4)
print("Area of rectangle:", rect.area())

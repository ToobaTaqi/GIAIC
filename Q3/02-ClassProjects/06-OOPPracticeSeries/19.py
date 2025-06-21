'''
callable() and __call__()
Assignment:
Create a class Multiplier with an __init__() to set a factor. Define a __call__() method that multiplies
an input by the factor. Test it with callable() and by calling the object like a function.
'''

class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, value):
        return value * self.factor

# Create object
m = Multiplier(3)

# Check if object is callable
print("Is m callable?", callable(m))

# Call the object like a function
result = m(10)
print("Result:", result)

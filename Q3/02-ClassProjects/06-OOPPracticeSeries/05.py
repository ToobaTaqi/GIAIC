'''
Static Variables and Static Methods
Assignment:
Create a class MathUtils with a static method add(a, b) that returns the sum. No class or
instance variables should be used.
'''

class MathUtils:
    @staticmethod
    def add(a, b):  # static method
        return a + b

# Call static method without creating an instance
result = MathUtils.add(5, 3)
print(result)

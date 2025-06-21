'''
Property Decorators: @property, @setter, and @deleter
Assignment:
Create a class Product with a private attribute _price. Use @property to get the price, @price.setter to update it,
and @price.deleter to delete it.
'''

class Product:
    def __init__(self, price):
        self._price = price  # private attribute

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        if value >= 0:
            self._price = value
        else:
            print("Invalid price. Must be non-negative.")

    @price.deleter
    def price(self):
        print("Price deleted.")
        del self._price

# Create Product object
p = Product(100)

# Get price
print("Price:", p.price)

# Set new price
p.price = 150
print("Updated Price:", p.price)

# Delete price
del p.price

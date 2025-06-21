'''
Access Modifiers: Public, Private, and Protected
Assignment:
Create a class Employee with:

a public variable name,

a protected variable _salary, and

a private variable __ssn.

Try accessing all three variables from an object of the class and document what happens.
'''

class Employee:
    def __init__(self, name, salary, ssn):
        self.name = name          # public variable
        self._salary = salary     # protected variable
        self.__ssn = ssn          # private variable

# Create object
emp = Employee("Alice", 50000, "123-45-6789")

# Access public variable
print("Public:", emp.name)

# Access protected variable (by convention, not recommended outside the class)
print("Protected:", emp._salary)

# Attempt to access private variable directly
try:
    print("Private:", emp.__ssn)
except AttributeError as e:
    print("Private: Cannot access directly -", e)

# Access private variable using name mangling (not recommended, but possible)
print("Private (via name mangling):", emp._Employee__ssn)

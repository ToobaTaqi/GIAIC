'''
Creating a Custom Exception
Assignment:
Create a custom exception InvalidAgeError. Write a function check_age(age) that raises this exception if age < 18.
Handle it with try...except.
'''

# Define custom exception
class InvalidAgeError(Exception):
    pass

# Function to check age
def check_age(age):
    if age < 18:
        raise InvalidAgeError("Age must be 18 or older.")
    else:
        print("Age is valid.")

# Test the function
try:
    check_age(16)
except InvalidAgeError as e:
    print("Exception caught:", e)

'''
Constructors and Destructors
Assignment:
Create a class Logger that prints a message when an object is created (constructor) and another message
when it is destroyed (destructor).
'''

class Logger:
    def __init__(self):
        print("Logger object created.")  # constructor message

    def __del__(self):
        print("Logger object destroyed.")  # destructor message

# Create an object
log = Logger()

# Delete the object to trigger destructor
del log

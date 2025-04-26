# Press ctrl+r to run the python file

print("hi")

print("-"*10)

# string methods:
# //Everything in python is an object- just like JS
# //string methods are methods that can be called on a string object
# //they are used to perform operations on the string
# //they are case sensitive

String="ThisIsExampleString"

print(String.upper())  # converts the string to uppercase
print(String.lower())  # converts the string to uppercase
print(String) #The original string is not affected yet

# Numbers

print(10/3)
print(10//3) # integer division, returns the quotient in which the digits after the decimal point are not taken into account
print(10%3) # returns the remainder of the division of the number before it by th
print(2**3) # returns the number before it raised to the power indicated after it

# Exercise:
i=4
x=2*i+3 
print(x)

# numer methods
print(round(2.9))
print(round(2.5))
print(abs(-2.5))

# Math module
import math
print(math.pi)

# Type conversion
x="1"
y=6

print(type(x)) # concatenation of strings
print(int(x)+y) # concatenation of strings

# Conditional Statements
if y==5:
    print("y is positive")
elif y==6:
    print("y is equal to 6")
else:
    print("y is negative")


# function
def isPalindrome(strng):
    rev = strng[::-1]
    if(strng==rev):
        print("The string is Palindrome")
    else:
        print("The string is not palindrome")

isPalindrome("madam")
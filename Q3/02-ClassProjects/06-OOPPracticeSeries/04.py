'''
Class Variables and Class Methods
Assignment:
Create a class Bank with a class variable bank_name. Add a class method change_bank_name(cls, name)
that allows changing the bank name. Show that it affects all instances.
'''

class Bank:
    bank_name = "Old Bank"  # class variable

    @classmethod
    def change_bank_name(cls, name):  # class method
        cls.bank_name = name

# Create instances
acc1 = Bank()
acc2 = Bank()

# Print initial bank names
print("Before change:")
print(acc1.bank_name)
print(acc2.bank_name)

# Change the bank name using class method
Bank.change_bank_name("New Bank")

# Print updated bank names
print("\nAfter change:")
print(acc1.bank_name)
print(acc2.bank_name)

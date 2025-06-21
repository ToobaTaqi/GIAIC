'''
Aggregation
Assignment:
Create a class Department and a class Employee. Use aggregation by having a Department object store a reference
to an Employee object that exists independently of it.
'''

class Employee:
    def __init__(self, name):
        self.name = name

class Department:
    def __init__(self, dept_name, employee):
        self.dept_name = dept_name
        self.employee = employee  # Aggregation: reference to an external Employee

    def show_details(self):
        print(f"Department: {self.dept_name}, Employee: {self.employee.name}")

# Create Employee object independently
emp = Employee("Sarah")

# Pass Employee object to Department (aggregation)
dept = Department("HR", emp)

# Show details
dept.show_details()

# What You Will Learn :
# Functions
# Exceptions


# Instructions
# Write a function to compute 5/0 and use try/except to catch the exceptions.
# Bonus : use some Buit-in exceptions of Python : Look here

# def divide():
#     try :
#         return 5/0
#     except ZeroDivisionError:
#         print("You can't divide by zero")

# divide()

try:
    num1 = int(input("Enter first number : "))
    num2 = int(input("Enter second number : "))
    print(num1/num2)
except ZeroDivisionError:
    print("You can't divide by zero")
except ValueError:
    print("Please enter a valid number")


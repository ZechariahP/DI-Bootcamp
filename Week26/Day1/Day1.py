def say_hello(name):
    print(f"Hello! {name}")

say_hello('bob')
say_hello('alice')

def say_hello(username, language):
    if language == 'EN':
        print(f"Hello! {username}")
    elif language == 'FR':
        print(f"Bonjour {username}")
    else:
        print(f"Hello! {username}")

say_hello('bob', 'EN')
say_hello('alice', 'FR')

# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

def calculation(a, b):
    return a + b, a - b

print(calculation(40, 10))

# Given a list of numbers, write a function that returns the sum of every number. BUT you can have a malicious string inside the list.

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

def sum_numbers(my_list):
    total = 0
    for item in my_list:
        if type(item) == int:
            total += item
    return total

print(sum_numbers(my_list))
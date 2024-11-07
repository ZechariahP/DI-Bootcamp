# print(3 + 5)
# if 5 > 3:
#     print("Yes")
#
# print("hello")
#
# # sequence data types
# my_name = "Zachary"
# hello = "Hello World"
# my_age = 36
# my_list = [my_name, my_age, hello]
# print(my_list)
#
# print(my_list[0])
# print(my_list[1])
#
# my_list.pop()
# print(my_list)

# my_tuple = (1, 2, 3, 4, 5)

# list1 = [5, 10, 15, 20, 25, 50, 20]
# number_to_search = 201

# if number_to_search in list1:
#     index = list1.index(number_to_search)
#     list1[index] = 200
# else:
#     print(f"{number_to_search} is not in the list")

# my_tuple = (5, 6, 7)
# # a = my_tuple[0]
# # b = my_tuple[1]
# # c = my_tuple[2]

# a, b, c = my_tuple

# print(a)
# print(b)
# print(c)

# # Accept a number from the user and print its multiplication table

# print("Enter a number: ")
# number = int(input())
# for i in range(1, 11):
#     print(f"{number} x {i} = {number * i}")

num = int(input("Enter a number: "))

# for i in range(1, 13):
#     print(f"{num} x {i} = {num * i}")

current_number = 1
while current_number <= 10:
    print(f"{current_number} x {num} = {current_number * num}")
    current_number += 1

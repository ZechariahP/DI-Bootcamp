# What You Will Learn :
# Python Basics
# Loops


# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

print("Enter a number : ")
number = int(input())
print("Enter a length : ")
length = int(input())

print([number * i for i in range(1, length + 1)])


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

print("Enter a string: ")
string = input()

def reduce_duplicates(s):
    result = []
    prev_char = ""
    for char in s:
        if char != prev_char:
            result.append(char)
        prev_char = char
    return "".join(result)

reduced_string = reduce_duplicates(string)
print(reduced_string)
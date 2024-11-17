# 🌟 Exercise 1 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

import random

def get_random_temp():
    return random.randint(-10, 40)

def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp < 23:
        print("It's a bit chilly, but not too bad.")
    elif temp < 32:
        print("Weather is nice, but not too hot.")
    else:
        print("It's hot outside, be careful!")

if __name__ == "__main__":
    main()

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

import random

def get_random_temp(season):
    if season == 'winter':
        return random.uniform(-10, 16)
    elif season == 'spring':
        return random.uniform(0, 23)
    elif season == 'summer':
        return random.uniform(16, 40)
    elif season == 'autumn':
        return random.uniform(0, 23)
    else:
        return random.uniform(-10, 40)

def main():
    season = input("Please enter the season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp:.2f} degrees Celsius.")
    
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp < 23:
        print("It's a bit chilly, but not too bad.")
    elif temp < 32:
        print("Weather is nice, but not too hot.")
    else:
        print("It's hot outside, be careful!")

if __name__ == "__main__":
    main()

# 🌟 Exercise 2 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

def ask_question(question, answer):
    user_answer = input(question + " ")
    if user_answer.lower() == answer.lower():
        print("Correct!")
        return True
    else:
        print("Incorrect. The correct answer is:", answer)
        return False
    
def main():
    correct_answers = 0
    wrong_answers = []

    for question_data in data:
        if ask_question(question_data["question"], question_data["answer"]):
            correct_answers += 1
        else:
            wrong_answers.append(question_data)

    print(f"You got {correct_answers} correct answers and {len(wrong_answers)} wrong answers.")

    if len(wrong_answers) > 3:
        play_again = input("You had more than 3 wrong answers. Do you want to play again? (yes/no): ").lower()
        if play_again == "yes":
            main()
        else:
            print("Thanks for playing!")
    else:
        print("Thanks for playing!")

if __name__ == "__main__":
    main()


# Exercise 3 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.

from datetime import datetime

def get_age(year, month, day):
    current_year = 2024
    current_month = 11
    current_day = 17
    
    birth_date = datetime(year, month, day)
    current_date = datetime(current_year, current_month, current_day)
    
    age = current_date.year - birth_date.year - ((current_date.month, current_date.day) < (birth_date.month, birth_date.day))
    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split('/'))
    age = get_age(year, month, day)
    
    if gender == 'm' and age >= 67:
        return True
    elif gender == 'f' and age >= 62:
        return True
    else:
        return False

def main():
    gender = input("Please enter your gender (m/f): ").lower()
    date_of_birth = input("Please enter your date of birth (yyyy/mm/dd): ")
    
    if can_retire(gender, date_of_birth):
        print("You can retire.")
    else:
        print("You cannot retire yet.")

if __name__ == "__main__":
    main()


# Exercise 4:
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:

# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful

def calculate_value(X):
    X_str = str(X)
    result = int(X_str) + int(X_str * 2) + int(X_str * 3) + int(X_str * 4)
    return result

def main():
    X = int(input("Enter an integer (X): "))
    result = calculate_value(X)
    print(f"The result is: {result}")

if __name__ == "__main__":
    main()
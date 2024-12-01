# Daily Challenge : Text Analysis
# Last Updated: November 20th, 2024

# What You Will Learn :
# OOP
# Modules


# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.



# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.


# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

import string
import re

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        frequency = words.count(word)
        if frequency == 0:
            return None
        return frequency

    def most_common_word(self):
        words = self.text.split()
        word_counts = {}
        for word in words:
            if word in word_counts:
                word_counts[word] += 1
            else:
                word_counts[word] = 1
        most_common = max(word_counts, key=word_counts.get)
        return most_common

    def unique_words(self):
        words = self.text.split()
        unique_words = set(words)
        return list(unique_words)

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)

class TextModification(Text):
    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def remove_stop_words(self):
        stop_words = set([
            'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves',
            'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their',
            'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are',
            'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an',
            'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about',
            'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up',
            'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when',
            'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
            'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should',
            'now'
        ])
        words = self.text.split()
        filtered_text = ' '.join([word for word in words if word.lower() not in stop_words])
        return filtered_text

    def remove_special_characters(self):
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)

if __name__ == "__main__":
    text_instance = Text("A good book would sometimes cost as much as a good house.")
    print(f"Frequency of 'good': {text_instance.word_frequency('good')}")
    print(f"Most common word: {text_instance.most_common_word()}")
    print(f"Unique words: {text_instance.unique_words()}")

    text_instance_from_file = Text.from_file('the_stranger.txt')
    print(f"Frequency of 'the': {text_instance_from_file.word_frequency('the')}")
    print(f"Most common word: {text_instance_from_file.most_common_word()}")
    print(f"Unique words: {text_instance_from_file.unique_words()}")

    text_mod_instance = TextModification("Hello, world! This is a test. Let's remove punctuation and stop words.")
    print(f"Text without punctuation: {text_mod_instance.remove_punctuation()}")
    print(f"Text without stop words: {text_mod_instance.remove_stop_words()}")
    print(f"Text without special characters: {text_mod_instance.remove_special_characters()}")
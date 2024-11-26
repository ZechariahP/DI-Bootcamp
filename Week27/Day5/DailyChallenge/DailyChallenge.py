# What You Will Learn :
# OOP


# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
# ANS: A class is a blueprint for creating objects.
# What is an instance?
# ANS: An instance is an object that is created from a class.
# What is encapsulation?
# ANS: An encapsulation is a way to restrict access to methods and variables.
# What is abstraction?
# ANS: An abstraction is a way to hide the implementation details and show only the functionality to the users.
# What is inheritance?
# ANS: An inheritance is a way to create a new class for using details of an existing class without modifying it.
# What is multiple inheritance?
# ANS: Multiple inheritance is a way to inherit from multiple classes.
# What is polymorphism?
# ANS: Polymorphism is a way to use a class in different ways.
# What is method resolution order or MRO?
# ANS: MRO is a way to resolve the inheritance hierarchy.


# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        self.shuffle()

    def shuffle(self):
        if len(self.cards) != 52:
            self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return None
        return self.cards.pop()

deck = Deck()
print(deck.deal())
print(deck.deal())
deck.shuffle()
print(deck.deal())
# Daily Challenge - Circle
# Last Updated: September 22nd, 2023

# What You Will Learn :
# OOP dunder methods


# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

import turtle
import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def draw(self, turtle_obj):
        turtle_obj.circle(self.radius)

circle1 = Circle(radius=50)
circle2 = Circle(diameter=100)
circle3 = circle1 + circle2

print(circle1)
print(circle2)
print(circle3)
print(circle1 < circle2)
print(circle1 == circle2)

circles = [circle1, circle2, circle3]
circles.sort()
for circle in circles:
    print(circle)

screen = turtle.Screen()
t = turtle.Turtle()

for circle in circles:
    t.penup()
    t.goto(0, -circle.radius)
    t.pendown()
    circle.draw(t)
    t.penup()
    t.goto(0, 0)

screen.mainloop()

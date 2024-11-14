def upper_string(s):
    return s.upper()

fruits = ['apple', 'orange', 'banana', 'melon', 'kiwi']

map_object = map(upper_string, fruits)
print(list(map_object))

filter_object = filter(lambda x: x.startswith('a'), fruits)
print(list(filter_object))

names = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

def is_length_less_than_5(name):
    return len(name) < 5

def say_hello(name):
    return f"Hello {name}"

filtered_names = filter(is_length_less_than_5, names)
# print(list(filtered_names))
names_with_hello = map(say_hello, filtered_names)
print(list(names_with_hello))


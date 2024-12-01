# Read the file line by line
# Read only the 5th line of the file
# Read only the 5 first characters of the file
# Read all the file and return it as a list of strings. Then split each word
# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# Append your first name at the end of the file
# Append "SkyWalker" next to each first name "Luke"

# Read the file line by line
for line in open("nameslist.txt"):
    print(line.strip())


# Read only the 5th line of the file
with open("nameslist.txt") as f:
    names = f.readlines()
    print(names[5])

# Read only the 5 first characters of the file
with open("nameslist.txt") as f:
    print(f.read(5))

# Read all the file and return it as a list of strings. Then split each word
with open("nameslist.txt") as f:
    print(f.readlines())


# Read all the file and return it as a list of strings. Then split each word
with open("nameslist.txt") as f:
    names = list(map(lambda name: name.strip(), f.readlines()))
    occurences_of_darth = names.count("Darth")
    occurences_of_luke = names.count("Luke")
    occurences_of_lea = names.count("Lea")

    print("occurences_of_darth: ", occurences_of_darth)
    print("occurences_of_luke: ", occurences_of_luke)
    print("occurences_of_lea: ", occurences_of_lea)

# Append your first name at the end of the file
with open("nameslist.txt", "a") as f:
    f.write("\nBob")

# Append "SkyWalker" next to each first name "Luke"
with open("nameslist.txt", "r+") as f:
    names_as_str = f.read()
    names_as_str = names_as_str.replace("Luke", "Luke SkyWalker")
    f.seek(0)
    f.write(names_as_str)
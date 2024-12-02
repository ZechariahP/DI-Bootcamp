from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker('sowpods.txt')
    
    while True:
        print("Menu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ")

        if choice == '2':
            break
        elif choice == '1':
            word = input("Enter a word: ").strip()
            if ' ' in word or not word.isalpha():
                print("Error: Please enter a single alphabetic word.")
                continue

            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"YOUR WORD: \"{word.upper()}\"")
                print("This is a valid English word.")
                print(f"Anagrams for your word: {', '.join(anagrams)}")
            else:
                print(f"YOUR WORD: \"{word.upper()}\"")
                print("This is not a valid English word.")
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
class AnagramChecker:
    def __init__(self, word_list_file='sowpods.txt'):
        with open(word_list_file, 'r') as file:
            self.words = set(file.read().split())

    def is_valid_word(self, word):
        return word.upper() in self.words

    def get_anagrams(self, word):
        return [w for w in self.words if self.is_anagram(word.upper(), w)]

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2) and word1 != word2
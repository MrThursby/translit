from random import random

ru_alphabet = 'йцукенгшщзхъфывапролджэячсмитьбю'
en_alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,."
index = 0


def update_index():
    global index
    index = int(random() * (len(ru_alphabet) - 1))


while True:
    out = input(ru_alphabet[index] + ": ")

    if out == en_alphabet[index]:
        update_index()

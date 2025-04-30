import random
import string
#choose length of name up to 13 chars

def generate_name():
    name_len = random.randint(1, 13)

    new_name = []
    alphabet = list(string.ascii_lowercase)

    for i in range(name_len):
        new_name.append(random.choice(alphabet))

    name_string = ''.join(new_name)
    return name_string


    
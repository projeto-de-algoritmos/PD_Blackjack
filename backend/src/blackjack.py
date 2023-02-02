import random

"""
Cards number description:
  1 -> AS
  11 -> J
  12 -> Q
  13 -> K
  2 - 10 -> 2 - 10

Naipes description:
  0 -> ESPADAS
  1 -> PAUS
  2 -> COPAS
  3 -> OUROS
"""

def init_hand():
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  naipes = [0, 1, 2, 3]

  shuffle = {
      "dealer": [],
      "dealer_naipes": [],
      "player": [],
      "player_naipes": [],
      "hint": []
    }

  for i in range(2):
    shuffle['dealer'].append(random.choice(cards))
    shuffle['dealer_naipes'].append(random.choice(naipes))
    shuffle['player'].append(random.choice(cards))
    shuffle['player_naipes'].append(random.choice(naipes))

  shuffle['hint'] = get_hint(shuffle)

  return shuffle

def get_hint(shuffle):
  return [1,2,3,4]


if __name__ == "__main__":
  init_hand()
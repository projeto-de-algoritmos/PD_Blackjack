import random

n = 13
maxn = 13
maxp = 21
C = 21
solution = []

"""
Cards number description:
  1 -> AS
  11 -> J
  12 -> Q
  13 -> K
  2 - 10 -> 2 - 10

Naipes description:
  0 -> PAUS
  1 -> COPAS
  2 -> ESPADA
  3 -> OUROS
"""
def init_knapsack():
  v = [i for i in range(10+1)]
  for _ in range(3):
    v.append(10)
  dp = [[0 for _ in range(maxp+1)] for _ in range(maxn+1)]

  return dp, v

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

  for _ in range(2):
    shuffle['dealer'].append(random.choice(cards))
    shuffle['dealer_naipes'].append(random.choice(naipes))
    shuffle['player'].append(random.choice(cards))
    shuffle['player_naipes'].append(random.choice(naipes))

  shuffle['hint'] = get_hint(sum(shuffle["player"]))

  return shuffle


def get_hint(value):
  value = int(value)
  global dp
  global v
  dp, v = init_knapsack()

  ans = 0

  for i in range(1,n+1):
    for P in range(1,C+1):
      dp[i][P] = dp[i-1][P]

      if(P >= v[i]):
        dp[i][P] = max(dp[i][P], dp[i-1][P-v[i]] + v[i])
      ans = max(ans,dp[i][P])

  find_solution(dp,13,21-value)
  return {
    "hint": solution
  }

def find_solution(matrix, lastrow ,target):
  if lastrow == 0:
    return solution

  if matrix[lastrow-1][target] == target:
    find_solution(matrix, lastrow-1, target)
  
  elif matrix[lastrow-1][target - v[lastrow]] + v[lastrow] == target:
    solution.append(lastrow)
    target = target - v[lastrow]
    lastrow = lastrow - 1

    find_solution(matrix, lastrow, target)

# if __name__ == "__main__":
#   print(get_hint(7))
  

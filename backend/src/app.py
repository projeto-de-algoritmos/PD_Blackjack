from flask import Flask
from flask_cors import CORS
import blackjack

app = Flask(__name__)
CORS(app)

@app.route("/")
def Hello():
  return "Minha pagina Flask"

@app.route("/start")
def Init_Hand():
  return blackjack.init_hand()

@app.route("/get_card/<sum_cards>")
def Get_Card(sum_cards):
  return blackjack.get_card(sum_cards)

@app.route("/get_dealercard/<sum_cards>")
def Get_DealerCard(sum_cards):
  return blackjack.get_dealercard(sum_cards)

@app.route("/get_hint/<value>")
def Get_hint(value):
  return blackjack.get_hint(value)

if __name__ == "__main__":
  app.run(debug=True)
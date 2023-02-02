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

if __name__ == "__main__":
  app.run(debug=True)
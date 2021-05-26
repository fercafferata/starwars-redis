from flask import Flask
from connect import *
app = Flask(__name__)


@app.route('/')
def index():
    return "Hola Mundo"


@app.route('/about')
def about():
    return "About python Flask"

if __name__ == '__main__':
    app.run(host='localhost', port='5000', debug=False)
from logging import debug
from flask import Flask
from flask import render_template
import redis

app = Flask(__name__)

def connect_db():
    conexion = redis.StrictRedis(host='127.0.0.1', port=6379, db=0)
    if (conexion.ping()):
        print('conectado al servidor redis')
    else:
        print('error')
    return conexion


@app.route('/')
def index():
    connect_db()
    return render_template('/template.html')


@app.route('/about')
def about():
    return 'About python Flask'

if __name__ == '__main__':
    app.run(host='localhost', port='5000', debug=False)
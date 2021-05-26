import redis

def connect_db():
    conexion = redis.StrictRedis(host="db-redis", port=6379, db=0)
    if (conexion.ping()):
        print("conectando al servidor de redis")
    else:
        print('error.....')
    return conexion

from flask import Flask, request, make_response
from datetime import timedelta
from flask_jwt_extended import JWTManager
import os
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
from waitress import serve
from flask_cors import CORS

# flask
api = Flask(__name__)
CORS(api)
api.config['CORS_HEADERS'] = 'Content-Type'
api.config["JWT_SECRET_KEY"] = "xwmq1cf4xqkjmv4tcnh8hepa822n8yog"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)

# db
load_dotenv(find_dotenv())
password = os.environ.get("MONGODB_PWD")

connection_string = f"mongodb+srv://CodeNinjas:{password}@codeninjas.lppiwo8.mongodb.net/?retryWrites=true&w=majority&appName=codeninjas"
client = MongoClient(connection_string)

databases = client.list_database_names()
userLogin_database = client.loginData
userData_database = client.userData

# import test_route
import user_routes
import teacher_routes
import student_routes

# hostip = '192.168.86.20'
hostip = '192.168.0.183'
# hostip = '192.168.86.45'
# hostip = 'localhost'
port = 50100
if __name__ == '__main__':
    print("Server running on: "  + hostip + ":" + str(port))
    serve(api, host=hostip, port=port, threads=2)

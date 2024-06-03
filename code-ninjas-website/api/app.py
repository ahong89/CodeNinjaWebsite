import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
import os
from pymongo import MongoClient
from passlib.hash import pbkdf2_sha256
from dotenv import load_dotenv, find_dotenv


# flask
api = Flask(__name__)

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

# sign up
@api.route('/signup', methods=["POST"])
def signup():
    user = {
        "email": request.json.get("email"),
        "password": request.json.get("password")
    }

    user["password"] = pbkdf2_sha256.encrypt(user["password"])

    if userLogin_database.users.find_one({"email": user["email"]}):
        return {"msg": "Email already in use"}, 400

    if userLogin_database.users.insert_one(user):
        return {"msg": "Sign up succeeded"}, 200
    
    return {"msg": "Error, signup Failed"}, 400


# logging in
@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = userLogin_database.users.find_one({
        "email": email
    })

    if user and pbkdf2_sha256.verify(password, user['password']):
        access_token = create_access_token(identity=email)
        response = {"access_token": access_token}
        return response
    
    return {"msg": "Wrong email or password"}, 401
    
# logging out
@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        return response

@api.route('/profile', methods=["GET"])
@jwt_required()
def my_profile():
    current_user = get_jwt_identity()
    print(current_user)
    response_body = userData_database.userData.find_one({
        "email": current_user
    })

    if response_body:
        response = json.dumps(response_body, default=str)
        return response

    return {"msg": "Something went wrong with your token"}, 400
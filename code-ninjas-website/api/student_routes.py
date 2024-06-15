from app import api, userData_database
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
import json
from flask import request

@api.route('/profile', methods=["GET"])
@jwt_required()
def my_profile():
    current_user = get_jwt_identity()
    print("User, " + current_user + ", made a request for their profile")
    response_body = userData_database.userData.find_one({
        "email": current_user
    })
    del response_body['_id']
    if response_body:
        profile = json.dumps(response_body)
        return profile

    return {"msg": "Something went wrong with your token"}, 400

@api.route('/submitlink', methods=["POST"])
@jwt_required()
def submit_link():
    tasks = request.json.get("tasks")
    studentQuery = {"email": request.json.get("email")}
    newData = { "$set": { 'tasks': tasks } }
    if userData_database.userData.update_one(studentQuery, newData):
        return {"msg": request.json.get("email") + "'s tasks have been updated successfully"}, 200

    return {"msg": "Student not found"}, 500
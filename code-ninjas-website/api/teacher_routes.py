from app import api, userData_database
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from flask import request

# util
def verifyTeacher(current_user):
    current_user = get_jwt_identity()
    teacherData = userData_database.userData.find_one({"email": current_user})
    return teacherData['isTeacher']

# getters
@api.route('/getacctype', methods=["GET"])
@jwt_required()
def get_acctype():
    current_user = get_jwt_identity()
    userData = userData_database.userData.find_one({"email": current_user})
    response = {'isTeacher': userData['isTeacher']}
    return response

@api.route('/getallstudents', methods=["GET"])
@jwt_required()
def get_allstudents():
    if not verifyTeacher(get_jwt_identity):
        return {"msg": "Account not authorized to complete action"}, 400
    
    allStudents = userData_database.userData.find({"isTeacher": False})
    response = {}
    for student in allStudents:
        del student['_id']
        response[student["name"]] = student
    return response, 200

# setters
@api.route('/setnb', methods=["POST"])
@jwt_required()
def set_ninjabucks():
    if not verifyTeacher(get_jwt_identity):
        return {"msg": "Account not authorized to complete action"}, 400
    
    nb = request.json.get("nb")
    studentQuery = {"email": request.json.get("email")}
    newData = { "$set": { 'nb': nb } }
    if userData_database.userData.update_one(studentQuery, newData):
        return {"msg": request.json.get('email') + "'s ninja bucks have been updated successfully"}, 200
    
    return {"msg": "Student not found"}, 500

@api.route('/settasks', methods=["POST"])
@jwt_required()
def set_tasks():
    if not verifyTeacher(get_jwt_identity):
        return {"msg": "Account not authorized to complete action"}, 400

    tasks = request.json.get("tasks")
    studentQuery = {"email": request.json.get("email")}
    newData = { "$set": { 'tasks': tasks } }
    if userData_database.userData.update_one(studentQuery, newData):
        return {"msg": request.json.get("email") + "'s tasks have been updated successfully"}, 200

    return {"msg": "Student not found"}, 500

@api.route('/setnotes', methods=["POST"])
@jwt_required()
def set_notes():
    if not verifyTeacher(get_jwt_identity):
        return {"msg": "Account not authorized to complete action"}, 400

    notes = request.json.get("notes")
    studentQuery = {"email": request.json.get("email")}
    newData = { "$set": { 'notes': notes } }
    if userData_database.userData.update_one(studentQuery, newData):
        return {"msg": request.json.get("email") + "'s notes have been updated successfully"}, 200
    
    return {"msg": "Student not found"}, 500
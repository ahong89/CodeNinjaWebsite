from __main__ import api, userData_database
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from flask import request


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
    current_user = get_jwt_identity()
    teacherData = userData_database.userData.find_one({"email": current_user})
    if not teacherData['isTeacher']:
        return {"msg": "Account not authorized to complete action"}, 400
    
    allStudents = userData_database.userData.find({"isTeacher": False})
    response = []
    for student in allStudents:
        del student['_id']
        response.append(student)
    return response, 200

@api.route('/setnb', methods=["POST"])
@jwt_required()
def set_ninjabucks():
    current_user = get_jwt_identity()
    teacherData = userData_database.userData.find_one({"email": current_user})
    if not teacherData['isTeacher']:
        return {"msg": "Account not authorized to complete action"}, 400
    
    studentQuery = {"email": request.json.get("email")}
    studentData = userData_database.userData.find_one(studentQuery)
    if studentData:
        nb = request.json.get("nb")
        newData = { "$set": { 'nb': nb } }
        userData_database.userData.update_one(studentQuery, newData)
        print("nb of " + request.json.get("email") + " have been updated to: " + str(nb))
        return {"msg": studentData['email'] + "'s ninja bucks have been updated successfully"}, 200
    
    return {"msg": "Student not found"}, 500

@api.route('/settasks', methods=["POST"])
@jwt_required()
def set_tasks():
    current_user = get_jwt_identity()
    teacherData = userData_database.userData.find_one({"email": current_user})
    if not teacherData['isTeacher']:
        return {"msg": "Account not authorized to complete action"}, 400

    tasks = request.json.get("tasks")
    studentQuery = {"email": request.json.get("email")}
    newData = { "$set": { 'tasks': tasks } }
    if userData_database.userData.update_one(studentQuery, newData):
        return {"msg": request.json.get("email") + "'s tasks have been updated successfully"}

    return {"msg": "Student not found"}, 500

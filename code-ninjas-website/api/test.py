from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient
load_dotenv(find_dotenv())

password = os.environ.get("MONGODB_PWD")

connection_string = f"mongodb+srv://CodeNinjas:{password}@codeninjas.lppiwo8.mongodb.net/?retryWrites=true&w=majority&appName=codeninjas"
client = MongoClient(connection_string)

databases = client.list_database_names()
userData_database = client.userData
collections = userData_database.list_collection_names()
# print(collections)

def insert_test_doc():
    collection = userData_database.userData
    test_document = {
        "email": "honga010807@gmail.com",
        "name": "Andrew Hong",
        "join_date": "6/3/2024",
        "nb": 4000,
        "isTeacher": False,
        "tasks": [
            [
                "Complete the weekly prompt",
                "5/30/2024",
                "complete"
            ],
            [
                "Start the unity project",
                "6/2/2024",
                "in progress"
            ]
        ]
    }
    inserted_id =  collection.insert_one(test_document).inserted_id
    print(inserted_id)

def read_test_doc():
    document = userData_database.userData.find_one({"user": "neiphu"})
    print(document["tasks"])

def delete_doc():
    output = userData_database.userData.delete_one({"email": "honga010807@gmail.com"})
    print(output)

insert_test_doc()


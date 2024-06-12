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
        "email": "joe@gmail.com",
        "name": "Joe Jawn",
        "join_date": "6/3/2024",
        "nb": 3,
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
        ],
        "notes": {
            "rank": "black belt",
            "age": 18,
            "membership": "idk",
            "sensei": "Sensei Nathan",
            "platform": "Unity",
            "dateofbirth": "7/5/2009",
            "lastcontacted": "5 days ago",
            "lastadvanced": "8 days ago",
            "progress": "not good",
            "status": "bad",
            "entries": [
                ["1/2/3", "abc"],
                ["3/4/5", "alr lemme lock in"]
            ]
        }
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


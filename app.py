import os
from random import random
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, auth, firestore
 
# Load environment variables
load_dotenv()
 
# Initialize Flask
app = Flask(__name__)
CORS(app)
 
# Initialize Firebase
cred = credentials.Certificate("bookmyslot-b3f29-firebase-adminsdk-fbsvc-4a6eb1fc83.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
 
# API Route

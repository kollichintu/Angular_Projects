from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import urllib,datetime,json, time
from flask_cors import CORS, cross_origin


# start_time = time.time()

#Installation of Flask
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


#set db connection
params = urllib.parse.quote_plus('DRIVER={SQL Server Native Client 11.0};SERVER=AGN-CL-LAXMANK-\SQLEXPRESS;DATABASE=Treffen_DB;Trusted_Connection=yes;')

app.config['SQLALCHEMY_DATABASE_URI'] = "mssql+pyodbc:///?odbc_connect=%s" % params
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


#instance db object
db = SQLAlchemy(app)

#instantiate marshmallow object
ma = Marshmallow(app)

class User(db.Model):
    __tablename__ = 'User'
    
    Id = db.Column(db.Integer, primary_key=True)
    First_name = db.Column(db.String(400), nullable=False)
    Last_name = db.Column(db.String(400), nullable=False)
    Email = db.Column(db.String(400), nullable=False)
    Password = db.Column(db.String(400), nullable=False)
    
# def _repr_(self):
#     return self.Meeting_Id

#create User Schema
class UserSchema(ma.Schema):
    class Meta:
        fields = ('First_name', 'Last_name','Email', 'Password')
        
#create instance of User
user_schema = UserSchema(many=False)
users_schema = UserSchema(many=True)

class Treffen(db.Model):
    __tablename_ = 'Treffen'
    
    #Id = db.Column(db.Integer, primary_key=True)
    Meeting_Id = db.Column(db.Integer, primary_key=True)
    Meeting_Agenda = db.Column(db.String(400), nullable=False)
    Meeting_Duration = db.Column(db.Integer, nullable=False)
    Meeting_Room = db.Column(db.String(400), nullable=False)
    Created_Timestamp = db.Column(db.DateTime, default=datetime.datetime.utcnow)


    

#create Treffen Schema 
class TreffenSchema(ma.Schema):
    class Meta:
        fields = ('Meeting_Id', 'Meeting_Agenda','Meeting_Duration', 'Meeting_Room', 'Created_Timestamp')

#create instance of schema
treffen_schema = TreffenSchema(many=False)
treffens_schema = TreffenSchema(many=True)
        
# get all Meetings from DB 
@app.route('/api/Treffen', methods=['GET'])
@cross_origin()
def get_AllMeetings():
    Treffens = Treffen.query.all()
    result_set = treffens_schema.dump(Treffens)
    
    # end_time = time.time() 
    # total_time = end_time - start_time
    # print("Total time taken is= " , total_time)
    
    return jsonify(result_set)

#get meeting from DB
@app.route('/api/Treffen/<int:id>', methods=['GET'])
@cross_origin()
def get_meeting(id):
    meeting = Treffen.query.get_or_404(int(id))
    return treffen_schema.jsonify(meeting)

#create Treffen route
@app.route('/api/Treffen', methods=['POST'])
def add_meeting():
    
    try:
        Meeting_Id = request.json['Meeting_Id']
        Meeting_Agenda = request.json['Meeting_Agenda']
        Meeting_Duration = request.json['Meeting_Duration']
        Meeting_Room = request.json['Meeting_Room']
        
        new_meeting = Treffen(Meeting_Id = Meeting_Id, Meeting_Agenda = Meeting_Agenda, Meeting_Duration = Meeting_Duration, Meeting_Room = Meeting_Room)
        
        db.session.add(new_meeting)
        db.session.commit()
        
        return treffen_schema.jsonify(new_meeting)
        
    except Exception as e:
        return jsonify({"Error":"Invalid request"})
    
#update meeting to DB
@app.route('/api/Treffen/<int:id>', methods=['PUT'])
def update_meeting(id):
    treffen = Treffen.query.get_or_404(int(id))
    
    Meeting_Id = request.json['Meeting_Id']
    Meeting_Agenda = request.json['Meeting_Agenda']
    Meeting_Duration = request.json['Meeting_Duration']
    Meeting_Room = request.json['Meeting_Room']
    
    treffen.Meeting_Id = Meeting_Id
    treffen.Meeting_Agenda = Meeting_Agenda
    treffen.Meeting_Duration =Meeting_Duration
    treffen.Meeting_Room = Meeting_Room
    
    db.session.commit()
    
    return treffen_schema.jsonify(treffen)

#delete meeting from DB
@app.route('/api/Treffen/<int:meeting_id>', methods=['DELETE'])
@cross_origin()
def delete_meeting(meeting_id):
    meeting = Treffen.query.get_or_404(int(meeting_id))
    db.session.delete(meeting)
    db.session.commit()
    return jsonify({"Success":"Record deleted successfully"})



#-------------#Users-------------#
@app.route('/api/User', methods=['GET'])
@cross_origin()
def get_AllUsers():
    Users = User.query.all()
    result_set = users_schema.dump(Users)
    
    # end_time = time.time() 
    # total_time = end_time - start_time
    # print("Total time taken is= " , total_time)
    
    return jsonify(result_set)


#create User route
@app.route('/api/User', methods=['POST'])
def add_user():
    
    try:
        First_name = request.json['First_name']
        Last_name = request.json['Last_name']
        Email = request.json['Email']
        Password = request.json['Password']
        
        new_user = User(First_name = First_name, Last_name = Last_name, Email = Email, Password = Password)
        
        db.session.add(new_user)
        db.session.commit()
        
        return user_schema.jsonify(new_user)
        
    except Exception as e:
        return jsonify({"Error":"Invalid request"})

if __name__ == '__main__':
    app.run(debug=True)
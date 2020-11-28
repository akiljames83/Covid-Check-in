import mongoengine
# from mongoengine import connect
from flask import (Flask, render_template, request)
# from flask import Flask, render_template, request
# from schemas import *
from schemas import createNewStore
from schemas import Store
from schemas import User
from schemas import Movie
# from createSchema import createStore

from mongoengine import connect
# connect(db='cc')
connect(db='covid-checkin')

app = Flask("__main__")

@app.route("/")
def my_index():
    # , flask_token="Hello   world"
    return render_template("index.html")


@app.route("/api/newstore")
def newStore():
    return render_template("index.html")


@app.route("/api/newstore", methods=["POST"])
def newStorePost():
    if request.method == "POST":
        storeName = request.form["storeName"]
        storeLng = float(request.form["storeLng"])
        storeLat = float(request.form["storeLat"])
        # print(storeLng)
        # print(storeLat)
        createNewStore(storeName=storeName,
                       storeLng=storeLng, storeLat=storeLat)
        return render_template("index.html")
        # return render_template("home.html")


@app.route("/api/stores")
def allStores():
    # Converting mongoengine objects to JSON to be used by axios
    all_stores = Store.objects()
    json_data = all_stores.to_json()
    # allows json to be found on this route
    return json_data




# additonal signup sutff, sotre additional name for user
@app.route("/api/createUser", methods=['POST'])
def createUser():
    if request.method == 'POST':
        form= request.get_json()
        print("================this is the request", form,  "---", type(form))
        name= form['name']
        email= form['email']
        _id= form['firebaseId']
        # print("userInfo:   ", name, email, _id)
        user = User(name=name)
        user.email= email
        user._id= _id
        user.save()


    return "ok"
#get id from fribase

#make request post to backened to finsh setting up user, username 
#query based on the id to database 
#querying collection named users to get specific user with a username, return username property 
# 2 routes getuserName 
#post reuqest to pass in firbase id and email and username

#route to get the username 
@app.route("/api/SignUser")
def signInUser():
    return "okay"
# Logic is top level (Apps) and the pass it down
#in fronterd in app firbase logic is cotained, when user is loggged in update state vairble for user id and user name, get request from backend function name: getUserName, then pass vairbles to navbar, axios get request in Apps

# needed to correctly catch routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

app.run(debug=True)


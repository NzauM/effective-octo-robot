from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from models import db, Student, Course
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///schools.db'
migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

@app.route('/') # match functions to our paths
def home(): #function to run when at certain path
    return "<p>Hello, World!</p>"


@app.route('/tuesday')
def tuesdayFn():
    print(request)
    return "<h1>I'm ready for Tuesday</h1>"

@app.route('/newuser')
def createUser():
    # get user's info from form data
    # add this info to DB.
    responseBody = "<h1>New USerCreated Successfully</h1>"
    statusCode = 200
    finalResp = make_response(responseBody, statusCode)
    return finalResp
    pass

@app.route('/liststudents')
def showAllStudents():
    # return a list of all our students
    allStudents = Student.query.all()
    studentsList = []
    for student in allStudents:
        studentsList.append(student.to_dict())
        # studentsList.append({'id':student.id,'name': student.name})
    return make_response(studentsList, 200)

@app.route('/listcourses')
def showAllCourses():
    # return a list of all courses
    # get all courses from the DB
    # format this data to a flask response
    # return this flask response object
    allCourses = Course.query.all()
    courseList = []
    for course in allCourses:
        courseList.append(course.to_dict())
    return make_response(courseList, 200)

# find course by Id
@app.route('/listcourses/<int:courseId>')
def showCourse(courseId):
    # find course with given Id, return it as a flask response
    targetCourse = Course.query.get(courseId)
    if targetCourse:
        return make_response(targetCourse.to_dict(),200)
    else:
        return make_response({"error":"Course With that Id Was not found"}, 404)

# add a new course to the DB
@app.route('/addcourse',methods=['POST'])
def addCourse():
    # get user/form data from request and use it to create course instance.
    userData = request.get_json()
    print(userData)
    newCourse = Course(course_name=userData["course_name"])
    db.session.add(newCourse)
    db.session.commit()
    return make_response({"message":"New Course Created Successfully"}, 200)

    # add course instance to session and commit it
    # return some useful response




if __name__ == '__main__':
    app.run()
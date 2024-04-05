from app import app
from models import Student, db, Course
from faker import Faker
import random


with app.app_context():
    fakedata = Faker()

    Student.query.delete()

    studentslist = []
    for i in range(10):
        stude = Student(name=fakedata.name(), course_id=random.randint(1,3))
        studentslist.append(stude)
    db.session.add_all(studentslist)
    db.session.commit()
    print("Seeding Students Done")

    Course.query.delete()
    courselist = []
    for i in range(3):
        myCourse = Course(course_name=fakedata.word())
        courselist.append(myCourse)
    
    db.session.add_all(courselist)
    db.session.commit()
    print("Courses Seeding Done")

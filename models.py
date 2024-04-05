from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

metadataInst = MetaData()
db=SQLAlchemy(metadata=metadataInst)

# Student, Teacher, Course, User

# A student will have/(belongs to) a Course, A course will have many students. One to Many Relationship
# A teacher will have many courses, A course will have many teachers.Many to Many Relationship (course-teachers table)

class Student(db.Model, SerializerMixin):
    __tablename__ = "students"

    # to_dict()=>{id:, name, course_id, course:{course_name, students:{id:, name, course_id, course:{course_name:, students}}}}

    # serialize_only = ['name','id']

#    student1 = Student.query.first()
#     student1.to_dict() => 
#     {
#         id: 1,
#         name: "Mercy Nzau",
#         course_id: 3,
#         course: {
#             id: 3,
#             course_name: "SD",
#             students: {
#                 id: 1,
#                 name: "Mercy Nzau",
#                 course_id: 3,
#                 course:{
#                     course_name: "SD"
#                     students:{
#                         course:{
#                             students:{
#                                 course:{
#                                     student:
#                                 }
#                             }
#                         }
#                     }
#                 }
#             }

#         }
#     }

# student1.to_dict={
#     id:1,
#     name:"Mercy Nzau"
#     course_id:3,
#     course:{
#         id:3,
#         course_name: "SD"
#     }
# }
    serialize_rules=('-course.students',)

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))

    course = db.relationship('Course', back_populates="students")

    pass

class Course(db.Model, SerializerMixin):

    __tablename__ = "courses"

    serialize_rules = ('-students.course',)

    id=db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String)

    students = db.relationship('Student', back_populates="course", cascade="all,delete-orphan")
    # attrname = db.relationship('ModelWeareRelating', back_populates="same attribute on first model")

    # course1.to_dict()=>{
    #     id: 1,
    #     course_name:"DS",
    #     students:{
    #         id:1,
    #         name:"Mercy Nzau",
    #         course_id: 1,
    #         course:{}

    #     }
    # }



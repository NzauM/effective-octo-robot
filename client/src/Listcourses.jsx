import {useState, useEffect} from "react"
function ListCourses(){
    const[courses, setCourses] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/listcourses")
        .then(data=>data.json())
        .then(res=>setCourses(res))
    },[])

    console.log(courses)

    return(
        <>
        <h1>Courses and Their Students Displayed Here</h1>
        {courses.map(course=>{
            return(
                <>
                <p>{course.course_name}</p>
                <p>Students in this course are:</p>
                {course.students.map(student=><li>{student.name}</li>)}
                </>
            )
        })}
        </>
    )
}
export default ListCourses
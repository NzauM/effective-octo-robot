import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function ListTeachers(){
    const[teachers,setTeachers] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/courses")
        .then(data=>data.json())
        // .then(resp=>console.log(resp))
        .then(resp=>setTeachers(resp))
        // fetch("http://127.0.0.1:5000/teachers").then(data=>data.json()).then(resp=>setTeachers(resp))
    },[])
    console.log(teachers);
    const trList = teachers.map((tr)=>{
        return(
            <>
            <h3>Course Name: {tr.course_name}</h3>
            <p>Students Taking the Course:</p>
            {tr.students.map(student=><li>{student.name}</li>)}
            {/* <p>{tr.tr_name} who teaches; 
            {tr.courses.map((course)=><button> <Link to={`/course/${course.id}`}>{course.course_name}</Link></button>
            )}
            </p> */}
            </>
        )
    })

    return(
        <>
        <ul>
            <li>Courses's list goes here:</li>
            {trList}
        </ul>
        </>
    )
}
export default ListTeachers
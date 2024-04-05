import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
function Viewcourse(){
    const paramzz = useParams()
    const courseId = paramzz['courseId'];
    const[courseDetails, setCourseDetails] = useState({})
    console.log(`http://127.0.0.1:5000/courses/${courseId}`);

    useEffect(()=>{
        fetch(`http://127.0.0.1:5000/courses/${courseId}`).then(data=>data.json()).then(resp=>setCourseDetails(resp))
    },[])
    console.log(courseDetails);
    return(
        <>
        <h1>Course Details</h1>
       
        {
            Object.keys(courseDetails).length > 0 ? <>
             <h1><u>Course Name: {courseDetails.course_name}</u></h1>
             <h3>Course Students</h3> 
            {courseDetails.students.map(student=>{
                 return(<p>{student.fullname}</p>)
            }       
            )}
             <h3>Teachers For this Course:</h3>
            {
                courseDetails.teachers.map(teacher=>{
                    return(
                        <p>{teacher.tr_name}</p>
                    )
                })
            } </> : ""
        }
        
        {/* {courseDetails.teachers.map((teacher)=><p>{teacher.tr_name}</p>)}  */}
        </>
    )
}
export default Viewcourse
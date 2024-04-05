import { useState, useEffect } from "react"

function Addcourse(){
    const[courseName, setcourseName] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log("Submitted");
        const formData = {course_name: courseName}
        console.log(formData);
        fetch("http://127.0.0.1:5000/newcourse",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }).then(data=>data.json()).then(message=>console.log(message))
    }
    return(
        <>
        <h1>Add New Course</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Course Name:
                <input type="text" onChange={(e)=>setcourseName(e.target.value)} value={courseName} name="courseName"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Addcourse
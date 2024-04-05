import { useState } from "react"

function Newcourse(){
    const[name, setName] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
        const formData = {"course_name":name}
        fetch("http://127.0.0.1:5000/addcourse", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }).then(data=>console.log(data))
    }
    return (
        <>
        <h4>Add New Course Form</h4>
        <form onSubmit={handleSubmit}>
            <label>
                Course Name:
                <input type="text" name="courseName" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Newcourse
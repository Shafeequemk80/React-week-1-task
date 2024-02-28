import { useState } from "react"

function MyComponent(){
const [name, setName]= useState("Guest");
const [age, setAge]= useState(0)
const [isEmployed,setEmployed]= useState(false)


const updateName=()=>{
setName("shafeeque")
}

const IncrementAge= ()=>{
    setAge(age+1)
}

const toggleEmployeeStatus =()=>{
setEmployed(!isEmployed)
}

return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>age: {age}</p>
        <button onClick={IncrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed? 'Yes': "NO"}</p>
        <button onClick={toggleEmployeeStatus}>toggle button</button>
    </div>
)

}export default MyComponent
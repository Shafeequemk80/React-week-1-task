import {useEffect, useState} from "react"
function MyComponent(){
const [count,setCount]=useState(0)
const [color,setColor]= useState("green")

function addCount(){
    setCount((c)=>c+1)
}
function subtractionCount(){
    setCount((c)=>c-1)
}

function changeColor(){
    setColor(c=> c==="green" ? "red":"green")
}
useEffect(()=>{
    document.title=`Count:${count} ${color}` 
},[count,color] )
return(
    <div>
        <p style={{color:color}} >Count:{count}</p>
        <button onClick={addCount}>add count</button>
        <button onClick={subtractionCount}>subtraction</button>
        <br />
        <button onClick={changeColor}>change Color</button>
    </div>
)

}
export default MyComponent  
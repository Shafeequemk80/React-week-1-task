function Button(){
    const handleClick =(e)=> e.target.textContent = 'AUCH!';
    return(
        <button onClick={(e)=>handleClick(e)}>Clik me</button>
    )
}
export default Button
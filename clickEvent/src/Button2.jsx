function Button1() {
    let count = 0;
  const handleClick = (name) => {
  
    if (count < 3) {
      count++;
      console.log(`${name} , You kissed me ${count} times`);
    }else{
        console.log(`${name} stop stop`)
    }
  };
  return <button onClick={() => handleClick("sinan")}>Kiss Me</button>;
}
export default Button1;

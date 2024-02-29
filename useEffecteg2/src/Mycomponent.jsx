import { useState, useEffect } from "react";
function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeigth] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("ADD EVENT LISENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("ADD EVENT LISENER REMOVED");
    };
  }, []);


  useEffect(()=>{
document.title= `Size: ${width} x ${height}`
  },[width,height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeigth(window.innerHeight);
  }
  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}
export default MyComponent;

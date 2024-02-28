import { useState } from "react";
function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carsYear, setCarYear] = useState(new Date().getFullYear());
  const [carsMake, setCarMake] = useState("");
  const [carsModel, setCarModel] = useState("");

  function handleAddCar() {
const newCar ={year:carsYear,Make:carsMake,Model:carsModel}

setCars((c)=>[...c,newCar])

setCarYear(new Date().getFullYear())
setCarMake("")
setCarModel("")

  }
  function handleRemoveCar(index) {
    setCars(c=> c.filter((e,i)=>i!==index))
  }
  function handleYearCar(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Cars Objects</h2>
      <ul>

    {cars.map((car,index)=>
    <li key={index} onClick={()=>handleRemoveCar(index)}>
        {car.year} {car.Make} {car.Model}
    </li>
    )}

      </ul>
      <input type="number" value={carsYear} onChange={handleYearCar} />
      <br />
      <br />
      <input
        type="text"
        value={carsMake}
        onChange={handleMakeChange}
        placeholder="Enter car Make"
      />
      <br />
      <br />
      <input
        type="text"
        value={carsModel}
        onChange={handleModelChange}
        placeholder="Enter car Model"
      />
      <br />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
export default MyComponent;

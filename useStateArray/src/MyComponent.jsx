import { useState } from "react";

function Mycomponent() {
  const [food, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(food.filter((e, i) => i !== index));
  }
  return (
    <div>
      <h2>List Of Foods</h2>
      <input type="text" placeholder="Enter Food name" id="foodInput" />
      <button onClick={handleAddFood}>Add food</button>
      <ul>
        {food.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mycomponent;

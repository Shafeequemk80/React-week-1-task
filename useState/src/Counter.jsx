import { useState } from "react";

function Counter() {
  const [count, SetCount] = useState(0);

  const icrement = () => {
    SetCount(count+1);
  };

  const decrement = () => {
    SetCount(count-1);
  };
  const reset = () => {
    SetCount(0);
  };


  return(
    <div className="counter-container">
<p className="counter-display">{count}</p>
<button className="counter-button" onClick={decrement}>-</button>
<button className="counter-button" onClick={reset}>R</button>
<button className="counter-button" onClick={icrement}>+</button>


    </div>
  );

}
export default Counter;

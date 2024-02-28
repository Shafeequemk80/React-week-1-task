

import { useState } from "react";
function ColorPicker(){

const [color, setColor] = useState('#454567')
function handleColorChange(event){
    setColor(event.target.value)
}

return (
    <div className="color-picker-container" >
        <h1>color Picker</h1>
        <div className="color-display"style={{backgroundColor:color}}>
<p>Select Color:{color}</p>
        </div>
        <label >Select A Color</label>
    <input type="color" value={color} onChange={handleColorChange} />
    </div>
    
)
}
export default ColorPicker
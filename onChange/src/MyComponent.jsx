import { useState } from "react";

function Mycomponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setcomment] = useState();
  const [payment, setPayment] = useState("Master Card");
  const [shipping, setShipping] = useState("Cash On Delivery");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handlecommentChange(event) {
    setcomment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleshippigChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Name:{name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handlecommentChange}
        placeholder="Enter delivey instuctons"
      ></textarea>

      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option>Select an Optiion</option>
        <option value="visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="Metro Card">Metro Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Cash On Delivery"
          checked={shipping === "Cash On Delivery"}
          onChange={handleshippigChange}
        />
        Cash On Delivery
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Online Payement"
          checked={shipping === "Online Payement"}
          onClick={handleshippigChange}
        />
        Online Payement
      </label>
      <p>Delivery: {shipping}</p>
    </div>
  );
}
export default Mycomponent;

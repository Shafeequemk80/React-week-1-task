import { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interValid = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => {
      clearInterval(interValid);
    };
  }, []);

  function fimeFormat(){
    let hours= time.getHours()
    const Minutes= time.getMinutes()
    const second = time.getSeconds()
    const meridiem= hours>12 ? "PM" : "AM"

    hours= hours%12 || 12;

    return ` ${padZero(hours)}:${padZero(Minutes)}:${padZero(second)}:${meridiem} `

}
function padZero(nubmer){
    return (nubmer <10 ? "0": '') + nubmer
}

  return (
    <div>
      <div className=" clock-container">
        <div className="clock">
          <p>{fimeFormat()}</p>
        </div>
      </div>
    </div>
  );
}
export default DigitalClock;

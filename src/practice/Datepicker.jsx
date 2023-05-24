import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
//   const [selectdate, setselectDate] = useState(null);
//   const [showdate, setShowdate] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
  console.log("start",startDate)
  console.log(typeof(startDate))
  return (
    <div>
      <h1>Datepicker</h1>
      {/* <DatePicker selected={selectdate} onChange={date=>setselectDate(date)}/> */}
       <DatePicker selected={startDate} value={startDate} onChange={(date) => setStartDate(date)} />
            
      {/* <DatePicker selected={endDate} value={endDate} onChange={(date) => setEndDate(date)} /> */}
      {/* <button onClick={()=>setShowdate(selectdate)} >cehck here</button>
        <h1>{showdate.map((elem,id)=>{
            return (
                <div>
                    <h1>{elem}</h1>
                </div>
            )
        })}</h1> */}
        {Object.entries(startDate).map((elem)=>{
            console.log("elem",elem);
            return(
                <div>
                    <h3>{elem}</h3>
                </div>
            )
        })}
    </div>
  );
}

export default Datepicker;

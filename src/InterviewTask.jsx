import React from "react";
import { useState } from "react";




const counties = [
  { name: "india", value: "Ind", cities: ["delhi", "mumbai"] },
  { name: "pakistan", value: "Pak", cities: ["lahor", "karachi"] },
  { name: "USA", value: "US", cities: ["feriro", "alpika"] },
  { name: "brazil", value: "Br", cities: ["dedo", "lolo"] },
];
function InterviewTask() {
  // state to store the value of country
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  return (
    <div>
      <h1>Interview task</h1>
      {/* first dropdown */}
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {counties.map((elem, ind) => {
          return <option value={elem.value}>{elem.name}</option>;
        })}
      </select>
      {/* seconddropdown */}

      <select value={country} >
                {
                   counties[country]?.cities?.map((item,index)=>{
                        return <option key={index} value={item.name}>{item}</option>
                    })
                } 

       </select>

     
    </div>
  );
}

export default InterviewTask;

// function InterviewTask() {
//     const countries = [
//       { name: "india", value: "Ind", cities: ["delhi", "mumbai"] },
//       { name: "pakistan", value: "Pak", cities: ["lahor", "karachi"] },
//       { name: "USA", value: "US", cities: ["feriro", "alpika"] },
//       { name: "brazil", value: "Br", cities: ["dedo", "lolo"] },
//     ];
//     const [state, setstate] = useState({
//       name: "india",
//       value: "Ind",
//       cities: ["delhi", "mumbai"],
//     });
//     return (
//       <div className="App">
     
//         <select
//           onChange={(e) => {
//             console.log("e",e.target.value)
//             let newArr = countries.filter(
//               (item) =>
//               item.value === e.target.value
//             // console.log("item",item.value)
              
//             );
//             console.log(newArr,"dada")
//             setstate(newArr[0]);
//             // console.log("state",state)
//           }}
//         >
//           {countries.map((item, i) => {
//             return (
//               <option key={i} value={item.value}>
//                 {item.name}
//               </option>
//             );
//           })}
//         </select>
//         <select>
//           {state?.cities?.map((item,i) => {
//             return (
//               <option key={i} value={item}>
//                 {item}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     );
//   }
  
//   export default InterviewTask;
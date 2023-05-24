import React, { useState } from 'react'

const counties = [
    { name: "india", nick: "Ind", cities: ["delhi", "mumbai"] },
    { name: "pakistan", nick: "Pak", cities: ["lahor", "karachi"] },
    { name: "USA", nick: "US", cities: ["feriro", "alpika"] },
    { name: "brazil", nick: "Br", cities: ["dedo", "lolo"] },
  ];

function Interviewtaskrepeat() {
    const [state, setState] = useState({ name: "india", value: "Ind", cities: ["delhi", "mumbai"] })
  return (
    <div>
        <h1>interviewtaskrepaerr</h1>
        {/* first dropdown here */}
        <select onChange={(e)=>{
            // console.log("a",e.target.value)
            let narr=counties.filter((item,ind)=>
                // console.log("item",item)
                item.nick===e.target.value
            )
            // console.log("b",narr[0])
            setState(narr[0])
            // console.log("state",state)
        }}>

            {counties.map((elem,index)=>{
                return(
                    <option key={index} value={elem.nick}>
                        {elem.name}
                    </option>
                )
            })}

        </select>
        {/* second dropdown */}
        <select>
            {state?.cities.map((elem, index)=>{
                return(
                    <option key={index} value={elem}>{elem}</option>
                )
            })}
        </select>

    </div>
  )
}

export default Interviewtaskrepeat
import React from 'react'
import './Component1.css';

function Component1() {
 let check=(data)=>{
    return  data.fristname+" "+data.lastname 

 }
 let data={
    fristname:"arman",
    lastname:"khan"
 }

 function getGreeting(user) {
    if (user) {
      return <h1>Hello, {check(data)}</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

    return (
        <div>

            <div className="nav">
                <div className='ul'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
            </div>
            
            <h1>the data{getGreeting(data)}</h1>
            <h1>It is {new Date().toLocaleTimeString()}</h1>

        </div>
    )
}

export default Component1
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Weatherapp() {
  const [searchdata, setSearchdata] = useState("");
  const [weatherdata, setWeatherdata] = useState([]);

  // const getweatherdata = () => {
  //   axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
  //   ).then((response)=>{
  //     console.log(response)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })

  // };

  const handleclick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
      .then((response) => {
        console.log(response);
        setWeatherdata(response)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   if (searchdata !== "") {
  //     getweatherdata();
  //   }
  // }, [searchdata]);

  // console.log(searchdata);
  return (
    <div>
      <h1>Weatherapp</h1>
      <nav>
        <div>
          <input
            value={searchdata}
            onChange={(e) => setSearchdata(e.target.value)}
            type="search"
          />
          <button onClick={handleclick}>search</button>
          <div>
            <h2>city</h2>
            <h4>information about city</h4>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Weatherapp;

import React from "react";
const options = ["cricket", "football", "ludo", "wristling"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function Interview33() {
  const [game, setGame] = React.useState();
  const [day, setDay] = React.useState();
  const [data, setData] = React.useState([]);

  const handleclick = (e) => {
    e.preventDefault();
    const newdata = [game, day];
    const ddd = [...data, newdata];
    setData(ddd);
  };
  //   console.log("data", data);

  return (
    <div>
      <h1>interview practice</h1>
      <h2>which game you want to play</h2>

      {options.map((elem, id) => {
        return (
          <div>
            <label>{elem}</label>
            <input
              id={id}
              type="radio"
              name="options"
              onChange={(e) => setGame(e.target.value)}
              value={elem}
            />
          </div>
        );
      })}
      <h2>when you want to play the games</h2>
      {days.map((elem, id) => {
        return (
          <div>
            <label>{elem}</label>
            <input
              id={id}
              type="radio"
              name="options"
              onChange={(e) => setDay(e.target.value)}
              value={elem}
            />
          </div>
        );
      })}
      <button onClick={handleclick}>submit</button>

      {data.map((elem, id) => {
        // console.log(elem);
        return (
          <div
            style={{
              height: "100px",
              width: "100%",
              display: "flex",
              border: "5px solid black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>
              you decided to play {elem[0]} on {elem[1]}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Interview33;

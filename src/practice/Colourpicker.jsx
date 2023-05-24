import React, { useState } from "react";
import { ChromePicker } from "react-color";

function Colourpicker() {
  const [showcolor, setShowcolor] = useState("#fff");
  const [showcolorpicker, setShowcolorpicker] = useState(false);
  return (
    <div>
      Colourpicker
      <button
        onClick={() =>
          setShowcolorpicker((showcolorpicker) => !showcolorpicker)
        }
      >
        {showcolorpicker ? "close color picked" : "picke a color"}
       
      </button>
      {showcolorpicker && <ChromePicker
        color={showcolor}
        onChange={updatedColor => setShowcolor(updatedColor.hex)}
      />}
      
      <h2>you picked {showcolor}</h2>
      <div style={{color:showcolor}}> 
       <h3>your color is here</h3> 
      </div>
    </div>
  );
}

export default Colourpicker;

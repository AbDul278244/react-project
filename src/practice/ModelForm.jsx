import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import Modal from "react-modal";
import "react-tippy/dist/tippy.css";
import 'tippy.js/dist/tippy.css'; // optional


function ModelForm() {
  const [openmode, setOpenmode] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "150px",
          width: "300px",
          border: "4px solid black",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "300px",
        }}
      >
        <h1>Signup here</h1>
        <Tippy content="you will go to login page from here "> 

        <button onClick={() => setOpenmode(true)}>ok</button>
        </Tippy>

      </div>
      <Modal
        isOpen={openmode}
        onRequestClose={() => setOpenmode(false)}
        // shouldCloseOnOverlayClick={false}

        style={{
          overlay: {
            backgroundColor: "indigo",
          },
          content: {
            backgroundColor: "grey",
            height: "350px",
            marginTop: "17vh",
            borderRadius: "10px",
          },
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>first name</label>
          <input type="text" placeholder="Enter your first name" />
          <label>last name</label>
          <input type="text" placeholder="Enter your last name" />
          <label>Email </label>
          <input type="email" placeholder="Enter your email" />
          <label>Password </label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button style={{ marginLeft: "40vw", marginTop: "10px" }}>
          submit
        </button>
      </Modal>
    </div>
  );
}

export default ModelForm;

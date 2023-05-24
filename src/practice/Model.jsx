import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Model() {
  const [showmodal, setShowmodal] = useState(false);

  const [showForm, setShowform] = useState(false);
  const handleModal = () => {
    setShowmodal(true);
  };
  return (
    <div>
      <button style={{ marginTop: 0 }} onClick={handleModal}>
        check modal
      </button>
      <h1>react modal practice</h1>
      <Modal
        onRequestClose={() => setShowmodal(false)}
        shouldCloseOnOverlayClick={false}
        isOpen={showmodal}
        style={{
          overlay:{
            backgroundColor:"pink"
          },
          content:{
            color:"green",
            backgroundColor:"silver"
            
          }
        }}
      >
        <h1>Modal title</h1>
        <p>modal body</p>
        <button onClick={() => setShowmodal(false)}>close</button>
      </Modal>
    </div>
  );
}

export default Model;

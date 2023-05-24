import logo from './logo.svg';
// import './App.css';
import Component1 from './Component1';
import Bootstrap from './Bootstrap';
import Form from './Form';
import About from './About';
import { useState } from 'react';
import InterviewTask from './InterviewTask';
import Interviewtaskrepeat from './Interviewtaskrepeat';
// import Interview2 from './interview2';
import Interview22 from './Interview22';
import Interview33 from './Interview33';
import SearchFunctionality from './practice/SearchFunctionality';
import Model from './practice/Model';
import Weatherapp from './practice/Weatherapp';
import AutoClickButton from './practice/AutoClickButton';
import ModelForm from './practice/ModelForm';
import Colourpicker from './practice/Colourpicker';
import Datepicker from './practice/Datepicker';

function App() {
  const [mode, setmode] = useState("light")
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="grey"
    }else{
      setmode("light")
      document.body.style.backgroundColor="white"
    }

  }
  let data="demon slayer"
  return (
    <div className="App">
      {/* <Component1/>
      <Bootstrap title={data} mode={mode} togglemode={togglemode} />
      <div  className='container'> 

      <Form txt="enter your text here"/>
      <About/> */}
      {/* </div> */}
      {/* <InterviewTask/> */}
      {/* <Interviewtaskrepeat/> */}
      {/* <Interview22/> */}
      {/* <Interview33/> */}
      {/* <SearchFunctionality/> */}
      {/* <Model/> */}
      {/* <Weatherapp/> */}
      {/* <AutoClickButton /> */}
      {/* <ModelForm/> */}
      {/* <Colourpicker/> */}
      {/* <Datepicker/> */}
    </div>
  );
}

export default App;

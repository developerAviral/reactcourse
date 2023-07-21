
import { useState } from 'react';
import './App.css';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000);
  };

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is Enabled.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled.", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutUs="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className='container'>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
        {/* <About /> */}
      </div>
    </>

  );
}

export default App;

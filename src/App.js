
import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is Enabled.", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled.", "success");
      document.title = 'TextUtils - LightMode';
    }
  }
  return (
    <>
       <BrowserRouter>
      <Navbar title="TextUtils" aboutUs="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar /> */}

      <div className='container'>
       
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          </Routes>
        
      </div>
      </BrowserRouter>
    </>

  );
}

export default App;


import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
//import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutUs="About" />
      {/* <Navbar /> */}
      <div className='container'>
        {/* <TextForm heading="Enter the text to analyze" /> */}
        <About />
      </div>
    </>

  );
}

export default App;

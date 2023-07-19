
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutUs="About" />
      {/* <Navbar /> */}
      <div className='container'>
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>

  );
}

export default App;

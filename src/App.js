import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#212529';
  } else {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm mode={mode} heading="Enter the Text to Analyze"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;

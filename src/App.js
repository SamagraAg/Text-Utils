import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import About from './components/About.js';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    const obj = {
      message: message,
      type: type
    };
    setAlert(obj);

    //display Alert for only some seconds and then hide it(not close it)
    //for hiding it we set it to NULL
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = `#112440`;
      showAlert(`Dark Mode Enabled`, `success`)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = `white`;
      showAlert(`Light Mode Enabled`, `success`)
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} mode={mode}></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;

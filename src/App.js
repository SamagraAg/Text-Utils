import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


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
    setTimeout(() => {
      setAlert(null);
    }, 1500);
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
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}></TextForm>} />
          <Route exact path="/about" element=<About /> />
        </Routes>
      </Router>
    </>
  );
}

export default App;

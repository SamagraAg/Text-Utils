import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import About from './components/About.js';

function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About Textutils" />
      <TextForm></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;

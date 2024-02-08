import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About Textutils" />
      <TextForm></TextForm>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUtils" />
      <div className="container">
        <TextForm heading="Enter the Text to Analyze"/>
      </div>
    </>
  );
}

export default App;

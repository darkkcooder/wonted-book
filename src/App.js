import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Benifits from './Benefits';
import BoxComponent from './Demo';

function App() {
  return (
    <div className="App main-div">
      <div>
        <Navbar/>
        <Home/>
        <Benifits/>
        {/* <BoxComponent/> */}
      </div>
      
    </div>
  );
}

export default App;

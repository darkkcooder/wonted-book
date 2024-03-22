import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Benifits from './Benefits';
import BoxComponent from './Demo';
import Chapters from './Chapters';
import Author from './Author';
import Achivements from './Achievements';
import Awesome from './Awesome';

function App() {
  return (
    <div className="App main-div">
      <div>
        <Navbar/>
        <Home/>
        <Benifits/>
        <Chapters/>
        <Author/>
        <Achivements/>
        <Awesome/>
      </div>
      
    </div>
  );
}

export default App;

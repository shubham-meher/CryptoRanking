import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CrypDetail from './components/CrypDetail';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import Homepage from './components/Homepage';


function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route> 
        <Route exact path='/coin/:coinId' element={<CrypDetail key={`coinId`}  />}></Route>
        {/* <Route exact path='/coin/:coinId' element={<Homepage key="cry" />}></Route> */}
      </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;

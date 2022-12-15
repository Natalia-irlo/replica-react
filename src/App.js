import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Join from './pages/Join';


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Discover" element={<Discover/>}/>
        <Route path="Join" element={<Join/>}/>
      </Routes> 
    </Router>
    
    </div>
  );
}

export default App;


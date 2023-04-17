import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Maincard from './pages/Maincard';
import Navbar from './Navbar';
import Accueil from './Accueil';

function App() {
  return (
    <>
    {/* <Navbar/> */}

    <Routes>
      <Route path="/" element={<Accueil/>} />
      <Route path="/maincard" element={<Maincard/>} />
    </Routes>


    </>
   
  );
}

export default App;

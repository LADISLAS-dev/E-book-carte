import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Maincard from './pages/Maincard';
import Navbar from './Navbar';

function Pages() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/maincard" element={<Maincard/>} />
    </Routes>


    </>
   
  );
}

export default Pages;

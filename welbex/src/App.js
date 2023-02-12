import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Services from './Services';
import Widgets from './Widgets';
import Integration from './Integration';
import Cases from './Сases';
import Сertificates from './Сertificates';


function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/widgets' element={<Widgets/>}></Route>
      <Route path='/integration' element={<Integration/>}></Route>
      <Route path='/cases' element={<Cases/>}></Route>
      <Route path='/certificates' element={<Сertificates/>}></Route>
      </Routes>
      {/* <Main/> */}
      <Footer/>
      </Router>
    </div>
  
    
  );
}

export default App;


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
      <Route path='/services' component={<Services/>}></Route>
      <Route path='/widgets' component={<Widgets/>}></Route>
      <Route path='/integration' component={<Integration/>}></Route>
      <Route path='/cases' component={<Cases/>}></Route>
      <Route path='/certificates' component={<Сertificates/>}></Route>
      </Routes>
      <Main/>
      <Footer/>
      </Router>
    </div>
  
    
  );
}

export default App;


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Houses from './pages/Houses'
import Login from './pages/Login'
import Register from './pages/Register'
import Show from './pages/Show'
import SellHome from './pages/SellHome'



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/houses' element={<Houses/>}/>
        <Route path='/sellhome' element={<SellHome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

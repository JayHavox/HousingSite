import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Houses from './pages/Houses'
import Login from './pages/Login'
import Register from './pages/Register'
import Show from './pages/Show'
import SellHome from './pages/SellHome'
import UpdateHome from './pages/UpdateHome'
import ErrorPage from './pages/ErrorPage'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='cover-container d-flex w-100 h-100 p-3 mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/houses' element={<Houses />} />
            <Route path='/houses/search' element={<Houses />} />
            <Route path='/sellhome' element={<SellHome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/show/:Id' element={<Show />} />
            <Route path='/updateHome/:id' element={<UpdateHome />} />
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

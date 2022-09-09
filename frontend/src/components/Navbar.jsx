import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Navbar = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state) => state.auth)

const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/')
}

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className='container-fluid'>
        <Link className='navbar-brand fw-bolder' to='/'>DreamTown</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className="navbar-nav">
              <Link className="nav-link" to="/houses">Buy</Link>
              <Link className="nav-link" to="/sellhome">Sell</Link>
              </div>
              <div className='navbar-nav ms-auto'>
                {user ? (<button className="btn btn-dark" onClick={onLogout}><FaSignOutAlt/>Logout</button>) : (<>
                <Link className="nav-link" to="/login"><FaSignInAlt/>Login</Link>
                <Link className="nav-link" to="/register"><FaUser/>Register</Link>
                </>)}
               
              </div>

          </div>
      </div>

    </nav>
  )
}

export default Navbar
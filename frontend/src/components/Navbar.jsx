import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className='container-fluid'>
        <Link className='navbar-brand' to='#'>DreamTown</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class="navbar-nav">
              <Link class="nav-link" to="/houses">Buy</Link>
              <Link class="nav-link" to="/sellhome">Sell</Link>
              </div>
              <div class='navbar-nav ms-auto'>
              <Link class="nav-link" to="/login"><FaSignInAlt/>Login</Link>
              <Link class="nav-link" to="/register"><FaUser/>Register</Link> 
              </div>

          </div>
      </div>

    </nav>
  )
}

export default Navbar
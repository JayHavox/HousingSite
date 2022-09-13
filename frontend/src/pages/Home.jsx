import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5 text-center">
        <div className="row flex-fill mt-8">
          <div className='px-3'>
            <h1 className='fw-bolder'>DreamTown</h1>
            <p className="lead text-center text-light fw-semibold"> Welcome to DreamTown! <br /> Come on in to find your next home. <br />
              A place you can buy and sell your house</p>
            <Link to="/houses" className="btn btn-lg btn-secondary fw-bold border-white bg-white">View
              Homes</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
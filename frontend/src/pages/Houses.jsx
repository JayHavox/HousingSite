import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getHomes, getHomesBySearch } from '../features/houses/houseSlice'
import HomeItem from '../components/HomeItem'




const Houses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');



  const { homes, isLoading, isError, message } = (useSelector((state) => state.homes))

  useEffect(() => {
    if (isError) {
        console.log(message)
    }

    
        dispatch(getHomes())
    
        
}, [ isError, message, dispatch])

if (isLoading) {
  return <Spinner />
}


  const searchHomes = () => {
    if(search.trim()) {
      dispatch(getHomesBySearch({search}))
      navigate(`/houses/search?searchQuery=${search || 'none'}`)
    }else {
      navigate('/houses')
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchHomes();
    }
  }



  return (
    <>
      <div className='container '>
        <div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search by Address, City, State or Category..." aria-label="Search" value={search} onKeyDown={handleKeyPress} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-light" onClick={searchHomes}>Search</button>
          </form>
        </div>

        

        <div className="container d-flex justify-content-evenly flex-wrap ">
          {homes?.map(home => (
            <HomeItem key={home._id} home={home} />
          ))}
        </div>
     
      </div>

    </>

  )
}

export default Houses
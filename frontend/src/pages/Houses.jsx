import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getHomes } from '../features/houses/houseSlice'
import HomeItem from '../components/HomeItem'
import { selectAllHomes } from '../features/houses/houseSlice'
import Filter from '../components/Filter'
import Paginate from '../components/Paginate'


const Houses = () => {
  const dispatch = useDispatch();

  const { homes, isLoading, isError, message } = useSelector(selectAllHomes)
  const { user } = useSelector((state) => state.auth)



  useEffect(() => {


    if (isError) {
      console.log(message)
    }

    if (!user || user) {
      dispatch(getHomes())
    }


  }, [user, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }



  return (
    <>
      <div className='container justify-content'>

        <div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search by State..." aria-label="Search" />
            <button className="btn  btn-light" type="submit">Search</button>
          </form>

        </div>

        <Filter />

        <div className="container d-flex justify-content-evenly flex-wrap">
          {homes?.map(home => (
            <HomeItem key={home._id} home={home} />
          ))}
        </div>
        <div className='pagination justify-content-center'>
        <Paginate />
        </div>
      </div>

    </>

  )
}

export default Houses
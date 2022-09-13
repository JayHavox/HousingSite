import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import { getHomes } from '../features/houses/houseSlice'
import HomeItem from '../components/HomeItem'
import { selectAllHomes } from '../features/houses/houseSlice'




const Houses = () => {
  const dispatch = useDispatch();

  const {homes, isLoading, isError, message} = useSelector(selectAllHomes)
  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user || user){
      dispatch(getHomes())
    } 
    

  }, [user,isError, message, dispatch])

  if(isLoading){
    return <Spinner />
  }
  
  
  return (
    <>
    <div className="container d-flex justify-content-evenly flex-wrap">
      {homes.map(home => (
        <HomeItem key={home._id} home={home} />
      ))}
    </div>
    
    </>
    
  )
}

export default Houses
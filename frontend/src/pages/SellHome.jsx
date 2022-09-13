import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HomeForm from '../components/HomeForm'

const SellHome = () => {
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
    
  }, [user, navigate])

  
  return (
    <div className='row'>
      <h1 className='text-center'>Sell Your Home Today</h1>
      <div className='col-md-6 offset-md-3'>
        <HomeForm />
      </div>

    </div>
  )
}

export default SellHome
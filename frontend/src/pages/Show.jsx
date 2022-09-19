import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Spinner from '../components/Spinner'
import { deleteHome, selectAllHomes } from "../features/houses/houseSlice";
import { useDispatch } from "react-redux";


const Show = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { homes, isLoading, isError, message } = useSelector(selectAllHomes)
  const { user } = useSelector((state) => state.auth)
  

  console.log(user)

  // getting home details
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    const getDetails = homes.map((home) => {
      if (home.id === id) {
        return setDetails(home);
      }
    })

  }, [homes, id, isError, message])

  if (isLoading) {
    return <Spinner />
  }
  
  if(!details) {
    <section>
      <h2>No Home Found</h2>
    </section>
  }

  //deleting the home
  const onClick = () => {
    dispatch(deleteHome(details._id))
    navigate('/houses')
  }

  const onClick1 = () => {
    navigate(`/updateHome/${details._id}`, {
      state: {
        id: details._id,
        address: details.address,
        price: details.price,
        state: details.state,
        city: details.city,
        zipcode: details.zipcode,
        bedrooms: details.bedrooms,
        bathrooms: details.bathrooms,
        sqft: details.sqft,
        description: details.description,
        catgegory: details.category,
        image: details.image

      }
    })
  }

  const onClick2 = () => {
    navigate('/houses')
  }

 

  return (
    <div className="container text-center">
    <div className="row">
      <div className="col">
        <div className="card mb-3 wi">
          <img src={details.image} className='card-img-top' alt="" />
          <div className="card-body">
            <h5 className="card-title text-center mb-3"> Selling For: {details.price}</h5>
            <h6 className="card-subtitle mb-2 text-muted mb-3">Address: {details.address} State: {details.state} City: {details.city} Zipcode: {details.zipcode}</h6>
            <p className="card-text">Bedrooms: {details.bedrooms} Bathrooms: {details.bathrooms} sqft: {details.sqft}</p>
            <p className="card-text">{details.description}</p>
            <div className="card-footer text-center"> {details.category}</div>
            <>
              {
                (() => {
                  if (user === (null)) {
                    return (
                      <div></div>
                    )
                  } else if (user._id && details.user === (user._id)) {
                    return (
                      <div className="card-body d-grid gap-2">
                        <button className="btn btn btn-info" onClick={onClick1}>Edit Home</button>
                        <button className="btn btn btn-danger" onClick={onClick}>Delete Home</button>
                      </div>
                    )
                  } 
                })()
              }
            </>
            <button className="btn btn btn-light" onClick={onClick2}>Back Home</button>
          </div>
        </div>
        
      </div>
      
              </div>
              
    </div>
  )
}
export default Show
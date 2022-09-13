import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updateHome } from "../features/houses/houseSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from '../components/Spinner'

import { selectAllHomes } from "../features/houses/houseSlice";

const UpdateHome = () => {
    const navigate = useNavigate()
    const location = useLocation();
    
    const { isLoading } = useSelector(selectAllHomes)


    const [price, setPrice] = useState(location.state?.price);
    const [address, setAddress] = useState(location.state?.address);
    const [state, setState] = useState(location.state?.state);
    const [city, setCity] = useState(location.state?.city);
    const [zipcode, setZipcode] = useState(location.state?.zipcode);
    const [bedrooms, setBedrooms] = useState(location.state?.bedrooms);
    const [bathrooms, setBathrooms] = useState(location.state?.bathrooms);
    const [sqft, setSQFT] = useState(location.state?.sqft);
    const [description, setDescription] = useState(location.state?.description);
    const [image, setImage] = useState(location.state?.image);
    const [category, setCategory] = useState(location.state?.category);

    const dispatch = useDispatch()

    if (isLoading) {
        return <Spinner />
    }


    if (!location.state) {
        return (
            <section>
                <h2>Home not Found</h2>
            </section>
        )
    }

    const onPriceChanged = e => setPrice(e.target.value)
    const onAddressChanged = e => setAddress(e.target.value)
    const onStateChanged = e => setState(e.target.value)
    const onCityChanged = e => setCity(e.target.value)
    const onZipcodeChanged = e => setZipcode(e.target.value)
    const onBedroomsChanged = e => setBedrooms(e.target.value)
    const onBathroomsChanged = e => setBathrooms(e.target.value)
    const onSqftChanged = e => setSQFT(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onImageChanged = e => setImage(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)

    const onSubmit = e => {
        e.preventDefault()

        dispatch(updateHome({ ...location.state, price:price, address:address, state:state, city:city, zipcode:zipcode, bedrooms:bedrooms, bathrooms:bathrooms, sqft:sqft, description:description, image:image, category:category }))
        setPrice('')
        setAddress('')
        setState('')
        setCity('')
        setZipcode('')
        setBedrooms('')
        setBathrooms('')
        setSQFT('')
        setDescription('')
        setCategory('')
        setImage('')

        navigate(`/show/${location.state.id}`)
    }

    return (
        <div className='row'>
            <h1 className='text-center'>Edit Your Home</h1>
            <div className='col-md-6 offset-md-3'>
                <form onSubmit={onSubmit} className='row g-3'>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label"><h4 className='text-light'>Address:</h4></label>
                        <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St" value={address} onChange={onAddressChanged} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label"><h4 className='text-light'>City:</h4></label>
                        <input type="text" className="form-control" id="city" name='city' value={city} onChange={onCityChanged} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label"><h4 className='text-light'>State:</h4></label>
                        <input type="text" className="form-control" id="state" name='state' value={state} onChange={onStateChanged} required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="zipcode" className="form-label"><h4 className='text-light'>Zip:</h4></label>
                        <input type="number" className="form-control" id="zipcode" name='zipcode' value={zipcode} onChange={onZipcodeChanged} min='1' required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="price" className="form-label"><h4 className='text-light'>Price:</h4></label>
                        <input type="number" className="form-control" id="price" name='price' value={price} onChange={onPriceChanged} min='1' required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bedrooms" className="form-label"><h4 className='text-light'>Bedrooms:</h4></label>
                        <input type="text" className="form-control" id="bedrooms" name='zipcode' value={bedrooms} onChange={onBedroomsChanged} required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bathrooms" className="form-label"><h4 className='text-light'>Bathrooms:</h4></label>
                        <input type="text" className="form-control" id="bathrooms" name='bathrooms' value={bathrooms} onChange={onBathroomsChanged} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label"><h4 className='text-light'>Category:</h4></label>
                        <select id="state" className="form-select" name='category' value={category} onChange={onCategoryChanged} required>
                            <option>Choose...</option>
                            <option value='Apartment'>Apartment</option>
                            <option value='House'>House</option>
                            <option value='Condo'>Condo</option>
                            <option value='Townhouse'>Townhouse</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="sqft" className="form-label"><h4 className='text-light'>SQFT:</h4></label>
                        <input type="number" className="form-control" id="sqft" name='sqft' value={sqft} onChange={onSqftChanged} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="image" className="form-label"><h4 className='text-light'>Image URL:</h4></label>
                        <input type="text" className="form-control" id="image" name="image" value={image} onChange={onImageChanged} required />
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label" htmlFor="description"><h4 className='text-light'>Description:</h4></label>
                        <textarea className="form-control" type="text" id="description" name="description"
                            required value={description} onChange={onDescriptionChanged}></textarea>
                    </div>
                    <div className='d-grid gap-2'>
                        <button className="btn btn-success" type='submit'>Update Home</button>
                    </div>

                </form>
            </div>
        </div>
    )
}


export default UpdateHome
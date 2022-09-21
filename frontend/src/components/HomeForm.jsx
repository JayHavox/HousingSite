import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createHome } from '../features/houses/houseSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function HomeForm() {

    const { user } = useSelector((state) => state.auth)


    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [sqft, setSQFT] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

        dispatch(createHome({ price, address, state, city, zipcode, bedrooms, bathrooms, sqft, description, image, category }))
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

        navigate(`/houses`)
    }

    return (
        <>
            {user ?
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
                        <input type="number" className="form-control" id="price" name='price' value={price} onChange={onPriceChanged} required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bedrooms" className="form-label"><h4 className='text-light'>Bedrooms:</h4></label>
                        <input type="number" className="form-control" id="bedrooms" name='zipcode' value={bedrooms} onChange={onBedroomsChanged} required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bathrooms" className="form-label"><h4 className='text-light'>Bathrooms:</h4></label>
                        <input type="number" className="form-control" id="bathrooms" name='bathrooms' value={bathrooms} onChange={onBathroomsChanged} required />
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
                        <label htmlFor="image" className="form-label"><h4 className='text-light'>Input Images</h4></label>
                        <input type="text" className="form-control" id="image" name="image" onChange={onImageChanged} required />
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label" htmlFor="description"><h4 className='text-light'>Description:</h4></label>
                        <textarea className="form-control" type="text" id="description" name="description"
                            required value={description} onChange={onDescriptionChanged}></textarea>
                    </div>
                    <div className='d-grid gap-2'>
                        <button className="btn btn-success" type='submit'>Add Home</button>
                    </div>

                </form>
                : <>
                                
                </>}
        </>
    )
}

export default HomeForm
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { showHome } from '../features/houses/houseSlice'


const HomeItem = ({ home }) => {
    const dispatch = useDispatch();

    return (
        

        <div className="d-flex align-items-center align-items-stretch ">
                <div className="card mb-3 w">
                    <div className="row">
                        <div className="col">
                            {home.image ? (<img className='img-fluid' src={home.image} alt="" />) : (<img className="img-fluid" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />)}
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">{home.address}</h5>
                                    <p className="card-text">{home.description}</p>
                                    <p className="card-text"><small className="text-muted">For sale since: {new Date(home.createdAt).toLocaleDateString('en-US')}</small></p>
                                    <Link className="btn btn-primary" onClick={() => dispatch(showHome(home._id))} to={`/show/${home._id}`}>View {home.category}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    )
}

export default HomeItem
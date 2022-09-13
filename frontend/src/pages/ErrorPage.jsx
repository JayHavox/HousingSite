
import { Link } from "react-router-dom"

const ErrorPage = () => {


  return (
    <div>
        <div className="row error">
          <div className="col">
            <div className="alert alert-danger" role='alert'>
              <h2 className="alert-heading text-center"> Sorry </h2>
              <p>That page cannot be found</p>
              <Link className="btn btn-sm btn-primary" to={'/houses'}>Return to Viewing Homes</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ErrorPage
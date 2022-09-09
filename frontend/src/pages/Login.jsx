import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, 
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
      }


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="row flex-fill">
                    <div className=' col-xl-8 offset-xl-2'>
                        <section className='heading'>
                            <h1><FaSignInAlt />Login</h1>
                            <p>Signin To View Your Next Home</p>
                        </section>
                        <form className="validated-form" onSubmit={onSubmit} noValidate>
                            <div className="mb-3">
                                <input className="form-control" type="email" id="email" name="email"
                                    value={email} placeholder='Enter your email' required
                                    onChange={onChange} />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="mb-3">
                                <input className="form-control" type="password" id="password" name="password"
                                    value={password} placeholder='Enter your password' required
                                    onChange={onChange} />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className='d-grid gap-2'>
                                <button className="btn btn-success" type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
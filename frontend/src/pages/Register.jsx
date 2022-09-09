import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData

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
    
        if (password !== confirmPassword) {
          toast.error('Passwords do not match')
        } else {
          const userData = {
            name,
            email,
            password,
          }
    
          dispatch(register(userData))
        }
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
                            <h1><FaUser />Register</h1>
                            <p>Please Create An Account </p>
                        </section>
                        <form className="validated-form" onSubmit={onSubmit} noValidate>
                            <div className="mb-3">
                                <input className="form-control" type="text" id="name" name="name"
                                    autoFocus value={name} placeholder='Enter your name' required
                                    onChange={onChange} />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
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
                            <div className="mb-3">
                                <input className="form-control" type="password" id="confirmPassword" name="confirmPassword"
                                    value={confirmPassword} placeholder='Confirm your password' required
                                    onChange={onChange} />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className='d-grid gap-2'>
                                <button className="btn btn-success" type='submit'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
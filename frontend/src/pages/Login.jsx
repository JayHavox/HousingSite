import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }


  return (
    <>
    <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className="row flex-fill">
        <div className=' col-xl-8 offset-xl-2'>
    <section className='heading'>
      <h1><FaSignInAlt/>Login</h1>  
      <p>Login and look for your next home</p>
    </section>
<form className="validated-form" onSubmit={onSubmit} novalidate>
    
    <div className="mb-3">
        <input class="form-control" type="email" id="email" name="email" 
         value={email} placeholder='Enter your email'required
        onChange={onChange}/>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div className="mb-3">
        <input class="form-control" type="password" id="password" name="password" 
         value={password} placeholder='Enter your password'required
        onChange={onChange}/>
        <div class="valid-feedback">
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
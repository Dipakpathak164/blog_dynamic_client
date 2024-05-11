import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='auth_section'>
    <div className='auth h-100vh d-flex align-items-center justify-content-center'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
          <form action="" className="row login_form">
          <div className="col-md-12">
            <h1>Login</h1>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label >User Name</label>
              <input type="text" required className='form-control' placeholder='User Name'/>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label >Password</label>
              <input type="password" required className='form-control' placeholder='Enter your password'/>
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary w-100">
              Login
            </button>
            <p className='color-red f-12 text-center py-2 error-text'>This is an error!</p>
            <p className='mt-2'>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Login

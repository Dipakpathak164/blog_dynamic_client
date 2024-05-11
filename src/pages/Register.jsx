import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) =>{
    setInputs(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate('/login')
      
    } catch (err) {
        setError(err.response.data);
    }
  };

  return (
    <section className='auth_section'>
      <div className='auth h-100vh d-flex align-items-center justify-content-center'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <form action="" className="row Register_form">
                <div className="col-md-12">
                  <h1>Register</h1>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" required className='form-control' placeholder='Enter your name' name='username' onChange={handleChange}/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Your Email Id</label>
                    <input type="email" required className='form-control' placeholder='Enter your email' name='email' onChange={handleChange}/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" required className='form-control' placeholder='Enter your password' name="password" onChange={handleChange}/>
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary w-100" onClick={handleSubmit}>
                    Register
                  </button>
                   <div className='text-center text-danger'>
                   {error && <p>{error}</p>}
                   </div>
                  <p className='mt-2'>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

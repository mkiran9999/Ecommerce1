import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <Meta title={"signup"}/>
      <Breadcrumb title="Signup"/>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
              <div className="col-12">
                  <div className="auth-card">
                      <h3 className='text-center mb-3'>Sign Up</h3>
                      <form action='' className='d-flex flex-column gap-15'>
                          <div>
                              <input 
                              className="form-control"
                              type='text' 
                              name='name'
                              placeholder='Name'
                              ></input>
                          </div>
                          <div className='mt-1'>
                              <input 
                              className="form-control"
                              type='email' 
                              name='email'
                              placeholder='Email'
                              ></input>
                          </div>
                          <div className='mt-1'>
                              <input 
                              className="form-control"
                              type='text' 
                              name='mobile'
                              placeholder='Mobile Number'
                              ></input>
                          </div>
                          <div className='mt-1'>
                              <input 
                              className="form-control"
                              type='password' 
                              name='password'
                              placeholder='Password'
                              ></input>
                          </div>
                          <div>
                              {/* <Link to={'/forgotpassword'}>ForgotPassword</Link> */}
                              <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                  <button className='button border-0'>Sign Up</button>
                                  {/* <Link to={"signup"} className='button signup'>SignUp</Link> */}
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Meta title={"Login"}/>
      <Breadcrumb title="Login"/>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Login To Account</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
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
                                type='password' 
                                name='password'
                                placeholder='Password'
                                ></input>
                            </div>
                            <div>
                                {/* <Link to={'/forgotpassword'}>ForgotPassword</Link> */}
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to={"/signup"} className='button signup'>SignUp</Link>
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

export default Login
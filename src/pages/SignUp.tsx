import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const SignUp = () => {
  return (
    <>
      <Meta title={"signup"}/>
      <Breadcrumb title="Signup"/>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput name='name' placeholder='Name' type='text'/>
                <CustomInput type='email' name='email'placeholder='Email'/>
                <CustomInput type='text' name='mobile'placeholder='Mobile Number'/>
                <CustomInput type='password' name='password' placeholder='Password'/>
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
      </Container>
    </>
  )
}

export default SignUp
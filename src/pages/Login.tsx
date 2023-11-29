import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {

  const emailInput = useRef<any>(null);
  const [touched,setTouched] = useState(false)

  const [loginDetails,setLoginDetails] = useState({
    email : {
      value: ""
    },
    password : {
      value: ""
    }
  })

  useEffect(() => {
      emailInput.current.focus();
  }, []);

  const handleEvent = (event :ChangeEvent<HTMLInputElement>,property : string) => {
  // const handleEvent = (event :ChangeEvent<HTMLInputElement>) => {
    setLoginDetails(prevData => ({...prevData, [property]:{value:event.target.value}}))
    // setLoginDetails(prevData => ({...prevData, [event.target.name]:event.target.value}))
  }

  function submitResponse () {
    console.log(loginDetails);
    setLoginDetails({ 
      email : {
        value: ""
      },
      password : {
        value: ""
      }
    })
  }

  function detectkeydown (event : any) {
    // console.log(event.key)
    if (event.key === 'Enter' && validEmail()===true) {
      event.preventDefault();
      submitResponse();
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', detectkeydown)
    return () => {
      document.removeEventListener('keydown', detectkeydown);
    };
    
  },[loginDetails])

  const validEmail = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(loginDetails.email.value));
     return re.test(loginDetails.email.value) 
  }
  const loginSubmit = () => {
    if(validEmail())
    {
      return submitResponse();
    }
      return "";
  }


  return (
    <>
      <Meta title={"Login"}/>
      <Breadcrumb title="Login"/>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login To Account</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <input type='email' name='email'autoComplete='off' 
                                value = {loginDetails.email.value}
                                onChange={(e) => handleEvent(e,"email")}
                                // onChange={(e) => handleEvent(e)}
                                maxLength={80} 
                                ref={emailInput}
                                required={false}
                                onBlur = {() => setTouched(true)} placeholder='Email'/>
                <span className="error" id="email_err">
                  {touched  && (validEmail() ? "" : <p style={{color : "red"}}>enter valid email </p>)}
                </span>
                <input type='password' name='password' placeholder='Password'
                    value = {loginDetails.password.value} 
                    autoComplete="off" 
                    onChange={(e) => handleEvent(e,"password")}
                  //  onChange={(e) => handleEvent(e)}
                    maxLength={20} 
                    required={false}/>
                  <span className="error" id="pwd_err"></span>
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
      </Container>
    </>
  )
}

export default Login
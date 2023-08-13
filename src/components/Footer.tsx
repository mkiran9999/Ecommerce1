import React from 'react'
// import * as React from 'react';

function Footer() {
  return (
    <>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center text-white'>&copy; {new Date().getFullYear() };  powered By Developer's corner</p>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer className='py-3' ></footer>
      <footer className='py-3'></footer> */}
    </>
  )
}

export default Footer
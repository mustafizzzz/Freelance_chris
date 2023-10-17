import React from 'react'
import { Link } from 'react-router-dom'

const PageNot = () => {
  return (
    <div className='container  d-flex align-items-center
     justify-content-center'>
      <div className="row  shadow bg-white p-5">
        <div className="col-md-12">
          <div className='text-content p-2 mt-2'>
            <h1 className='error'>404</h1>
            <h2 className='text-center mb-3'>Oops ! Page Not Found</h2>
            <Link to='/' className='btn-primary rounded p-2'>
              Go Back
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageNot
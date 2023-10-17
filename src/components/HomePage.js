import React from 'react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
      <div className="row">
        <div style={{ height: '100vh' }} className="col-lg-6 offset-lg-3 p-5  d-flex justify-content-center align-items-center " >

          <div class="button-box d-flex w-100 bg-white p-5 shadow rounded justify-content-evenly">
            {/* <button type="button" class="btn btn-primary  m-2 p-3 w-75">Teacher Login</button>
            <button type="button" class="btn btn-primary m-2 p-3 w-75">Large button</button> */}

            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid' mr={4}
              width="300px" // Set the width of the button
              height="80px" // Set the height of the button
              onClick={() => { navigate('/login') }}
            >
              Teacher Login
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'
              width="300px" // Set the width of the button
              height="80px" // Set the height of the button
              onClick={() => { navigate('/student') }}
            >
              Student
            </Button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default HomePage
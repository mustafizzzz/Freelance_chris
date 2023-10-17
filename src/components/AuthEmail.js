// import { Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import ResetPassword from './Helpers/ResetPassword';

const AuthEmail = () => {
  const [ok, setOk] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    setTimeout(() => {
      // Set ok to true to render ResetPassword component
      setOk(true);
    }, 2000);
  }, []);

  return ok ? <ResetPassword /> : <Spinner />;
};

export default AuthEmail
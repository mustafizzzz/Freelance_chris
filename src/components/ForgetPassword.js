import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

  const [email, setEamil] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  //handelClick
  const submitHandel = async () => {
    setLoading(true);
    if (!email) {
      toast({
        title: 'Please Fill all details',
        description: "warning",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false)
      return;
    }

    // try {
    //   const config = {
    //     header: {
    //       "Content-type": "application/json",
    //     }
    //   }
    //   const { data } = await axios.post(`/api/user/login`, { email, password }, config);

    //   toast({
    //     title: 'Login Successfull',
    //     status: 'success',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom',
    //   })
    //   localStorage.setItem('userInfo', JSON.stringify(data));
    //   setLoading(false)
    //   navigate('/chats');

    // } catch (error) {
    //   toast({
    //     title: 'Error in catch  of login',
    //     description: "warning",
    //     status: 'error',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom',
    //   })

    setLoading(false)
    navigate('/forgetpassword/verify');
    console.log("Erro in catch of submitHandel");

  }


  return (

    <Container maxW={'xl'} centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={4}
        bg={'white'}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text
          fontSize={'4xl'}
          fontFamily={'Patua One'}
          textAlign={'center'}
        >Attendance System</Text>
      </Box>

      <Box d='flex'
        justifyContent='center'
        p={4}
        bg={'white'}
        w="100%"
        m={'0px'}
        borderRadius="lg"
        borderWidth="2px">
        <VStack spacing={'8px'}>

          <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEamil(e.target.value)}></Input>
          </FormControl>


          <Button
            colorScheme='blue'
            width={'100%'}
            style={{ marginTop: 15 }}
            onClick={submitHandel}
            isLoading={loading}>
            Send E-Mail
          </Button>


        </VStack >
      </Box>
    </Container >
  )
}

export default ForgetPassword
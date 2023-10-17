import { Box, Button, Container, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  //handelClick
  const handelClick = () => {
    setShow(!show);
  }

  const submitHandel = async () => {
    setLoading(true);
    if (!password || !code) {
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
    toast({
      title: 'Reset Successfull',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    })
    navigate('/login')
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

          <FormControl id='code' isRequired>
            <FormLabel>Enter Code</FormLabel>
            <Input
              type='number'
              placeholder='Enter Your Received Code'
              value={code}
              onChange={(e) => setCode(e.target.value)}></Input>
          </FormControl>

          <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                value={password}
                type={show ? 'text' : 'password'}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)} />
            </InputGroup>
          </FormControl>

          <FormControl id='password' isRequired>
            <FormLabel>Confirm Your Password</FormLabel>
            <InputGroup>
              <Input
                value={password2}
                type={show ? 'text' : 'password'}
                placeholder='Confirm password'
                onChange={(e) => setPassword2(e.target.value)} />
              <InputRightElement width={'4.5rem'}>
                <Button h={'1.75rem'} size={'sm'} onClick={handelClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>



          <Button
            colorScheme='blue'
            width={'100%'}
            style={{ marginTop: 15 }}
            onClick={submitHandel}
            isLoading={loading}>
            Reset
          </Button>

        </VStack >
      </Box>
    </Container >
  )

}

export default ResetPassword
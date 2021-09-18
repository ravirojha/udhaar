/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Wrap, Box, Text, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/sign-up/signupForm';
import Carousel from '../components/login/carousel';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  return (
    <Wrap justify="center" align="center" pt="4vh" spacing="50px">
      <Box
        boxShadow="base"
        w="33vw"
        minW="564px"
        h="90vh"
        maxH="940px"
        minH="805px"
      >
        <Box maxW="md" mx="auto" height="100%" align="center" pt={50}>
          <Image
            htmlHeight="50%"
            htmlWidth="50%"
            pb={10}
            src="/images/logoFull.png"
            alt="Udhaar"
          />
          <Heading textAlign="center" size="xl" fontWeight="extrabold" mt={-6}>
            Create an account
          </Heading>
          <Text mt="2" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Already have an account?</Text>
            <Link to={ROUTES.LOGIN} style={{ color: '#de9e48' }}>
              {' '}
              Login
            </Link>
          </Text>
          <SignupForm />
        </Box>
      </Box>
      <Carousel />
    </Wrap>
  );
}

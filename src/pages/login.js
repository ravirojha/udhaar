/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Wrap, Box, Text, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import Carousel from '../components/login/carousel';
import * as ROUTES from '../constants/routes';

export default function Login() {
  return (
    <Wrap justify="center" align="center" pt="4vh" spacing="50px">
      <Box
        boxShadow="base"
        w="33vw"
        minW="564px"
        h="90vh"
        minH="597px"
        maxH="940px"
      >
        <Box maxW="md" mx="auto" height="100%" align="center" pt={59}>
          <Image
            htmlHeight="50%"
            htmlWidth="50%"
            pb={10}
            src="/images/logoFull.png"
            alt="Udhaar"
          />
          <Heading textAlign="center" size="xl" fontWeight="extrabold" mt={-4}>
            Sign in to your account
          </Heading>
          <Text mt="2" mb="14" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link to={ROUTES.SIGN_UP} style={{ color: '#de9e48' }}>
              {' '}
              Sign up
            </Link>
          </Text>
          <LoginForm />
        </Box>
      </Box>
      <Carousel />
    </Wrap>
  );
}

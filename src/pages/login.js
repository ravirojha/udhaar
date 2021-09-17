/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Wrap, Box, Text, Heading, Image, Link } from '@chakra-ui/react';
import LoginForm from '../components/login/LoginForm';
import Carousel from '../components/login/carousel';

export default function Login() {
  return (
    <Wrap justify="center" align="center" pt="10vh" spacing="50px">
      <Box boxShadow="base" w="33vw" minW="600px" h="80vh" maxH="940px">
        <Box maxW="md" mx="auto" height="100%" align="center" pt={59}>
          <Image
            htmlHeight="50%"
            htmlWidth="50%"
            pb={10}
            src="/images/logoFull.png"
            alt="Udhaar"
          />
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Sign in to your account
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link href="#" color="#de9e48">
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

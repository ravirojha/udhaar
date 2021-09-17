/* eslint-disable prettier/prettier */
import React from 'react';
import Slider from 'react-slick';
import { Image, Box, VStack, Heading } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <Box
      boxShadow="base"
      w="33vw"
      minW="600px"
      h="80vh"
      maxH="940px"
      align="center"
    >
      <Slider {...settings}>
        <VStack spacing={4} pt="10%">
          <Image src="/images/digitalLedger.svg" alt="Digital Ledger" />
          <Heading as="h4" size="md" p={8} pl={10}>
            Digital Ledger
          </Heading>
        </VStack>
        <VStack spacing={4} pt="10%">
          <Image
            src="/images/ConnectWithCustomers.webp"
            alt="Connect with Customers"
            pl="10%"
          />
          <Heading as="h4" size="md" pl={10}>
            Connect with Customers
          </Heading>
        </VStack>
        <VStack spacing={4} pt="10%">
          <Image src="/images/safesecure.svg" alt="Safe and Secure" />
          <Heading as="h4" size="md" pl={10}>
            100% Safe and Secure
          </Heading>
        </VStack>
      </Slider>
    </Box>
  );
}

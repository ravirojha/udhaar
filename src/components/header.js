/* eslint-disable prettier/prettier */
import { Flex, Spacer, HStack, Image, Avatar, Box } from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  return (
    <Flex h="83px" bg="#F5F5F5">
      <Box pl="35px" pt="6px">
        <Link to={ROUTES.DASHBOARD} aria-label="Udhaar logo">
          <Image htmlWidth="150px" src="/images/logoFull.png" alt="Udhaar" />
        </Link>
      </Box>
      <Spacer />
      <HStack pr={4} spacing={1}>
        <SettingsIcon w={7} h={7} />
        <ChevronDownIcon />
      </HStack>
      <HStack pr={10} spacing={1}>
        <Avatar name="Anuj" size="md" />
        <ChevronDownIcon />
      </HStack>
    </Flex>
  );
}

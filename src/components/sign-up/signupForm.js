/* eslint-disable prettier/prettier */
import { useState } from 'react';
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Stack,
  Input,
  Radio,
  RadioGroup
} from '@chakra-ui/react';
import * as React from 'react';
import '../../styles/login/phoneInput.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { PasswordField } from './password-field';

export default function SignupForm(props) {
  const [number, setNumber] = useState();
  const [userType, setUserType] = useState('customer');

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault(); // your login logic here
      }}
      {...props}
    >
      <Stack spacing="2" mt={-4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            mt={-2}
            autoComplete="name"
            placeholder="Enter your name"
            required
          />
        </FormControl>
        <FormControl id="mobile">
          <FormLabel>Mobile number</FormLabel>
          <PhoneInput
            defaultCountry="IN"
            placeholder="Enter phone number"
            value={number}
            onChange={setNumber}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address (optional)</FormLabel>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            mt={-2}
            required
          />
        </FormControl>
        <RadioGroup onChange={setUserType} value={userType}>
          <Stack direction="row">
            <Radio value="customer">Customer</Radio>
            <Radio value="merchant">Merchant</Radio>
          </Stack>
        </RadioGroup>
        {userType === 'merchant' && (
          <FormControl id="ownerName">
            <FormLabel>Shop Name</FormLabel>
            <Input
              name="shopName"
              type="text"
              mt={-2}
              placeholder="Enter Shop's name"
              autoComplete="shopName"
              required
            />
          </FormControl>
        )}
        <PasswordField />
        <Button
          type="submit"
          color="white"
          bg="#de9e48"
          size="lg"
          fontSize="md"
          top={2}
          _hover={{ bg: '#d09545' }}
        >
          Sign Up
        </Button>
      </Stack>
    </chakra.form>
  );
}

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
        <RadioGroup onChange={setUserType} value={userType}>
          <Stack direction="row">
            <Radio value="customer">Customer</Radio>
            <Radio value="merchant">Merchant</Radio>
          </Stack>
        </RadioGroup>
        <FormControl id="name" isRequired>
          {userType === 'merchant' ? (
            <FormLabel>Shop's name</FormLabel>
          ) : (
            <FormLabel>Customer's name</FormLabel>
          )}
          <Input
            name="name"
            type="text"
            mt={-2}
            focusBorderColor="#de9e48"
            errorBorderColor="red.500"
            autoComplete="name"
            placeholder={
              userType === 'merchant'
                ? `Enter Shop's name`
                : `Enter Customer's name`
            }
            required
          />
        </FormControl>
        {userType === 'merchant' && (
          <FormControl id="ownerName">
            <FormLabel>Owner's Name</FormLabel>
            <Input
              name="ownerName"
              type="text"
              focusBorderColor="#de9e48"
              errorBorderColor="red.500"
              mt={-2}
              placeholder="Enter Owner's name"
              autoComplete="ownerName"
            />
          </FormControl>
        )}
        <FormControl id="mobile" isRequired>
          <FormLabel>Mobile number</FormLabel>
          <PhoneInput
            defaultCountry="IN"
            placeholder="Enter phone number"
            value={number}
            onChange={setNumber}
            required
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            focusBorderColor="#de9e48"
            errorBorderColor="red.500"
            autoComplete="email"
            placeholder="Enter your email address"
            mt={-2}
          />
        </FormControl>
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

/* eslint-disable prettier/prettier */
import { useState } from 'react';
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Stack
} from '@chakra-ui/react';
import * as React from 'react';
import '../../styles/login/phoneInput.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { PasswordField } from './PasswordField';

export default function LoginForm(props) {
  const [value, setValue] = useState();
  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault(); // your login logic here
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="mobile">
          <FormLabel>Mobile number</FormLabel>
          <PhoneInput
            defaultCountry="IN"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </FormControl>
        <PasswordField />
        <Button
          type="submit"
          color="white"
          bg="#de9e48"
          size="lg"
          fontSize="md"
          _hover={{ bg: '#d09545' }}
        >
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
}

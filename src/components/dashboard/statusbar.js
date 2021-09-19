/* eslint-disable prettier/prettier */
import { Wrap, Image, Flex, Text, Badge, Spacer } from '@chakra-ui/react';
import { FaCaretDown, FaCaretUp, FaRupeeSign } from 'react-icons/fa';

export default function Statusbar() {
  return (
    <Wrap p={8} spacing={14}>
      <Flex boxShadow="lg" w="290px" h="100px" borderRadius="10px">
        <Image
          boxSize="100px"
          borderRadius="11px"
          src="/images/cash.svg"
          alt="Net Balance"
        />
        <Spacer />
        <Flex direction="column" p={5}>
          <Flex>
            <Text fontSize="22px" color="#de9e48">
              Net Balance
            </Text>
            <FaRupeeSign style={{ margin: '6px', marginTop: '8px' }} />
          </Flex>
          <Badge
            align="center"
            fontSize="14px"
            colorScheme="purple"
            w="60px"
            h="40px"
            p={2}
          >
            ₹700
          </Badge>
        </Flex>
      </Flex>
      <Flex boxShadow="lg" w="290px" h="100px" borderRadius="10px">
        <Image
          boxSize="100px"
          borderRadius="11px"
          src="/images/pay-money.svg"
          alt="To Give"
        />
        <Spacer />
        <Flex direction="column" p={5}>
          <Flex>
            <Text fontSize="22px" color="#de9e48">
              To Give
            </Text>
            <FaCaretUp style={{ color: '#E53e3e', margin: '6px' }} />
          </Flex>
          <Badge
            align="center"
            fontSize="14px"
            colorScheme="red"
            w="60px"
            h="40px"
            p={2}
          >
            ₹500
          </Badge>
        </Flex>
      </Flex>
      <Flex boxShadow="lg" w="290px" h="100px" borderRadius="10px">
        <Image
          boxSize="100px"
          borderRadius="11px"
          src="/images/receive-money.svg"
          alt="To Receive"
        />
        <Spacer />
        <Flex direction="column" p={5}>
          <Flex>
            <Text fontSize="22px" color="#de9e48">
              To Receive
            </Text>
            <FaCaretDown style={{ color: '#48BB78', margin: '6px' }} />
          </Flex>
          <Badge
            align="center"
            fontSize="14px"
            colorScheme="green"
            w="60px"
            h="40px"
            p={2}
          >
            ₹400
          </Badge>
        </Flex>
      </Flex>
    </Wrap>
  );
}

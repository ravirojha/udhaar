/* eslint-disable prettier/prettier */
import {
  Box,
  StackDivider,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Spacer,
  Button
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaFilter, FaSortAlphaDown, FaUserPlus } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <Flex borderRight="1px solid #e6e6e6" direction="column" height="100%">
      <VStack spacing={4} align="stretch" p={1} height="100%">
        <InputGroup bg="white" w="90%" mt="13%" ml="4%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="#de9e48" />
          </InputLeftElement>
          <Input
            focusBorderColor="#de9e48"
            type="text"
            placeholder="Search..."
          />
        </InputGroup>
        <Flex justify="flex-end">
          <Flex
            border="1px solid #e0e0e0"
            borderRadius="20px"
            bg="#eeeeee"
            w="92px"
            h="33px"
            justify="center"
            align="center"
            p={1}
            m={1}
          >
            <FaSortAlphaDown />
            <Box pl={2}>Sort</Box>
          </Flex>
          <Flex
            border="1px solid #e0e0e0"
            borderRadius="20px"
            bg="#eeeeee"
            w="92px"
            h="33px"
            justify="center"
            align="center"
            p={1}
            m={1}
          >
            <FaFilter />
            <Box pl={2}>Filter</Box>
          </Flex>
        </Flex>
        <Tabs
          variant="soft-rounded"
          size="md"
          colorScheme="orange"
          defaultIndex={1}
          isFitted
        >
          <TabList
            borderTop="1px solid #e6e6e6"
            borderBottom="1px solid #e6e6e6"
            pt={3}
            pb={3}
          >
            <Tab>Customers</Tab>
            <Tab>Shops</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>Customers!</p>
            </TabPanel>
            <TabPanel>
              <p>Shops!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
      <Spacer />
      <Box alignSelf="flex-end" pb={5} pr={2}>
        <Button colorScheme="blue" borderRadius="20px">
          <FaUserPlus style={{ marginRight: 10 }} /> Add a Customer
        </Button>
      </Box>
    </Flex>
  );
}

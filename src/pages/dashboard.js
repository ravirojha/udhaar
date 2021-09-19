/* eslint-disable prettier/prettier */
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/header';
import Sidebar from '../components/dashboard/sidebar';
import Statusbar from '../components/dashboard/statusbar';
import Content from '../components/dashboard/content';

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Grid
        h="90vh"
        templateColumns="1fr repeat(2, 2fr)"
        templateRows="2fr 10fr"
        gap={4}
      >
        <GridItem colStart={1} colEnd={2} rowSpan={2} minW="250px" bg="#f5fbff">
          <Sidebar />
        </GridItem>
        <GridItem colStart={2} colEnd={4}>
          <Statusbar />
        </GridItem>
        <GridItem colStart={2} colEnd={4}>
          <Content />
        </GridItem>
      </Grid>
    </Box>
  );
}

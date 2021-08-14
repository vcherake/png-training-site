import React from "react";

import { Box, Text, DataTable } from "grommet";

function Home() {
  return (
    <Box direction="column" background="dark-3" justify="center" pad="small">
      <Box direction="row" background="dark-3" justify="center">
        <Text margin="none" color="dark-1">
          NEW UPCOMING TRAININGS
        </Text>
      </Box>
      {/* <Box> */}
      <DataTable
        columns={[
          {
            property: "name",
            header: <Text>Name of Training</Text>,
            primary: true,
          },
          {
            property: "provider",
            header: <Text>Name of Provider</Text>,
            primary: true,
          },
          {
            property: "date",
            header: <Text>Date of Training</Text>,
            primary: true,
          },
          {
            property: "details",
            header: <Text>Details of Training</Text>,
            primary: true,
          },
        ]}
        data={[
          { name: "Hours At Work & Casuals", provider: "EFPNG" },
          {
            name: "Hours At Work & Casuals",
            provider: "EFPNG",
            date: "19th August 2021",
            details: "Read more...",
          },
          {
            name: "Hours At Work & Casuals",
            provider: "EFPNG",
            date: "19th August 2021",
            details: "Read more...",
          },
        ]}
      />
      {/* </Box> */}
    </Box>
  );
}

export default Home;

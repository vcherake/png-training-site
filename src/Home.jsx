import React, { useState } from "react";

import { Grommet, Box, Text, DataTable } from "grommet";

import { grommet } from "grommet/themes";

const trainingDetails = [
  {
    name: "Hours At Work & Casuals",
    provider: "EFPNG",
    date: "5th August 2021",
    details: "Read more...",
  },
  {
    name: "Hours At Work & Casuals",
    provider: "EFPNG",
    date: "19th August 2021",
    details: "Read more...",
  },
  {
    name: "Hours At Work & Casuals",
    provider: "EFPNG",
    date: "25th August 2021",
    details: "Read more...",
  },
];

// const tableTheme = {
//   dataTable: {
//     header: {
//       gap: "small",
//       units: {
//         color: "text-xweak",
//         margin: { left: "large" },
//       },
//       background: "#EE0C0C",
//       border: {
//         color: "blue",
//         side: "bottom",
//       },
//       round: true,
//     },
//   },
// };

// {
/* <Box direction="row" justify="center" pad="small">
// {/* <Box justify="center" align="end" direction="column"> */
// }
// <Text size="large" margin="none" color="auto">
//   SEARCH FOR TRAINING
// </Text>
// {/* </Box> */}
// </Box> */}

function Home() {
  const [trainingTimes, setTrainingTimes] = useState(trainingDetails);

  return (
    // <Grommet theme={tableTheme}>
    <Box direction="column" justify="center" pad="small">
      <Box direction="row" justify="center" pad="small">
        <Text size="large" margin="none" color="black">
          NEW UPCOMING TRAININGS
        </Text>
      </Box>
      <Box direction="row" justify="evenly">
        <DataTable
          pad={{ header: "medium" }}
          background={{
            // header: "#EE0C0C",

            body: ["white", "pink"],
            footer: { dark: "light-2", light: "dark-3" },
          }}
          size="large"
          columns={[
            {
              property: "name",
              header: <Text color="black">Name of Training</Text>,
              primary: true,
            },
            {
              property: "provider",
              header: <Text color="black">Name of Provider</Text>,
              primary: true,
            },
            {
              property: "date",
              header: <Text color="black">Date of Training</Text>,
              primary: true,
            },
            {
              property: "details",
              header: <Text color="black">Details of Training</Text>,
              primary: true,
            },
          ]}
          data={trainingTimes}
        />
      </Box>
    </Box>
    // {/* </Grommet> */}
  );
}

export default Home;

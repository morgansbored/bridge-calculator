import React, { FC } from "react";
import { Stack, Box, Heading, useColorModeValue } from "@chakra-ui/react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Box>
        <Box mx="auto" maxW={"1400px"} minH={"100vh"} fontSize="sm" bg="grey">
      <Box minH={"100vh"} fontSize="sm" bg="grey">
        <Box
          p={12}
          minH={"100vh"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={6} direction={"column"} align={"left"} mx={"auto"}>
            <Heading fontSize={"4xl"}>Calculating your total costs</Heading>          
          {children}
          </Stack>
          </Box>
      </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;

import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      backgroundColor={"gray.700"}
      color={"white"}
      minHeight={"40px"}
      display={"flex"}
      alignItems={"center"}
      position={"sticky"}
      bottom={"0px"}
    >
      <Box padding={"10px"}>
        <Text>&copy; 2023 All right reserved | zainurrouf4@gmail.com</Text>
      </Box>
    </Box>
  );
}

export default Footer;

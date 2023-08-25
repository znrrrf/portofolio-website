import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import profileImage from "../../asset/4002785.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function HomePc() {
  useEffect(() => {
    AOS.init();
    localStorage.setItem("active", JSON.stringify("Home"));
  }, []);

  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      backgroundColor={"black"}
    >
      <Stack
        display={"Flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"500px"}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Box display={"flex"} gap={2} fontSize={"3xl"} fontWeight={"bold"}>
            <Text>Hallo, I'm</Text>
            <Text>Zainur Rouf.</Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            fontSize={"5xl"}
            fontWeight={"bold"}
          >
            <Text fontSize={"50px"}>Full-Stack Web Developer</Text>
          </Box>
          <Box display={"flex"} gap={5} mt={"10px"}>
            <Box>
              <Button
                variant={"solid"}
                backgroundColor={"#112D4E"}
                border={"2px"}
                borderColor={"white"}
                borderRadius={"none"}
                color={"white"}
                _hover={{
                  color: "black",
                  backgroundColor: "white",
                  border: "2px",
                  borderColor: "#112D4E",
                }}
              >
                My Contact
              </Button>
            </Box>
            <Box>
              <Button
                variant={"outline"}
                border={"2px"}
                borderColor={"#112D4E"}
                color={"#112D4E"}
                _hover={{ color: "white", backgroundColor: "#112D4E" }}
                borderRadius={"none"}
              >
                Get CV
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default HomePc;

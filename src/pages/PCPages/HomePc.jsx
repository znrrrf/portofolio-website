import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import profileImage from "../../asset/profileNoBackground.png";
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
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#222831"}
    >
      <Stack
        direction={"row"}
        display={"Flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"500px"}
      >
        <Box
          marginLeft={"800px"}
          overflowY={"hidden"}
          style={{ height: "100vh" }}
          display={"flex"}
          alignItems={"end"}
        >
          <Box maxHeight={"650px"}>
            <Image src={profileImage} marginTop={"100px"} data-aos="fade-up" />
          </Box>
        </Box>

        <Box
          color={"#EEEEEE"}
          data-aos="fade-left"
          position={"absolute"}
          marginRight={"110px"}
        >
          <Box fontSize={"2xl"} display={"flex"} flexDirection={"row"}>
            <Text color={"#00ADB5"}>Hello </Text>
            <Text>, my name is</Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"7xl"} color={"#00ADB5"}>
              Zainur Rouf
            </Text>
          </Box>
          <Box fontSize={"2xl"}>
            <Text fontWeight={"bold"}>
              I'am a junior fullstack web developer.
            </Text>
          </Box>
          <Box maxW={"810px"} marginTop={"10px"}>
            <Text>
              I recently graduated from Purwadhika School of Technology, and
              learned how to build simple e-commerce websites that work on user
              interfaces and databases as a team.
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default HomePc;

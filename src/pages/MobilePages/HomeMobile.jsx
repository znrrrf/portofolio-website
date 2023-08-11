import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import profileImage from "../../asset/profileNoBackground.png";
import React from "react";

function HomeMobile() {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#222831"}
    >
      <Stack color={"#EEEEEE"} display={"flex"} paddingTop={"100px"}>
        <Box fontSize={"2xl"} display={"flex"} flexDirection={"row"}>
          <Text color={"#00ADB5"}>Hello </Text>
          <Text>, my name is</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"} fontSize={"5xl"} color={"#00ADB5"}>
            Zainur Rouf
          </Text>
          <Text fontWeight={"bold"} marginBottom={"20px"}>
            I'am a junior fullstack web developer.
          </Text>
          <Text width={"300px"}>
            I recently graduated from Purwadhika School of Technology, and
            learned how to build simple e-commerce websites that work on user
            interfaces and databases as a team.
          </Text>
          <Box width={"300px"}>
            <Image src={profileImage} marginTop={"20px"} data-aos="fade-up" />
          </Box>
        </Box>
      </Stack>
      {/* <Stack
        direction={"row"}
        display={"Flex"}
        justifyContent={"center"}
        alignItems={"start"}
        height={"500px"}
      >
        <Box color={"#EEEEEE"} data-aos="fade-left" gap={10}>
          <Box fontSize={"2xl"} display={"flex"} flexDirection={"row"}>
            <Text color={"#00ADB5"}>Hello </Text>
            <Text>, my name is</Text>
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"5xl"}
              color={"#00ADB5"}
              background={"green"}
            >
              Zainur Rouf
            </Text>
          </Box>
          <Box fontSize={"2xl"}>
            <Text fontWeight={"bold"}>
              I'am a junior fullstack web developer.
            </Text>
          </Box>
          <Box maxW={"500px"} marginTop={"10px"} fontSize={"2xl"}>
            <Text>
              I recently graduated from Purwadhika School of Technology, and
              learned how to build simple e-commerce websites that work on user
              interfaces and databases as a team.
            </Text>
          </Box>
        </Box>
      </Stack> */}
    </Box>
  );
}

export default HomeMobile;

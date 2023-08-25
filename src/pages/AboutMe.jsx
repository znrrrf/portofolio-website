import {
  Box,
  Text,
  Heading,
  useMediaQuery,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");
  const [isSmallerThan2] = useMediaQuery("(max-width: 321px)");

  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "React Js" },
    { skill: "Redux" },
    { skill: "Javascript" },
    { skill: "Express Js" },
    { skill: "Node Js" },
    { skill: "Tailwind" },
    { skill: "Chakra-Ui" },
    { skill: "MySql" },
    { skill: "Sequelize" },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"400px"}
      width={"100wh"}
      backgroundColor={"white"}
      color={"black"}
      paddingBottom={"100px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginBottom={"100px"}
      >
        <Heading marginBottom={"10px"} marginTop={"50px"} data-aos="fade-down">
          About
        </Heading>
        <Text fontWeight={"bold"}>Get to know more about me</Text>
      </Box>
      <Box
        maxWidth={"900px"}
        paddingX={"10px"}
        display={"flex"}
        flexDirection={isSmallerThan ? "column-reverse" : "row-reverse"}
        alignItems={isSmallerThan ? "center" : "start"}
        gap={5}
      >
        <Box
          width={"fit-content"}
          display={"flex"}
          flexDirection={"column"}
          gap={5}
        >
          <Box width={"full"}>
            <Text fontWeight={"bold"}>Skills</Text>
          </Box>

          <Grid
            templateColumns={["repeat(2, 100px)", "repeat(3, 100px)"]}
            gap={isSmallerThan2 ? 10 : 3}
            width={"full"}
          >
            {skills?.map((el, index) => {
              return (
                <GridItem key={index}>
                  <Box
                    fontWeight={"bold"}
                    backgroundColor={"gray.200"}
                    display={"flex"}
                    justifyContent={"center"}
                    padding={"10px"}
                    width={"80px"}
                  >
                    <Text fontSize={"11px"}>{el.skill}</Text>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>

        <Box
          maxWidth={"400px"}
          gap={4}
          paddingX={"30px"}
          textAlign={"justify"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text fontWeight={"bold"}>Hallo,</Text>
          <Box>
            <Text>
              A web developer graduated from bootcamp of Purwadhika Digital
              Technology School who experienced in solving problems and creating
              a website to meet the requirements, with minimum bugs, and
              accordance with industry best practices as a team work on both
              frontend and backend. Ready to move or remote.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default AboutMe;

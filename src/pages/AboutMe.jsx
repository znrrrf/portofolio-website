import {
  Box,
  Text,
  Heading,
  useMediaQuery,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ICONS } from "../contants";

import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");
  const [isSmallerThan2] = useMediaQuery("(max-width: 321px)");

  const skills = [
    { skill: "HTML", icon: ICONS.htmlI },
    { skill: "CSS", icon: ICONS.cssI },
    { skill: "React Js", icon: ICONS.reactI },
    { skill: "Redux-toolkit", icon: ICONS.reduxI },
    { skill: "Javascript", icon: ICONS.javascriptI },
    { skill: "Express Js", icon: ICONS.expressI },
    { skill: "Node Js", icon: ICONS.nodeI },
    { skill: "Tailwind", icon: ICONS.tailwindI },
    { skill: "Chakra-Ui", icon: ICONS.chakraI },
    { skill: "MySql", icon: ICONS.mysqlI },
    { skill: "Sequelize", icon: ICONS.sequelizeI },
    { skill: "TypeScript", icon: ICONS.typescriptI },
    { skill: "React-Native", icon: ICONS.nativeI },
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
      color={"#222831"}
      paddingBottom={"100px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginBottom={"100px"}
      >
        <Heading marginBottom={"10px"} marginTop={"50px"} data-aos="fade-up">
          About
        </Heading>
        <Text fontWeight={"bold"} data-aos="fade-up">
          Get to know more about me
        </Text>
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
            templateColumns={["repeat(1, 160px)", "repeat(3, 160px)"]}
            gap={isSmallerThan2 ? 10 : 3}
            width={"full"}
          >
            {skills?.map((el, index) => {
              return (
                <GridItem key={index}>
                  <Box
                    fontWeight={"bold"}
                    border={"1px"}
                    display={"flex"}
                    padding={"10px"}
                    width={"150px"}
                    height={"50px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"2"}
                    _hover={{
                      backgroundColor: "black",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <Box justifyContent={"center"} alignItems={"center"}>
                      <Image src={el.icon} width={"30px"} />
                    </Box>
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

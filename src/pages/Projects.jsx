import {
  Box,
  Button,
  Collapse,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { projectData } from "../data/ProjectData";
import galaxyStore from "../asset/galaxyStore.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { VscGithubInverted } from "react-icons/vsc";

function Projects() {
  const [show, setShow] = useState(false);
  const [timeOutData, setTimeOutData] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);
  const handleToggle = () => {
    if (timeOutData) {
      clearTimeout(timeOutData);
      setTimeOutData(null);
    }

    const newTimeOut = setTimeout(() => {
      setShow(true);
      setTimeOutData(null);
    }, 100);
    setTimeOutData(newTimeOut);
  };
  const handleOut = () => {
    setShow(false);
    if (timeOutData) {
      clearTimeout(timeOutData);
      setTimeOutData(null);
    }
  };
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      backgroundColor={"#222831"}
    >
      <Box>
        <Heading color={"#00ADB5"} marginBottom={"50px"} data-aos="fade-down">
          Projects
        </Heading>
      </Box>
      <Box data-aos="zoom-in">
        <Stack
          onMouseEnter={() => handleToggle()}
          onMouseLeave={() => handleOut()}
        >
          <Box width={"300px"} borderRadius={"20px"} overflow={"hidden"}>
            <Collapse in={show}>
              <Box position={"absolute"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  position={"absolute"}
                  padding={"5px"}
                  paddingLeft={"10px"}
                >
                  Multi-Warehouse
                </Text>

                <Box position={"absolute"} display={"flex"}>
                  <Box marginTop={"110px"} marginLeft={"10px"}>
                    <Link to="https://jcwdol0904.purwadhikabootcamp.com/">
                      <Button
                        height={"30px"}
                        variant={"unstyled"}
                        backgroundColor={"#222831"}
                        color={"#EEEEEE"}
                      >
                        <Text paddingX={"20px"}>visit</Text>
                      </Button>
                    </Link>
                  </Box>

                  <Box marginTop={"110px"} marginLeft={"10px"}>
                    <Link to={"https://github.com/Znrrrf/JCWDOL0904"}>
                      <Icon
                        as={VscGithubInverted}
                        boxSize={"30px"}
                        _hover={{ cursor: "pointer" }}
                      />
                    </Link>
                  </Box>
                </Box>

                <Text marginTop={"20px"} position={"absolute"} padding={"10px"}>
                  Multi-Warehouse E-commerce is a website that implements more
                  than one warehouse for storing goods.
                </Text>
                <Box
                  background={"#EEEEEE"}
                  width={"300px"}
                  height={"140px"}
                  borderRadius={"20px"}
                ></Box>
              </Box>
            </Collapse>

            <Image src={galaxyStore} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Projects;

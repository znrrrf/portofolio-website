import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

import { VscGithubInverted } from "react-icons/vsc";
import galaxy from "../asset/galaxy.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { render } from "react-dom";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Galaxy Web Store",
      description:
        "A website for a multi-warehouse store that spread across of indonesia",
      tools:
        "React Js, Tailwind, Chakra, Redux, Node Js, Express Js, Sequelize, MySql",
      pic: galaxy,
      more: "This website is designed for multi-warehouse store that have more then one warehouse. It can show all of the product stock of all warehouse and will automatically choose the nearest warehouse of the user. If there is insufficient stock it will automatically does a mutation to get a product stock from another warehouse to suffice existing stock, but if the product stock of all warehouse is not enough, the admin can does a manual replenish existing stock or cancel the order. To get a location of the user we use free api OpenCage and to get a data of address and price of delivery we use free api RajaOngkir",
      site: "https://jcwdol0904.purwadhikabootcamp.com/",
    },
  ];

  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      backgroundColor={"gray.100"}
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
          Projects
        </Heading>
        <Text fontWeight={"bold"} data-aos="fade-up">
          My recent project
        </Text>
      </Box>
      <Box>
        {projects?.map((el, index) => {
          return (
            <Card
              width={"250px"}
              display={"flex"}
              alignItems={"center"}
              key={index}
            >
              <CardHeader>
                <Text fontWeight={"bold"}>{el.name}</Text>
              </CardHeader>
              <Image src={el.pic} boxSize={"200px"} boxShadow={"lg"} />

              <CardBody>
                <Text fontSize={"11px"} textAlign={"justify"}>
                  {el.description}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant={"link"}
                  rightIcon={<ArrowForwardIcon />}
                  onClick={onOpen}
                >
                  view more
                </Button>
                <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader>
                      <Box>
                        <Text>{el.name}</Text>
                      </Box>
                    </DrawerHeader>
                    <DrawerBody>
                      <Box>
                        <Box
                          display={"flex"}
                          flexDirection={isSmallerThan ? "column" : "row"}
                          justifyContent={"center"}
                          gap={5}
                        >
                          <Image src={el.pic} />
                          <Box gap={5}>
                            <Box>
                              <Text textAlign={"justify"}>{el.more}</Text>
                              <Box
                                display={"flex"}
                                fontSize={"15px"}
                                marginY={"10px"}
                                gap={2}
                              >
                                <Text fontWeight={"bold"}>Tools: </Text>
                                <Text>{el.tools}</Text>
                              </Box>
                            </Box>

                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              height={"80px"}
                              gap={5}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                              >
                                <Box
                                  height={"30px"}
                                  display={"flex"}
                                  padding={"2px"}
                                >
                                  <Link
                                    to={"https://github.com/znrrrf/JCWDOL0904"}
                                    target="_blank"
                                  >
                                    <Icon
                                      as={VscGithubInverted}
                                      boxSize={"25px"}
                                    />
                                  </Link>
                                </Box>
                              </motion.div>

                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                              >
                                <Box height={"fit-content"}>
                                  <Link
                                    to={
                                      "https://jcwdol0904.purwadhikabootcamp.com/"
                                    }
                                    target="_blank"
                                  >
                                    <Button
                                      variant={"none"}
                                      backgroundColor={"black"}
                                      color={"white"}
                                      borderRadius={"none"}
                                      border={"1px"}
                                      rightIcon={<ArrowForwardIcon />}
                                      fontSize={"13px"}
                                      height={"30px"}
                                      _hover={{
                                        color: "black",
                                        backgroundColor: "white",
                                      }}
                                    >
                                      Visit
                                    </Button>
                                  </Link>
                                </Box>
                              </motion.div>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </CardFooter>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}

export default Projects;

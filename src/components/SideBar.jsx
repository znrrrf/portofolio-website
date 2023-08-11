import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
  Collapse,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdCode,
  MdFolder,
  MdAutoStories,
  MdAccountBox,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function SideBar() {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  const navigationButton = [
    {
      name: "Home",
      icon: MdHome,
      navi: "/",
    },
    { name: "About Me", icon: MdAccountBox, navi: "/about-me" },
    {
      name: "Skill",
      icon: MdCode,
      navi: "/skill",
    },
    {
      name: "Study",
      icon: MdAutoStories,
      navi: "/study",
    },
    {
      name: "Projects",
      icon: MdFolder,
      navi: "/projects",
    },
  ];
  const [show, setShow] = useState("");
  const [active, setActive] = useState("Home");
  const [timeOutData, setTimeOutData] = useState(null);
  const navigation = useNavigate();

  const handleToggle = (name) => {
    if (timeOutData) {
      clearTimeout(timeOutData);
      setTimeOutData(null);
    }

    const newTimeOut = setTimeout(() => {
      setShow(name);
      setTimeOutData(null);
    }, 100);
    setTimeOutData(newTimeOut);
    if (localStorage.getItem("active")) {
      setActive(JSON.parse(localStorage.getItem("active")));
    }
  };
  const handleOut = () => {
    setShow(null);
    if (timeOutData) {
      clearTimeout(timeOutData);
      setTimeOutData(null);
    }
  };
  const buttonActive = (name, navi) => {
    setShow(name);
    localStorage.setItem("active", JSON.stringify(name));
    setActive(name);
    navigation(navi);
  };
  useEffect(() => {
    if (localStorage.getItem("active")) {
      setActive(JSON.parse(localStorage.getItem("active")));
    }
  }, []);

  return (
    <Box
      marginLeft={"30px"}
      height={"full"}
      display={"flex"}
      justifyContent={"center"}
      position={"absolute"}
      flexDirection={"column"}
      gap={5}
    >
      {navigationButton.map((el) => {
        return (
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Button
              paddingY={"25px"}
              borderRadius={"30px"}
              key={el.name}
              width={"65px"}
              name={el.name}
              justifyContent={"start"}
              variant={"ghost"}
              backgroundColor={
                show === el.name || active === el.name ? "#393E46" : null
              }
              color={
                show === el.name || active === el.name ? "#EEEEEE" : "#00ADB5"
              }
              onClick={() => buttonActive(el.name, el.navi)}
              _hover={{
                backgroundColor: "#393E46",
                color: "#EEEEEE",
                width: "150px",
              }}
              onMouseEnter={() => handleToggle(el.name)}
              onMouseLeave={() => handleOut()}
              leftIcon={<Icon as={el.icon} boxSize={7} marginLeft={"3px"} />}
              fontSize={"lg"}
              display={{ base: "none", sm: "flex" }}
            >
              <Collapse key={el.name} in={show === el.name ? true : false}>
                <Text fontSize={"sm"}>{el.name}</Text>
              </Collapse>
            </Button>
          </motion.div>
        );
      })}
    </Box>
  );
}

export default SideBar;

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
  MdPhone,
  MdArrowUpward,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function SideBar() {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  const navigationButton = [
    // {
    //   name: "Home",
    //   icon: MdHome,
    //   navi: "home",
    // },
    { name: "About Me", icon: MdAccountBox, navi: "about" },
    {
      name: "Projects",
      icon: MdFolder,
      navi: "projects",
    },
    {
      name: "Contact",
      icon: MdPhone,
      navi: "contact",
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
      position={"fixed"}
      flexDirection={"column"}
      gap={5}
      zIndex={50}
    >
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
        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Button
            boxShadow={"lg"}
            paddingY={"25px"}
            borderRadius={"30px"}
            key={"Home"}
            width={"65px"}
            name={"Home"}
            justifyContent={"start"}
            variant={"ghost"}
            // backgroundColor={"white"}
            className="bg-color-white"
            color={"gray.800"}
            // onClick={() => buttonActive(el.name, el.navi)}
            id="home"
            _hover={{
              width: "150px",
            }}
            onMouseEnter={() => handleToggle("Home")}
            onMouseLeave={() => handleOut()}
            leftIcon={<Icon as={MdHome} boxSize={7} marginLeft={"3px"} />}
            fontSize={"lg"}
            display={{ base: "none", sm: "flex" }}
          >
            <Collapse
              key={"Home"}
              in={show === "Home" ? true : false}
              hidden={show === "Home" ? false : true}
            >
              <Text fontSize={"sm"}>{"Home"}</Text>
            </Collapse>
          </Button>
        </Link>
      </motion.div>
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
            <Link to={el.navi} smooth={true} duration={500}>
              <Button
                boxShadow={"lg"}
                paddingY={"25px"}
                borderRadius={"30px"}
                key={el.name}
                width={"65px"}
                name={el.name}
                justifyContent={"start"}
                variant={"ghost"}
                className="bg-color-white"
                // backgroundColor={"white"}
                // className=""
                color={"gray.800"}
                // onClick={() => buttonActive(el.name, el.navi)}
                id={el.navi}
                _hover={{
                  width: "150px",
                }}
                onMouseEnter={() => handleToggle(el.name)}
                onMouseLeave={() => handleOut()}
                leftIcon={<Icon as={el.icon} boxSize={7} marginLeft={"3px"} />}
                fontSize={"lg"}
                display={{ base: "none", sm: "flex" }}
              >
                <Collapse
                  key={el.name}
                  in={show === el.name ? true : false}
                  hidden={show === el.name ? false : true}
                >
                  <Text fontSize={"sm"}>{el.name}</Text>
                </Collapse>
              </Button>
            </Link>
          </motion.div>
        );
      })}
    </Box>
  );
}

export default SideBar;

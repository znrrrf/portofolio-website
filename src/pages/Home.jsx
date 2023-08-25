import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Linking from "react-scroll/modules/components/Link";

function Home() {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  useEffect(() => {
    AOS.init();
    localStorage.setItem("active", JSON.stringify("Home"));
  }, []);
  const [isSmallerThan2] = useMediaQuery("(max-width: 376px)");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      width={"100wh"}
      backgroundColor={"gray.700"}
      color={"white"}
    >
      <Box
        display={"flex"}
        gap={2}
        fontSize={"2xl"}
        fontWeight={"bold"}
        data-aos="fade-down"
      >
        <Text>Hi, I'm</Text>
        <Text color={"white"}>Zainur.</Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        data-aos="fade-down"
      >
        <Text fontSize={isSmallerThan2 ? "20px" : "30px"}>
          Full-Stack Web Developer
        </Text>
      </Box>
      <Box display={"flex"} gap={5} marginTop={"30px"}>
        <Box>
          <Linking to={"contact"} smooth={true} duration={500}>
            <Button
              variant={"solid"}
              backgroundColor={"white"}
              border={"1px"}
              borderColor={"transparent"}
              borderRadius={"none"}
              color={"black"}
              _hover={{
                color: "white",
                backgroundColor: "gray.700",
                border: "1px",
                borderColor: "white",
              }}
            >
              My Contact
            </Button>
          </Linking>
        </Box>
        <Box>
          <Button
            variant={"outline"}
            border={"1px"}
            borderColor={"white"}
            color={"white"}
            _hover={{ color: "black", backgroundColor: "white" }}
            borderRadius={"none"}
          >
            <Link
              to={
                "https://drive.google.com/file/d/1gwkupJ04CXOJgyWHB8XH1HgxEYa5CNXv/view?usp=sharing"
              }
              target="_blank"
            >
              Get Resume
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

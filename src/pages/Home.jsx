import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Linking from "react-scroll/modules/components/Link";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseMove = (e) => {
    // Update the state with the current mouse position
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  useEffect(() => {
    AOS.init({ once: true });

    localStorage.setItem("active", JSON.stringify("Home"));
  }, []);
  const [isSmallerThan2] = useMediaQuery("(max-width: 769px)");

  const textShadowStyle = {
    transform: `translate(${Math.abs(mousePosition.x / 50)}px, ${
      mousePosition.y / 50
    }px)`,
    transition: "transform 0.3s ease-out, filter 0.3s ease-out",
  };
  const textShadowStyle2 = {
    transform: `translate(${Math.abs(mousePosition.x / 50)}px, ${
      mousePosition.y / 50
    }px)`,
    transition: "transform 0.3s ease-out, filter 0.3s ease-out",
  };
  // useEffect(() => {
  //   console.log(mousePosition);

  //   let textShadow = document.querySelectorAll(".text-shadow");

  //   let x = mousePosition.x;
  //   let y = mousePosition.y;

  //   textShadow[0].style.transform = `translate(${x / 100}px, ${y / 100}px)`;
  // }, [mousePosition]);

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"start"}
      minHeight={"100vh"}
      width={"100%"}
      maxWidth={"100wh"}
      backgroundColor={"white"}
      color={"white"}
      paddingTop={"200px"}
      onMouseMove={handleMouseMove}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        zIndex={35}
        data-aos="zoom-in"
        color={"gray.900"}
        width={"100wh"}
      >
        <Box
          display={"flex"}
          gap={2}
          fontSize={isSmallerThan2 ? "30px" : "70px"}
          fontWeight={"bold"}
        >
          <Text>Hi, I'm</Text>
          <Text>Zainur.</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          overflowX={"hidden"}
        >
          <Text fontSize={isSmallerThan2 ? "20px" : "60px"}>
            Full-Stack Web Developer
          </Text>
        </Box>
      </Box>

      {!isSmallerThan2 && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          zIndex={10}
          color={"gray.900"}
          className="text-shadow"
          opacity={"20%"}
          style={textShadowStyle2}
        >
          <Box
            display={"flex"}
            gap={2}
            fontSize={isSmallerThan2 ? "35px" : "80px"}
            fontWeight={"bold"}
          >
            <Text>Hi, I'm</Text>
            <Text>Zainur.</Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            fontSize={"3xl"}
            fontWeight={"bold"}
          >
            <Text
              width={"1000px"}
              whiteSpace={"nowrap"}
              fontSize={isSmallerThan2 ? "25px" : "70px"}
            >
              Full-Stack Web Developer
            </Text>
          </Box>
        </Box>
      )}

      <Box zIndex={15} display={"flex"} gap={5} marginTop={"30px"}>
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
            backgroundColor={"gray.700"}
            _hover={{ color: "black", backgroundColor: "white" }}
            borderRadius={"none"}
          >
            <Link
              to={
                "https://drive.google.com/file/d/11s7IWdzowDEnvQQ2nVaE9-5VIJsv-ftB/view?usp=sharing"
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

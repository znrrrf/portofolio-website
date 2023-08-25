import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { Element } from "react-scroll";
import Contact from "./Contact";
function MainPage() {
  useEffect(() => {
    AOS.init();
    localStorage.setItem("active", JSON.stringify("Home"));
  }, []);
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      backgroundColor={"white"}
      width={"100wh"}
    >
      <Stack display={"Flex"} gap={0} width={"full"}>
        <Element name="home">
          <Home />
        </Element>

        <Element name="about">
          <AboutMe />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Stack>
    </Box>
  );
}

export default MainPage;

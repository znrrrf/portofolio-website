import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { Element } from "react-scroll";
import Contact from "./Contact";
import ScrollMagic from "scrollmagic";
import { gsap, Linier } from "gsap";
import { ScrollMagicPlugin } from "scrollmagic";
// ScrollMagicPluginGsap(ScrollMagic, gsap);
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
function MainPage() {
  useEffect(() => {
    AOS.init({ once: true });
    localStorage.setItem("active", JSON.stringify("Home"));

    const controller = new ScrollMagic.Controller();
    var slides = document.querySelectorAll(".panel");
    const nameElement = [".home"];

    new ScrollMagic.Scene({
      triggerElement: ".home",
      triggerHook: 0,
    })
      .setPin(".home")
      .addTo(controller);
  }, []);
  return (
    <Box
      display={"flex"}
      position={"relative"}
      justifyContent={"center"}
      backgroundColor={"white"}
      width={"100wh"}
      zIndex={40}
      className=""
      data-aos="fade-up"
    >
      <Stack
        display={"Flex"}
        flexDirection={"column"}
        gap={0}
        width={"full"}
        className="container"
      >
        <Element name="home" className="home panel" id="sec1">
          <Home />
        </Element>
        <Element name="about" className="about panel shadow" id="sec2">
          <AboutMe />
        </Element>
        <Element name="projects" className="projects panel" id="sec3">
          <Projects />
        </Element>
        <Element name="contact" className="contact panel " id="sec4">
          <Contact />
        </Element>
      </Stack>
    </Box>
  );
}

export default MainPage;

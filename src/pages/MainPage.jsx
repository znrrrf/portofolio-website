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
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
function MainPage() {
  useEffect(() => {
    AOS.init();
    localStorage.setItem("active", JSON.stringify("Home"));

    const controller = new ScrollMagic.Controller();
    var slides = document.querySelectorAll(".panel");
    const nameElement = [".home"];

    // new ScrollMagic.Scene({
    //   triggerElement: ".panel2",
    // })
    //   .setClassToggle(".panel2", ".fade-in")

    console.log(slides);
    for (let i = 0; i < nameElement.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: nameElement[i],
        triggerHook: 0,
      })
        .setPin(nameElement[i])
        .addTo(controller);
      // .setClassToggle("panel", "fade-in")
    }
    new ScrollMagic.Scene({ triggerElement: "#sec1", duration: "100%" })
      .setClassToggle("#home", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#sec2", duration: "100%" })
      .setClassToggle("#about", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#sec3", duration: "100%" })
      .setClassToggle("#projects", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#sec4", duration: "100%" })
      .setClassToggle("#contact", "active")
      .addTo(controller);
    // for (let i = 0; i < slides.length; i++) {
    //   new ScrollMagic.Scene({
    //     triggerElement: slides[i],
    //     triggerHook: 0,

    //     // duration: "100%",
    //   })
    //     .setClassToggle(slides[i], "fade-in")
    //     .setPin(slides[i])
    //     .addTo(controller);
    // }
  }, []);
  return (
    <Box
      height={"100%"}
      display={"flex"}
      position={"relative"}
      justifyContent={"center"}
      backgroundColor={"white"}
      width={"100wh"}
      zIndex={40}
    >
      <Stack
        display={"Flex"}
        gap={0}
        width={"full"}
        position={"relative"}
        Height={"100vh"}
      >
        <Element name="home" className="home panel " id="sec1 ">
          <Home />
        </Element>
        <Element name="about" className="about panel" id="sec2">
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

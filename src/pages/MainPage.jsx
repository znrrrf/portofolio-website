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
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
function MainPage() {
  useEffect(() => {
    AOS.init();
    localStorage.setItem("active", JSON.stringify("Home"));

    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "200%",
      },
    });
    var slides = document.querySelectorAll(".panel");

    console.log(slides);
    for (let i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        .addIndicators()
        .addTo(controller);
    }
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
          <div className="panel">
            <Home />
          </div>
        </Element>

        <Element name="about">
          <div className="panel">
            <AboutMe />
          </div>
        </Element>
        <Element name="projects">
          <div className="panel">
            <Projects />
          </div>
        </Element>
        <Element name="contact">
          <div className="panel">
            <Contact />
          </div>
        </Element>
      </Stack>
    </Box>
  );
}

export default MainPage;

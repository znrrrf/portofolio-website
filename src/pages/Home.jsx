import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import profileImage from "../asset/profileNoBackground.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@chakra-ui/react";
import HomeMobile from "./MobilePages/HomeMobile";
import HomePc from "./PCPages/HomePc";

function Home() {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  useEffect(() => {
    AOS.init();
    localStorage.setItem("active", JSON.stringify("Home"));
  }, []);
  return <>{isSmallerThan ? <HomeMobile /> : <HomePc />}</>;
}

export default Home;

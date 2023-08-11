import {
  Box,
  Divider,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import profileImage from "../asset/newprofile.png";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMeMobile from "./MobilePages/AboutMeMobile";
import AboutMePc from "./PCPages/AboutMePc";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  return <>{isSmallerThan ? <AboutMeMobile /> : <AboutMePc />}</>;
}

export default AboutMe;

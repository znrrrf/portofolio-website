import {
  Box,
  Button,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc";
import SideBarMobile from "./mobileComponents/SideBarMobile";
import { SiLinkedin } from "react-icons/si";

function NavBar() {
  const [isSmallerThan] = useMediaQuery("(max-width: 910px)");
  const [active, setActive] = useState("Home");
  const navigation = useNavigate();
  const mainPageButton = () => {
    setActive("Home");
    localStorage.setItem("active", JSON.stringify("Home"));
    navigation("/");
  };
  const contactPageButton = () => {
    setActive("Contact");
    navigation("/contact");
  };

  return (
    <Stack
      position={"fixed"}
      direction={"row"}
      justifyContent={"space-between"}
      width={"full"}
      paddingY={"10px"}
      paddingX={"20px"}
      zIndex={50}
    >
      <Box paddingX={isSmallerThan ? null : "30px"}>
        {isSmallerThan ? <SideBarMobile /> : null}
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={5}>
        <Link to={"https://github.com/Znrrrf?tab=repositories"}>
          <Icon
            as={VscGithubInverted}
            color={"red"}
            boxSize={"20px"}
            _hover={{ cursor: "pointer", color: "#EEEEEE" }}
          />
        </Link>
        <Link to={"https://www.linkedin.com/in/zainur-rouf-2822a4263/"}>
          <Icon
            as={SiLinkedin}
            color={"red"}
            boxSize={"20px"}
            _hover={{ cursor: "pointer", color: "#EEEEEE" }}
          />
        </Link>
      </Box>
    </Stack>
  );
}

export default NavBar;

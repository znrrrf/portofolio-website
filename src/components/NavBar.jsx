import { Box, Button, Icon, Stack, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc";
import SideBarMobile from "./mobileComponents/SideBarMobile";
import { SiLinkedin } from "react-icons/si";

function NavBar() {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
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
      position={"absolute"}
      direction={"row"}
      justifyContent={"space-between"}
      width={"full"}
      paddingY={"20px"}
      paddingX={"20px"}
    >
      <Box>
        {isSmallerThan ? (
          <SideBarMobile />
        ) : (
          <>
            <Button
              disabled={active === "Home" ? true : false}
              color={"#00ADB5"}
              variant={"ghost"}
              _hover={{ color: "#EEEEEE" }}
              marginX={"10px"}
              onClick={() => mainPageButton()}
            >
              Main
            </Button>
            <Button
              color={"#00ADB5"}
              variant={"ghost"}
              _hover={{ color: "#EEEEEE" }}
              marginX={"10px"}
              onClick={() => contactPageButton()}
            >
              Contact
            </Button>
          </>
        )}
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

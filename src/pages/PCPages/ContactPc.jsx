import { Box, Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactPc() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      backgroundColor={"#222831"}
    >
      <Box>
        <Heading color={"#00ADB5"} data-aos="fade-down">
          Get in touch
        </Heading>
      </Box>
      <Box>
        <Text marginBottom={"50px"} color={"#EEEEEE"} data-aos="zoom-in">
          Contact me
        </Text>
      </Box>
      <Stack spacing={"30px"} direction={"row"}>
        <Box
          cursor={"pointer"}
          width={"400px"}
          height={"200px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"#393E46"}
          _hover={{ backgroundColor: "#EEEEEE", color: "#393E46" }}
          borderRadius={"20px"}
          data-aos="zoom-in-right"
          color={"#EEEEEE"}
        >
          <Icon as={MdEmail} boxSize={"50px"} />
          <Text fontWeight={"bold"}>Email</Text>
          <Text fontWeight={"bold"} fontSize={"25px"}>
            zainurrouf4@gmail.com
          </Text>
        </Box>
        <Link to={"https://wa.me/6281546413467"}>
          <Box
            cursor={"pointer"}
            width={"400px"}
            height={"200px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"#393E46"}
            color={"#EEEEEE"}
            borderRadius={"20px"}
            data-aos="zoom-in-left"
            _hover={{ backgroundColor: "#EEEEEE", color: "#393E46" }}
          >
            <Icon as={MdWhatsapp} boxSize={"50px"} />
            <Text fontWeight={"bold"}>Whatapps</Text>
            <Text fontWeight={"bold"} fontSize={"25px"}>
              +62-815-4641-3467
            </Text>
          </Box>
        </Link>
      </Stack>
    </Box>
  );
}

export default ContactPc;

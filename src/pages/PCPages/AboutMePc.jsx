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
import profileImage from "../../asset/newprofile.png";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMePc() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#222831"}
    >
      <Box>
        <Heading
          color={"#00ADB5"}
          marginBottom={"50px"}
          data-aos="fade-down"
          marginTop={"100px"}
        >
          About Me
        </Heading>
      </Box>

      <>
        <Stack direction={"row"} gap={10}>
          <Box
            data-aos="fade-right"
            width={"300px"}
            height={"300px"}
            overflowY={"hidden"}
            borderRadius={"20px"}
          >
            <Image src={profileImage} />
          </Box>
          <Divider orientation="vertical" height={"300px"} data-aos="zoom-in" />
          <Box
            data-aos="fade-left"
            width={"500px"}
            display={"flex"}
            alignItems={"center"}
            color={"#EEEEEE"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text textAlign={"justify"} marginBottom={"10px"}>
                My background is a mechanical engineering. But, I'm interested
                on IT especially programming. With all the support of my friend
                and family, I got a scholarship on Purwadhika Digital Technology
                School as a Full-Stack Web Developer. And after graduated from
                it, I feel more confident that programming will bring me to the
                bright future.
              </Text>
              <Text textAlign={"justify"} marginBottom={"10px"}>
                Even though my background is not an IT but that won't stop me
                from competing. The mathematical logic that I've learned from
                university and soft skills of organizations in my university,
                help me to solve a problem and work together as a team and make
                a simple e-commerce website work on both a user interface and
                database.
              </Text>
              <Text textAlign={"justify"} marginBottom={"10px"}>
                I hope we can work together in the future.
              </Text>
            </Box>

            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Box width={"full"}>
                <Button
                  backgroundColor={"#00ADB5"}
                  color={"#EEEEEE"}
                  _hover={{ backgroundColor: "#00ADB9" }}
                  rightIcon={<Icon as={MdFileDownload} />}
                >
                  GET MY CV
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Stack>
      </>
    </Box>
  );
}

export default AboutMePc;

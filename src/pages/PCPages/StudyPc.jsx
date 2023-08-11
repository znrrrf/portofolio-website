import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdComputer, MdSchool } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function StudyPc() {
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
      color={"#EEEEEE"}
    >
      <Heading color={"#00ADB5"} marginBottom={"50px"} data-aos="fade-down">
        Study
      </Heading>
      <Stack spacing={5}>
        <motion.div whileHover={{ scale: [null, 1.2, 1.1] }}>
          <Box
            backgroundColor={"#393E46"}
            paddingX={"20px"}
            paddingY={"10px"}
            display={"flex"}
            alignItems={"center"}
            borderRadius={"10px"}
            gap={5}
            data-aos="flip-up"
          >
            <Icon as={MdComputer} boxSize={"40px"} />
            <Box>
              <Heading size={"lg"}>
                Purwadhika Digital Technology School
              </Heading>
              <Text>Full-Stack Web Developer</Text>
              <Text>2023 - 2023</Text>
            </Box>
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.2, 1.1] }}>
          <Box
            backgroundColor={"#393E46"}
            paddingX={"20px"}
            paddingY={"10px"}
            display={"flex"}
            alignItems={"center"}
            borderRadius={"10px"}
            gap={5}
            data-aos="flip-up"
          >
            <Icon as={MdSchool} boxSize={"40px"} />
            <Box>
              <Heading size={"lg"}>Muhammadiyah University Of Surabaya</Heading>
              <Text>Bachelor Mechanical Engineering</Text>
              <Text>2020 - 2022</Text>
            </Box>
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.2, 1.1] }}>
          <Box
            backgroundColor={"#393E46"}
            paddingX={"20px"}
            paddingY={"10px"}
            borderRadius={"10px"}
            display={"flex"}
            alignItems={"center"}
            gap={5}
            data-aos="flip-up"
          >
            <Icon as={MdSchool} boxSize={"40px"} />
            <Box>
              <Heading size={"lg"}>Institut Teknologi Sepuluh Nopember</Heading>
              <Text>Diploma Industrial Mechanical Engineering</Text>
              <Text>2016 - 2020</Text>
            </Box>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
}

export default StudyPc;

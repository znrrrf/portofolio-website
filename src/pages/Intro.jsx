import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";

function Intro() {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    if (currentComponent < 2) {
      const timer = setTimeout(() => {
        setCurrentComponent((prevIndex) => prevIndex + 1);
      }, 1000);

      // Membersihkan timer jika komponen di-unmount sebelum waktu habis
      return () => clearTimeout(timer);
    }
  }, [currentComponent]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100wh"}
      height={"100vh"}
      backgroundColor={"white"}
    >
      <Box>
        {currentComponent === 1 && (
          <Box data-aos="zoom-in">
            <Box
              fontWeight={"bold"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"5px"}
            >
              Wellcome to my <Box color={"blue.500"}>Portofolio</Box>
            </Box>
          </Box>
        )}
        {currentComponent === 2 && (
          <Box data-aos="zoom-in">
            <Text fontWeight={"bold"}>Lets get started!</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Intro;

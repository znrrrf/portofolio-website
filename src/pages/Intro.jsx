import { 
  Box, 
  Text, 
  VStack,
  keyframes 
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define keyframes animations
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(45deg);
  }
  50% {
    transform: translateY(-20px) rotate(45deg);
  }
`;

const floatReverse = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

function Intro() {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    if (currentComponent < 2) {
      const timer = setTimeout(() => {
        setCurrentComponent((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentComponent]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bg="gray.900"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        bgImage="radial-gradient(circle at 25% 25%, white 1px, transparent 1px)"
        bgSize="50px 50px"
      />

      {/* Floating Elements */}
      <Box
        position="absolute"
        top="20%"
        right="15%"
        width="100px"
        height="100px"
        bg="blue.400"
        opacity="0.05"
        borderRadius="xl"
        transform="rotate(45deg)"
        animation={`${float} 6s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="25%"
        left="10%"
        width="60px"
        height="60px"
        bg="blue.400"
        opacity="0.03"
        borderRadius="full"
        animation={`${floatReverse} 8s ease-in-out infinite reverse`}
      />

      <VStack spacing={8} position="relative" zIndex={1}>
        {currentComponent === 1 && (
          <Box data-aos="zoom-in">
            <VStack spacing={6}>
              <Box
                fontSize="4xl"
                fontWeight="bold"
                color="white"
                textAlign="center"
                animation={`${fadeInScale} 1s ease-out`}
              >
                <Text display="inline" color="gray.300">
                  Welcome to my{" "}
                </Text>
                <Text 
                  display="inline" 
                  color="blue.400"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: "0",
                    width: "100%",
                    height: "3px",
                    bg: "blue.400",
                    borderRadius: "2px"
                  }}
                >
                  Portfolio
                </Text>
              </Box>
              
              {/* Loading dots */}
              <Box display="flex" gap={2} justifyContent="center">
                <Box
                  width="8px"
                  height="8px"
                  bg="blue.400"
                  borderRadius="full"
                  animation={`${pulse} 1.5s ease-in-out infinite`}
                />
                <Box
                  width="8px"
                  height="8px"
                  bg="blue.400"
                  borderRadius="full"
                  animation={`${pulse} 1.5s ease-in-out infinite 0.2s`}
                />
                <Box
                  width="8px"
                  height="8px"
                  bg="blue.400"
                  borderRadius="full"
                  animation={`${pulse} 1.5s ease-in-out infinite 0.4s`}
                />
              </Box>
            </VStack>
          </Box>
        )}
        
        {currentComponent === 2 && (
          <Box data-aos="zoom-in">
            <VStack spacing={6}>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                color="white"
                textAlign="center"
                animation={`${fadeInScale} 0.8s ease-out`}
              >
                Let's get started!
              </Text>
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default Intro;
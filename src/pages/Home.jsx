import {
  Box,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  Container,
  Divider,
  Badge,
  useMediaQuery,
  keyframes,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

// Define keyframes animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
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

function Hero() {
  const [showComponent, setShowComponent] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");
  const [isSmallerThan2] = useMediaQuery("(max-width: 321px)");
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  // Animated text variations
  const animatedTexts = [
    "Full-Stack Web Developer",
    "React, Next  Node.js Expert", 
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 300);

    // Text animation cycle
    const textAnimationId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 3000);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(textAnimationId);
    };
  }, []);

  return (
    <Box
      id="home"
      minHeight="100vh"
      bg="gray.900"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Background Pattern - Same as About & Contact */}
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
        right="10%"
        width="120px"
        height="120px"
        bg="blue.400"
        opacity="0.05"
        borderRadius="xl"
        transform="rotate(45deg)"
        animation={`${float} 6s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="30%"
        left="5%"
        width="80px"
        height="80px"
        bg="blue.400"
        opacity="0.03"
        borderRadius="full"
        animation={`${floatReverse} 8s ease-in-out infinite reverse`}
      />

      <Container maxW="6xl" position="relative" zIndex={1}>
        {showComponent && (
          <VStack spacing={12} textAlign="center" py={20}>
            {/* Greeting Section */}
            <Box data-aos="fade-up" data-aos-delay="200">
              <VStack spacing={6}>
                {/* Status Badge */}
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                  letterSpacing="wider"
                  border="1px solid"
                  borderColor="blue.400"
                  bg="gray.800"
                  color="blue.300"
                >
                  👋 AVAILABLE FOR WORK
                </Badge>

                {/* Main Heading */}
                <VStack spacing={4}>
                  <HStack 
                    spacing={4} 
                    fontSize={isSmallerThan ? "4xl" : isTablet ? "5xl" : "6xl"}
                    fontWeight="bold"
                    flexWrap="wrap"
                    justifyContent="center"
                  >
                    <Text color="gray.300">Hi, I'm</Text>
                    <Text 
                      color="white"
                      position="relative"
                      _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: "0",
                        width: "100%",
                        height: "4px",
                        bg: "blue.400",
                        borderRadius: "2px"
                      }}
                    >
                      Zainur
                    </Text>
                  </HStack>

                  {/* Animated Role Text */}
                  <Box
                    height={isSmallerThan ? "60px" : "80px"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={4}
                    bg="gray.800"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.700"
                    borderLeft="4px solid"
                    borderLeftColor="blue.400"
                    minW={isSmallerThan ? "300px" : "400px"}
                  >
                    <Text
                      fontSize={isSmallerThan ? "lg" : "2xl"}
                      fontWeight="medium"
                      color="gray.300"
                      key={textIndex}
                      opacity={1}
                      animation={`${fadeInUp} 0.8s ease-out`}
                      letterSpacing="wide"
                    >
                      {animatedTexts[textIndex]}
                    </Text>
                  </Box>
                </VStack>

                {/* Divider */}
                <Divider
                  borderColor="gray.600"
                  width="120px"
                  borderWidth="1px"
                  mx="auto"
                />
              </VStack>
            </Box>

            {/* Description */}
            <Box
              data-aos="fade-up"
              data-aos-delay="400"
              maxW="600px"
              p={6}
              bg="gray.800"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.700"
            >
              <Text
                fontSize={isSmallerThan ? "md" : "lg"}
                color="gray.300"
                lineHeight="1.7"
                textAlign="center"
              >
                I've been working at PT Summit Global Teknologi as a Frontend Developer from Feb 2024. In this role, I have significantly contributed to various projects utilizing modern technologies such as Vue.js, React.js and Next.js.
              </Text>
            </Box>

            {/* Action Buttons */}
            <HStack 
              spacing={6} 
              data-aos="fade-up" 
              data-aos-delay="600"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Link to="contact" smooth={true} duration={500}>
                <Button
                  size={isSmallerThan ? "lg" : "xl"}
                  px={8}
                  py={6}
                  bg="blue.400"
                  color="white"
                  borderRadius="lg"
                  fontWeight="bold"
                  letterSpacing="wide"
                  border="2px solid"
                  borderColor="blue.400"
                  _hover={{
                    bg: "transparent",
                    color: "blue.400",
                    borderColor: "blue.400",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 30px rgba(66, 153, 225, 0.3)"
                  }}
                  _active={{
                    transform: "translateY(0px)"
                  }}
                  transition="all 0.3s ease"
                >
                  GET IN TOUCH
                </Button>
              </Link>

              <Button
                as="a"
                href="https://drive.google.com/file/d/11s7IWdzowDEnvQQ2nVaE9-5VIJsv-ftB/view?usp=sharing"
                target="_blank"
                size={isSmallerThan ? "lg" : "xl"}
                px={8}
                py={6}
                bg="transparent"
                border="2px solid"
                borderColor="gray.600"
                color="gray.300"
                borderRadius="lg"
                fontWeight="bold"
                letterSpacing="wide"
                _hover={{
                  bg: "gray.800",
                  color: "white",
                  borderColor: "gray.400",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px rgba(128, 128, 128, 0.2)"
                }}
                _active={{
                  transform: "translateY(0px)"
                }}
                transition="all 0.3s ease"
              >
                VIEW RESUME
              </Button>
            </HStack>

            {/* Quick Info Cards */}
            <HStack 
              spacing={8}
              data-aos="fade-up" 
              data-aos-delay="800"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                p={4}
                bg="gray.800"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.700"
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "blue.400",
                  transform: "translateY(-2px)"
                }}
              >
                <Text fontSize="sm" color="blue.400" fontWeight="bold" mb={1}>
                  LOCATION
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Jakarta, ID
                </Text>
              </Box>

              <Box
                p={4}
                bg="gray.800"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.700"
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "blue.400",
                  transform: "translateY(-2px)"
                }}
              >
                <Text fontSize="sm" color="blue.400" fontWeight="bold" mb={1}>
                  EXPERIENCE
                </Text>
                <Text fontSize="sm" color="gray.300">
                  2+ Years
                </Text>
              </Box>

              <Box
                p={4}
                bg="gray.800"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.700"
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "blue.400",
                  transform: "translateY(-2px)"
                }}
              >
                <Text fontSize="sm" color="blue.400" fontWeight="bold" mb={1}>
                  SPECIALITY
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Full-Stack
                </Text>
              </Box>
            </HStack>

          </VStack>
        )}
      </Container>
    </Box>
  );
}

export default Hero;
import {
  Box,
  Text,
  Heading,
  useMediaQuery,
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Container,
  Divider,
  SimpleGrid,
  Badge,
  Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ICONS } from "../contants";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");
  const [isSmallerThan2] = useMediaQuery("(max-width: 321px)");
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  const skills = [
    { skill: "HTML", icon: ICONS.htmlI, category: "Frontend" },
    { skill: "CSS", icon: ICONS.cssI, category: "Frontend" },
    { skill: "React Js", icon: ICONS.reactI, category: "Frontend" },
    { skill: "Next Js", icon: ICONS.nextI, category: "Frontend" },
    { skill: "Antd", icon: ICONS.antdI, category: "Frontend" },
    { skill: "Redux-toolkit", icon: ICONS.reduxI, category: "Frontend" },
    { skill: "Javascript", icon: ICONS.javascriptI, category: "Language" },
    { skill: "Express Js", icon: ICONS.expressI, category: "Backend" },
    { skill: "Node Js", icon: ICONS.nodeI, category: "Backend" },
    { skill: "PHP", icon: ICONS.phpI, category: "Backend" },
    { skill: "Tailwind", icon: ICONS.tailwindI, category: "Frontend" },
    { skill: "Chakra-Ui", icon: ICONS.chakraI, category: "Frontend" },
    { skill: "MySql", icon: ICONS.mysqlI, category: "Database" },
    { skill: "Sequelize", icon: ICONS.sequelizeI, category: "Database" },
    { skill: "Firebase", icon: ICONS.firebaseI, category: "Database" },
    { skill: "TypeScript", icon: ICONS.typescriptI, category: "Language" },
    { skill: "React-Native", icon: ICONS.nativeI, category: "Mobile" },
  ];

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryColors = {
    "Frontend": "blue.400",
    "Backend": "green.400", 
    "Database": "purple.400",
    "Language": "orange.400",
    "Mobile": "pink.400"
  };

  return (
    <Box
      id="about"
      minHeight="100vh"
      bg="gray.900"
      py={20}
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern - Same as Contact & Projects */}
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
      
      <Container maxW="6xl" position="relative" zIndex={1}>
        {/* Section Header - Same style as Contact & Projects */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Box>
            <Heading
              fontSize={isSmallerThan ? "3xl" : "5xl"}
              fontWeight="bold"
              color="white"
              mb={4}
            >
              About Me
            </Heading>
            <Divider
              borderColor="blue.400"
              width="80px"
              borderWidth="2px"
              mx="auto"
            />
          </Box>
          <Text
            fontSize="lg"
            color="gray.400"
            maxW="600px"
            lineHeight="1.7"
          >
            Get to know more about my journey and technical expertise.
          </Text>
        </VStack>

        {/* Main Content */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="start"
          mb={16}
        >
          {/* About Text */}
          <VStack spacing={8} align="start">
            <Box
              p={8}
              bg="gray.800"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.700"
              borderLeft="4px solid"
              borderLeftColor="blue.400"
              transition="all 0.3s ease"
              _hover={{
                bg: "gray.750",
                transform: "translateX(4px)"
              }}
            >
              <Text
                fontSize="sm"
                color="blue.400"
                letterSpacing="wider"
                fontWeight="bold"
                mb={4}
              >
                WHO I AM
              </Text>
              <VStack spacing={4} align="start">
                <Text
                  fontSize={isSmallerThan ? "md" : "lg"}
                  lineHeight="1.7"
                  color="gray.300"
                >
                  A passionate web developer graduated from Purwadhika Digital Technology School 
                  bootcamp. I specialize in solving complex problems and creating robust websites 
                  that meet requirements with minimal bugs, following industry best practices.
                </Text>
                <Text
                  fontSize={isSmallerThan ? "md" : "lg"}
                  lineHeight="1.7"
                  color="gray.300"
                >
                  Experienced in both frontend and backend development with strong teamwork skills. 
                  Available for remote work or relocation.
                </Text>
              </VStack>
            </Box>

            {/* Stats */}
            <SimpleGrid columns={2} spacing={6} width="100%">
              <Box
                p={6}
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
                <Text fontSize="3xl" fontWeight="bold" color="white" mb={2}>
                  13+
                </Text>
                <Text fontSize="sm" color="gray.400" letterSpacing="wider">
                  TECHNOLOGIES
                </Text>
              </Box>
              <Box
                p={6}
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
                <Text fontSize="3xl" fontWeight="bold" color="white" mb={2}>
                  2+
                </Text>
                <Text fontSize="sm" color="gray.400" letterSpacing="wider">
                  YEARS LEARNING
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>

          {/* Skills Section */}
          <VStack spacing={8} align="start">
            <Box width="100%">
              <Text
                fontSize="sm"
                color="blue.400"
                letterSpacing="wider"
                fontWeight="bold"
                mb={6}
              >
                TECHNICAL SKILLS
              </Text>

              {/* Skills by Category */}
              <VStack spacing={6} align="stretch">
                {Object.entries(skillCategories).map(([category, categorySkills]) => (
                  <Box
                    key={category}
                    p={6}
                    bg="gray.800"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.700"
                    borderLeft="4px solid"
                    borderLeftColor={categoryColors[category]}
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "gray.750",
                      transform: "translateX(4px)"
                    }}
                  >
                    <HStack spacing={3} mb={4}>
                      <Badge
                        colorScheme={categoryColors[category].split('.')[0]}
                        variant="solid"
                        borderRadius="md"
                        px={3}
                        py={1}
                      >
                        {category}
                      </Badge>
                      <Text fontSize="sm" color="gray.400">
                        {categorySkills.length} skills
                      </Text>
                    </HStack>
                    
                    <SimpleGrid
                      columns={{ base: 1, sm: 2 }}
                      spacing={3}
                    >
                      {categorySkills.map((skill, index) => (
                        <HStack
                          key={index}
                          spacing={3}
                          p={3}
                          bg="gray.700"
                          borderRadius="md"
                          border="1px solid"
                          borderColor="gray.600"
                          transition="all 0.3s ease"
                          _hover={{
                            borderColor: categoryColors[category],
                            bg: "gray.650",
                            transform: "translateY(-2px)"
                          }}
                          cursor="pointer"
                        >
                          <Box
                            width="32px"
                            height="32px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bg="gray.600"
                            borderRadius="md"
                          >
                            <Image 
                              src={skill.icon} 
                              width="24px" 
                              height="24px"
                              objectFit="contain"
                            />
                          </Box>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            color="white"
                            flex={1}
                          >
                            {skill.skill}
                          </Text>
                        </HStack>
                      ))}
                    </SimpleGrid>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </SimpleGrid>

        {/* Bottom CTA - Same as Contact & Projects */}
        <Box
          mt={16}
          textAlign="center"
          p={8}
          bg="gray.800"
          borderRadius="xl"
          border="1px solid"
          borderColor="gray.700"
        >
          <Text color="gray.300" fontSize="lg" mb={4}>
            Want to know more about my experience?
          </Text>
          
          <Link to={"contact"} smooth={true} duration={500}>
            <Button variant={'outline'}>
              <Text color="white" fontSize="xl" fontWeight="bold">
                Let's connect!
              </Text>
            </Button>
        </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
  HStack,
  Container,
  Badge,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import galaxy from "../asset/galaxy.png";
import checkPost from "../asset/check-post.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Galaxy Web Store",
      description: "A multi-warehouse e-commerce platform with intelligent inventory management",
      tools: ["React Js", "Tailwind", "Chakra UI", "Redux", "Node Js", "Express Js", "Sequelize", "MySQL"],
      pic: galaxy,
      category: "Full-Stack",
      status: "Live",
      more: "This enterprise-level website is designed for multi-warehouse operations across Indonesia. Features automatic stock management, nearest warehouse selection, intelligent stock mutations, and integrated delivery system using OpenCage API for geolocation and RajaOngkir API for shipping calculations.",
      site: "https://jcwdol0904.purwadhikabootcamp.com/",
      GIT: "https://github.com/znrrrf/JCWDOL0904",
    },
    {
      id: 2,
      name: "Check Post Mobile App",
      description: "Cross-platform mobile application for social media content management",
      tools: ["React Native", "Expo", "REST API", "JSON Placeholder"],
      pic: checkPost,
      category: "Mobile",
      status: "Development",
      more: "A React Native application utilizing JSON Placeholder API for content management. Features post browsing, comment system, and user interaction capabilities. Currently under active development for enhanced performance and user experience.",
      site: null,
      GIT: "https://github.com/znrrrf/check-post",
    },
  ];

  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataDrawer, setDataDrawer] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const openDrawer = (data) => {
    onOpen();
    setDataDrawer(data);
  };

  return (
    <Box
      id="projects"
      minHeight="100vh"
      bg="gray.900"
      py={20}
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern - Same as Contact */}
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
        {/* Section Header - Same style as Contact */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Box>
            <Heading
              fontSize={isSmallerThan ? "3xl" : "5xl"}
              fontWeight="bold"
              color="white"
              mb={4}
            >
              My Projects
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
            Showcasing my recent work and technical achievements in web development.
          </Text>
        </VStack>

        {/* Projects Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          mb={16}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                borderRadius="lg"
                color="white"
                cursor="pointer"
                height="100%"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: "blue.400",
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                }}
                onClick={() => openDrawer(project)}
              >
                <CardHeader pb={2}>
                  <VStack spacing={3} align="start">
                    <HStack spacing={3} width="100%" justify="space-between">
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="white"
                      >
                        {project.name}
                      </Text>
                      <Badge
                        colorScheme={project.status === "Live" ? "green" : "yellow"}
                        variant="solid"
                        borderRadius="md"
                        px={2}
                        py={1}
                      >
                        {project.status}
                      </Badge>
                    </HStack>
                    <Text
                      fontSize="sm"
                      color="blue.400"
                      fontWeight="medium"
                    >
                      {project.category}
                    </Text>
                  </VStack>
                </CardHeader>

                <Box
                  // width="100%"
                  height="200px"
                  overflow="hidden"
                  borderRadius="md"
                  mx={4}
                  mb={4}
                  width="calc(100% - 32px)"
                >
                  <Image
                    src={project.pic}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    transition="all 0.3s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                </Box>

                <CardBody py={4}>
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    lineHeight="1.6"
                    mb={4}
                  >
                    {project.description}
                  </Text>
                  
                  <Box>
                    <Text fontSize="xs" color="gray.400" mb={2}>
                      Tech Stack:
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.tools.slice(0, 4).map((tool, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          borderColor="gray.600"
                          color="gray.300"
                          fontSize="xs"
                          borderRadius="md"
                        >
                          {tool}
                        </Badge>
                      ))}
                      {project.tools.length > 4 && (
                        <Text fontSize="xs" color="gray.500">
                          +{project.tools.length - 4} more
                        </Text>
                      )}
                    </HStack>
                  </Box>
                </CardBody>

                <CardFooter pt={0}>
                  <HStack spacing={2} width="100%" justify="space-between" align="center">
                    <Button
                      size="sm"
                      colorScheme="blue"
                      variant="ghost"
                      rightIcon={<ArrowForwardIcon />}
                      _hover={{
                        bg: "blue.800"
                      }}
                    >
                      View Details
                    </Button>
                  </HStack>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>

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
            the other project will inputed soon in this web
          </Text>
        </Box>

        {/* Drawer */}
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay bg="rgba(0,0,0,0.8)" />
          <DrawerContent
            bg="gray.900"
            color="white"
            borderTop="1px solid"
            borderColor="gray.700"
          >
            <DrawerHeader borderBottom="1px solid" borderColor="gray.700" py={6}>
              <HStack spacing={4} justify="space-between">
                <VStack spacing={2} align="start">
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="white"
                  >
                    {dataDrawer?.name}
                  </Text>
                  <HStack spacing={3}>
                    <Badge
                      colorScheme={dataDrawer?.status === "Live" ? "green" : "yellow"}
                      variant="solid"
                      borderRadius="md"
                    >
                      {dataDrawer?.status}
                    </Badge>
                    <Text fontSize="sm" color="blue.400" fontWeight="medium">
                      {dataDrawer?.category}
                    </Text>
                  </HStack>
                </VStack>
                <Button
                  variant="ghost"
                  onClick={onClose}
                  color="gray.400"
                  _hover={{ color: "white", bg: "gray.800" }}
                  size="lg"
                >
                  ✕
                </Button>
              </HStack>
            </DrawerHeader>

            <DrawerBody py={8}>
              <Container maxW="6xl">
                <SimpleGrid
                  columns={{ base: 1, lg: 2 }}
                  spacing={12}
                  alignItems="start"
                >
                  <Box>
                    <Image
                      src={dataDrawer?.pic}
                      width="100%"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.700"
                    />
                  </Box>

                  <VStack spacing={8} align="start">
                    <Box>
                      <Text
                        fontSize="sm"
                        color="blue.400"
                        letterSpacing="wider"
                        mb={4}
                        fontWeight="bold"
                      >
                        PROJECT OVERVIEW
                      </Text>
                      <Text
                        fontSize="md"
                        lineHeight="1.7"
                        color="gray.300"
                      >
                        {dataDrawer?.more}
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontSize="sm"
                        color="blue.400"
                        letterSpacing="wider"
                        mb={4}
                        fontWeight="bold"
                      >
                        TECHNOLOGIES USED
                      </Text>
                      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
                        {dataDrawer?.tools?.map((tool, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            borderColor="gray.600"
                            color="gray.300"
                            fontSize="sm"
                            borderRadius="md"
                            px={3}
                            py={2}
                            textAlign="center"
                            _hover={{
                              borderColor: "blue.400",
                              color: "blue.400"
                            }}
                            transition="all 0.2s ease"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </SimpleGrid>
                    </Box>

                    <HStack spacing={4} pt={4}>
                      <Button
                        as="a"
                        href={dataDrawer?.GIT}
                        target="_blank"
                        leftIcon={<Icon as={VscGithubInverted} />}
                        variant="outline"
                        borderColor="gray.600"
                        color="gray.300"
                        borderRadius="md"
                        size="lg"
                        _hover={{
                          borderColor: "white",
                          color: "white",
                          bg: "gray.800"
                        }}
                      >
                        View Code
                      </Button>

                      {dataDrawer?.site && (
                        <Button
                          as="a"
                          href={dataDrawer.site}
                          target="_blank"
                          rightIcon={<ExternalLinkIcon />}
                          colorScheme="blue"
                          size="lg"
                          borderRadius="md"
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                          }}
                          transition="all 0.3s ease"
                        >
                          Live Demo
                        </Button>
                      )}
                    </HStack>
                  </VStack>
                </SimpleGrid>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Bottom CTA - Same as Contact */}
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
            Interested in working together?
          </Text>
          <Text color="white" fontSize="xl" fontWeight="bold">
            Let's discuss!
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
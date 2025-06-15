import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  useMediaQuery,
  VStack,
  HStack,
  Container,
  Divider,
  SimpleGrid,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdWhatsapp, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_m1lguvx",
        "template_q7wb5cb",
        form.current,
        "8n6-t8wxB6aaW66R1"
      )
      .then(
        (result) => {
          Toast.fire({
            icon: "success",
            title: "Message sent successfully!",
          });
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          Toast.fire({
            icon: "error",
            title: "Something went wrong",
          });
          setIsLoading(false);
          e.target.reset();
        }
      );
  };

  const [isSmallerThan] = useMediaQuery("(max-width: 700px)");

  const contactInfo = [
    {
      icon: MdEmail,
      label: "Email",
      value: "zainurrouf4@gmail.com",
      href: "mailto:zainurrouf4@gmail.com",
      color: "red.400"
    },
    {
      icon: MdWhatsapp,
      label: "WhatsApp",
      value: "+62-815-4641-3467",
      href: "https://wa.me/6281546413467",
      color: "green.400"
    },
    {
      icon: MdLocationOn,
      label: "Location",
      value: "Tangerang, Indonesia",
      href: null,
      color: "blue.400"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "blue.500" },
    { icon: FaGithub, href: "#", color: "gray.400" }
  ];

  return (
    <Box
      id="contact"
      minHeight="100vh"
      bg="gray.900"
      py={20}
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
      
      <Container maxW="6xl" position="relative" zIndex={1}>
        {/* Section Header */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Box>
            <Heading
              fontSize={isSmallerThan ? "3xl" : "5xl"}
              fontWeight="bold"
              color="white"
              mb={4}
            >
              Get In Touch
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
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="start"
        >
          {/* Contact Information */}
          <VStack spacing={8} align="start">
            <Box>
              <Heading size="lg" color="white" mb={6}>
                Let's Connect
              </Heading>
              <VStack spacing={6} align="start">
                {contactInfo.map((item, index) => (
                  <HStack
                    key={index}
                    spacing={4}
                    p={4}
                    bg="gray.800"
                    borderRadius="lg"
                    borderLeft="4px solid"
                    borderColor={item.color}
                    width="100%"
                    cursor={item.href ? "pointer" : "default"}
                    transition="all 0.3s ease"
                    _hover={item.href ? {
                      bg: "gray.750",
                      transform: "translateX(4px)"
                    } : {}}
                    onClick={item.href ? () => window.open(item.href, "_blank") : undefined}
                  >
                    <Icon
                      as={item.icon}
                      boxSize={6}
                      color={item.color}
                    />
                    <Box>
                      <Text color="gray.400" fontSize="sm">
                        {item.label}
                      </Text>
                      <Text color="white" fontWeight="medium">
                        {item.value}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Social Links */}
            <Box>
              <Text color="gray.400" mb={4}>
                Follow me on social media
              </Text>
              <HStack spacing={4}>
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    as="a"
                    href={social.href}
                    target="_blank"
                    variant="outline"
                    borderColor="gray.600"
                    color={social.color}
                    size="lg"
                    p={3}
                    _hover={{
                      borderColor: social.color,
                      bg: "gray.800",
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={social.icon} boxSize={5} />
                  </Button>
                ))}
              </HStack>
            </Box>
          </VStack>

          {/* Contact Form */}
          <Box
            as="form"
            ref={form}
            onSubmit={sendEmail}
            bg="gray.800"
            p={8}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.700"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
          >
            <Heading size="lg" color="white" mb={6}>
              Send Message
            </Heading>
            
            <VStack spacing={6}>
              <FormControl>
                <FormLabel color="gray.300" fontWeight="medium">
                  Name
                </FormLabel>
                <Input
                  name="user_name"
                  type="text"
                  required
                  bg="gray.700"
                  border="1px solid"
                  borderColor="gray.600"
                  color="white"
                  placeholder="Your full name"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.6)"
                  }}
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300" fontWeight="medium">
                  Email
                </FormLabel>
                <Input
                  name="user_email"
                  type="email"
                  required
                  bg="gray.700"
                  border="1px solid"
                  borderColor="gray.600"
                  color="white"
                  placeholder="your.email@example.com"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.6)"
                  }}
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300" fontWeight="medium">
                  Message
                </FormLabel>
                <Textarea
                  name="message"
                  required
                  bg="gray.700"
                  border="1px solid"
                  borderColor="gray.600"
                  color="white"
                  placeholder="Tell me about your project..."
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.6)"
                  }}
                  rows={5}
                  resize="vertical"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="100%"
                isLoading={isLoading}
                loadingText="Sending..."
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                }}
                transition="all 0.3s ease"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Bottom CTA */}
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
            Ready to start your project?
          </Text>
          <Text color="white" fontSize="xl" fontWeight="bold">
            Let's build something amazing together!
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
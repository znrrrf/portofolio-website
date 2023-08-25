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
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdWhatsapp } from "react-icons/md";
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
            title: "Send in successfully",
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

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"400px"}
      width={"100wh"}
      backgroundColor={"white"}
      color={"black"}
      paddingBottom={"100px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginBottom={"100px"}
      >
        <Heading marginBottom={"10px"} marginTop={"50px"} data-aos="fade-up">
          Contact
        </Heading>
        <Text fontWeight={"bold"} data-aos="fade-up">
          Let's get in touch
        </Text>
      </Box>
      <Stack
        direction={isSmallerThan ? "column" : "row"}
        gap={10}
        backgroundColor={"gray.700"}
        padding={"30px"}
        borderRadius={"5px"}
        marginX={"20px"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={5} color={"white"}>
          <Box display={"flex"} gap={5}>
            <Icon as={MdEmail} boxSize={"30px"} />
            <Text>zainurrouf4@gmail.com</Text>
          </Box>
          <Box display={"flex"} gap={5}>
            <Icon as={MdWhatsapp} boxSize={"30px"} />
            <Text>+62-815-4641-3467</Text>
          </Box>
        </Box>
        <Box
          padding={"20px"}
          maxW={"400px"}
          backgroundColor={"white"}
          borderRadius={"5px"}
        >
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <Input type="text" name="user_name" />
            <label>Email</label>
            <Input type="email" name="user_email" />
            <label>Message</label>
            <Textarea name="message" />
            <Button
              variant={"none"}
              width={"full"}
              isLoading={isLoading ? true : false}
              border={"1px"}
              borderColor={"gray.700"}
              borderRadius={"none"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                backgroundColor: "gray.700",
              }}
              type="submit"
            >
              Send
            </Button>
          </form>
        </Box>
      </Stack>
    </Box>
  );
}

export default Contact;

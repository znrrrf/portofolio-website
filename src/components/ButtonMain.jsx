import React, { useState } from "react";
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

function ButtonMain() {
  const [show, setShow] = useState(false);

  const handleToggle = (boolen) => setShow(boolen);
  return (
    <>
      <Button
        size="sm"
        mt="1rem"
        onMouseEnter={() => handleToggle(true)}
        onMouseLeave={() => handleToggle(false)}
        leftIcon={<EmailIcon />}
      >
        <Collapse in={show}>Email</Collapse>
      </Button>
    </>
  );
}

export default ButtonMain;

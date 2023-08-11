import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "@chakra-ui/react";

function Paging(props) {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  const [main, setMain] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    setMain(props.main);
    setContact(props.contact);
  }, [props.main, props.contact]);

  return main ? (
    <>
      {isSmallerThan ? null : <SideBar />}
      <NavBar />
      {main ? props.children : null}
    </>
  ) : (
    <>
      <NavBar />
      {contact ? props.children : null}
    </>
  );
}

export default Paging;

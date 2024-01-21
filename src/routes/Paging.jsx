import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Intro from "../pages/Intro";
import AOS from "aos";

function Paging(props) {
  const [isSmallerThan] = useMediaQuery("(max-width: 910px)");
  const [showComponent2, setShowComponent2] = useState(false);
  const [main, setMain] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    setMain(props.main);
    setContact(props.contact);
  }, [props.main, props.contact]);
  useEffect(() => {
    AOS.init({ once: true });
    const timeoutId = setTimeout(() => {
      setShowComponent2(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return showComponent2 ? (
    <div className=" ">
      {isSmallerThan ? null : <SideBar />}
      <NavBar />
      {main ? props.children : null}
      {/* <Footer /> */}
    </div>
  ) : (
    <>
      <Intro />
      {/* {contact ? props.children : null} */}
    </>
  );
}

export default Paging;

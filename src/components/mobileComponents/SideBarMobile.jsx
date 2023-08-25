import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
  Icon,
  Button,
} from "@chakra-ui/react";
import {
  MdTableRows,
  MdHome,
  MdCode,
  MdFolder,
  MdAutoStories,
  MdAccountBox,
  MdCall,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function SideBarMobile() {
  const navigation = useNavigate();
  const navigationButton = [
    {
      name: "Home",
      icon: MdHome,
      navi: "home",
    },
    { name: "About Me", icon: MdAccountBox, navi: "about" },
    {
      name: "Projects",
      icon: MdFolder,
      navi: "projects",
    },
    {
      name: "Contact",
      icon: MdCall,
      navi: "contact",
    },
  ];

  const handleNavigation = (element) => {
    navigation(element.navi);
    localStorage.setItem("active", JSON.stringify(element.name));
  };
  return (
    <Menu>
      <MenuButton
        color={"gray.700"}
        as={IconButton}
        aria-label="Options"
        icon={<MdTableRows />}
        variant="outline"
        backgroundColor={"white"}
        boxShadow={"md"}
      />
      <MenuList display={"flex"} flexDirection={"column"}>
        {navigationButton?.map((el, index) => {
          return (
            <Link to={el.navi} smooth={true} duration={500} key={index}>
              <Button variant={"none"} leftIcon={<Icon as={el.icon} />}>
                {el.name}
              </Button>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SideBarMobile;

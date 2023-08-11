import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
  Icon,
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

function SideBarMobile() {
  const navigation = useNavigate();
  const navigationButton = [
    {
      name: "Home",
      icon: MdHome,
      navi: "/",
    },
    { name: "About Me", icon: MdAccountBox, navi: "/about-me" },
    {
      name: "Skill",
      icon: MdCode,
      navi: "/skill",
    },
    {
      name: "Study",
      icon: MdAutoStories,
      navi: "/study",
    },
    {
      name: "Projects",
      icon: MdFolder,
      navi: "/projects",
    },
    {
      name: "Contact",
      icon: MdCall,
      navi: "/contact",
    },
  ];

  const handleNavigation = (element) => {
    navigation(element.navi);
    localStorage.setItem("active", JSON.stringify(element.name));
  };
  return (
    <Menu>
      <MenuButton
        colorScheme="whiteAlpha"
        as={IconButton}
        aria-label="Options"
        icon={<MdTableRows />}
        variant="outline"
      />
      <MenuList>
        {navigationButton?.map((el) => {
          return (
            <MenuItem
              icon={<Icon as={el.icon} />}
              onClick={() => handleNavigation(el)}
            >
              {el.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SideBarMobile;

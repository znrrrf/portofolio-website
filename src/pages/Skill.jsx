import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
  Wrap,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { backEndSkill, frontEndSkill } from "../data/SkillData";
import { MdCheckCircle } from "react-icons/md";
import SkillPc from "./PCPages/SkillPc";
import SkillMobile from "./MobilePages/SkillMobile";

function Skill() {
  const [isSmallerThan] = useMediaQuery("(max-width: 767px)");
  useEffect(() => {
    AOS.init();
  }, []);
  return <>{isSmallerThan ? <SkillMobile /> : <SkillPc />}</>;
}

export default Skill;

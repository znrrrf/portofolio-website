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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { backEndSkill, frontEndSkill } from "../../data/SkillData";
import { MdCheckCircle } from "react-icons/md";

function SkillMobile() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#222831"}
      flexDirection={"column"}
    >
      <Heading
        color={"#00ADB5"}
        marginBottom={"50px"}
        data-aos="fade-down"
        marginTop={"100px"}
      >
        Skill
      </Heading>
      <Stack direction={"column"} gap={10} marginBottom={"20px"}>
        <Box>
          <Card
            data-aos="zoom-in-right"
            width={"300px"}
            backgroundColor={"#393E46"}
            color={"#EEEEEE"}
            borderRadius={"30px"}
          >
            <CardHeader
              fontWeight={"bold"}
              width={"full"}
              display={"flex"}
              justifyContent={"center"}
              color={"#00ADB5"}
            >
              FRONTEND DEVELOPER
            </CardHeader>
            <CardBody>
              <Stack display={"flex"} flexDirection={"column"}>
                <Grid
                  templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                  gap={4}
                >
                  {frontEndSkill?.map((el) => {
                    return (
                      <Box paddingLeft={"30px"} display={"flex"} gap={2}>
                        <Icon as={MdCheckCircle} />
                        <Box display={"flex"} flexDirection={"column"}>
                          <Heading size={"xs"}>{el.skil}</Heading>
                          <Text fontSize={"sm"}>{el.level}</Text>
                        </Box>
                      </Box>
                    );
                  })}
                </Grid>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            data-aos="zoom-in-left"
            width={"300px"}
            backgroundColor={"#393E46"}
            color={"#EEEEEE"}
            borderRadius={"30px"}
          >
            <CardHeader
              fontWeight={"bold"}
              width={"full"}
              display={"flex"}
              justifyContent={"center"}
              color={"#00ADB5"}
            >
              BACKEND DEVELOPER
            </CardHeader>
            <CardBody>
              <Stack>
                <Grid
                  templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                  gap={4}
                >
                  {backEndSkill?.map((el) => {
                    return (
                      <Box paddingLeft={"30px"} display={"flex"} gap={2}>
                        <Icon as={MdCheckCircle} />
                        <Box display={"flex"} flexDirection={"column"}>
                          <Heading size={"xs"}>{el.skil}</Heading>
                          <Text fontSize={"sm"}>{el.level}</Text>
                        </Box>
                      </Box>
                    );
                  })}
                </Grid>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default SkillMobile;

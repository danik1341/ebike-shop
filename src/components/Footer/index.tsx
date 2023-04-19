import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex
      p={65}
      mt="5px"
      flexGrow={1}
      width="100%"
      align="stretch"
      justify="center"
      minHeight="48vh"
    >
      <Box bgColor="#FE6767" width="90%" borderRadius="25px">
        <Flex justify="space-evenly" align="center" height="100%">
          <Flex>
            <Stack>
              <Text
                fontSize={{ base: "13px", lg: "24px" }}
                fontWeight={700}
                fontStyle="italic"
                color="#545454"
              >
                BATTERY RANGE
              </Text>
              <Text fontSize={68} fontWeight={700} color="white">
                70 Km
              </Text>
              <Text
                fontSize={24}
                fontWeight={700}
                fontStyle="italic"
                color="#545454"
              >
                ASSIST SPEED
              </Text>
              <Text fontSize={68} fontWeight={700} color="white">
                25 Kmph
              </Text>
            </Stack>
          </Flex>
          <Divider orientation="vertical" height="80%" color="black" />
          <Flex>
            <Stack>
              <Text
                fontSize={24}
                fontWeight={700}
                fontStyle="italic"
                color="#545454"
              >
                CHARGING TIME
              </Text>
              <Text fontSize={68} fontWeight={700} color="white">
                3.5 Hours
              </Text>
              <Text
                fontSize={24}
                fontWeight={700}
                fontStyle="italic"
                color="#545454"
              >
                WEIGHT
              </Text>
              <Text fontSize={68} fontWeight={700} color="white">
                16.9 Kg
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Footer;

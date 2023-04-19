import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Sling as Hamburger } from "hamburger-react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex
      align="center"
      width="100%"
      flexGrow={1}
      justify="space-between"
      p={4}
      mt={50}
      position="relative"
    >
      <Flex>
        <Flex
          pl={10}
          display={{ base: "flex", md: "flex", lg: "none" }}
          align="center"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Hamburger />}
              variant="outline"
              borderColor="#FE6767"
            />
            <MenuList>
              <MenuItem>Bikes</MenuItem>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Service & Support</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex
          ml={140}
          align="center"
          position="absolute"
          left={0}
          display={{ base: "flex", md: "flex", lg: "none" }}
        >
          <Text
            fontSize={24}
            fontWeight={600}
            fontStyle="italic"
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            REAL eBIKES
          </Text>
        </Flex>
      </Flex>
      <Flex
        ml={140}
        align="center"
        position="absolute"
        left={0}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Text
          fontSize={24}
          fontWeight={600}
          fontStyle="italic"
          _hover={{ textDecoration: "underline" }}
          cursor="pointer"
        >
          REAL eBIKES
        </Text>
      </Flex>
      <Flex
        mr={140}
        gap={20}
        align="center"
        position="absolute"
        right={20}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Text
          fontSize={24}
          fontWeight={500}
          color="#545454"
          _hover={{ textDecoration: "underline", color: "black" }}
          cursor="pointer"
        >
          Bikes
        </Text>
        <Text
          fontSize={24}
          fontWeight={500}
          color="white"
          _hover={{ textDecoration: "underline" }}
          cursor="pointer"
        >
          About Us
        </Text>
        <Text
          fontSize={24}
          fontWeight={500}
          color="white"
          _hover={{ textDecoration: "underline" }}
          cursor="pointer"
        >
          Service & Support
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;

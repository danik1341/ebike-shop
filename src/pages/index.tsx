import { Box, Button, Flex, Text, Image, Stack } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Flex
        display={{
          base: "flex",
          xl: "none",
        }}
        mt="5vh"
        maxHeight="50vh"
        maxWidth="60vw"
        ml="5vw"
      >
        <Image src="/images/CycleImage1.svg" alt="bike" />
      </Flex>
      <Flex position="relative" mt={{ base: "5vh", lg: "20vh" }}>
        <Flex
          direction="column"
          ml="5vw"
          position="relative"
          left={1}
          alignItems="flex-start"
        >
          <Text
            color="#545454"
            fontSize={64}
            fontWeight={700}
            fontStyle="italic"
          >
            Take Over the Streets,
          </Text>
          <Flex>
            <Text
              color="#FE6767"
              fontSize={64}
              fontWeight={700}
              fontStyle="italic"
            >
              Silently
            </Text>
            <Text
              color="#545454"
              fontSize={64}
              fontWeight={700}
              fontStyle="italic"
            >
              .
            </Text>
          </Flex>
          <Flex>
            <Text color="#717171" fontSize={24} fontWeight={500}>
              Join the revolution to make a difference for {<br />} your life
              and the environment.
            </Text>
          </Flex>
          <Flex align="center" mt="30px" p={4}>
            <Button
              fontSize={24}
              fontWeight={600}
              bgColor="#FE6767"
              color="white"
              minWidth="10vw"
              _hover={{ bgColor: "black" }}
            >
              Book a Test Ride
            </Button>
            <Text
              as="span"
              ml="80px"
              fontSize={18}
              fontWeight={500}
              color="#FE6767"
              position="relative"
              cursor="pointer"
              _hover={{
                _after: {
                  width: "100%",
                  transformOrigin: "bottom left",
                },
              }}
            >
              Learn More
              <Box
                _after={{
                  content: '""',
                  position: "absolute",
                  display: "block",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "black",
                  transformOrigin: "bottom left",
                  transition: "transform 0.3s ease",
                }}
              />
            </Text>
          </Flex>
        </Flex>
        <Flex width="50vw" position="relative" gap={1}>
          <Flex
            minWidth="1216px"
            minHeight="587px"
            position="absolute"
            left={-200}
            top={-200}
            p={1}
            display={{
              base: "none",
              xl: "flex",
            }}
          >
            <Image src="/images/CycleImage1.svg" alt="bike" />
          </Flex>
          <Flex
            minWidth="518px"
            minHeight="368px"
            position="absolute"
            left={1000}
            top={-100}
            p={1}
            display={{
              base: "none",
              xl: "flex",
            }}
          >
            <Image src="/images/CycleImage2.svg" alt="bike" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;

import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

function Output() {
  return (
    <Flex
      direction="column"
      w={["100%", "50%"]}
      alignItems={{ base: "center" }}
    >
      <Flex direction="row" justify="space-between" alignItems="center" w="89%" mt={4}>
          <Text fontSize={"2xl"}>Output</Text>
      </Flex>
      <Box
        w="90%"
        minH="70vh"
        h="auto"
        borderRadius="20px"
        bg="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
        mt={4} // Optional: adds some margin-top
      >
        {/* OpenAI output will appear here */}
      </Box>
    </Flex>
  );
}

export default Output;

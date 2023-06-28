import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { outputAtom, generateAtom,isLoadingAtom } from "../Atoms";
import { ThreeDots } from "react-loader-spinner";
function Output() {
  const [output, setOutput] = useAtom(outputAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [generate, setGenerate] = useAtom(generateAtom);
  
  // Wait for 1 second after component mounts, then set loading to false
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000 milliseconds = 1 second
    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <Flex
      direction="column"
      w={["100%", "50%"]}
      alignItems={{ base: "center" }}
    >
      <Flex
        direction="row"
        justify="space-between"
        alignItems="center"
        w="89%"
        mt={4}
      >
        <Text fontSize={"2xl"}>Output</Text>
      </Flex>
      <Box
        p={8}
        w="90%"
        minH="70vh"
        h="auto"
        borderRadius="20px"
        bg="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
        mt={4} // Optional: adds some margin-top
      >
        {isLoading ? (
          <ThreeDots color="#994F86" height={80} width={80} />
        ) : (
          <Text>{output}</Text>
        )}
      </Box>
    </Flex>
  );
}

export default Output;

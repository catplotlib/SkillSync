import { Box, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { cardSelectedAtom } from "../Atoms";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function Prompt() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const location = useLocation();

  const secondInput = [
    "Followup Messages",
    "Career Advisor",
    "Job Description Matcher",
  ];
  const subtext = {
    "Cover Letter Generator": "Paste in your Resume",
    "Keyword Optimizer": "Paste in the Job Description",
    "Bullet points optimizer": "Paste in your Resume bullet point",
    "Phrase Suggestions": "What career are you interested in?",
    "Job Description Matcher": [
      "Paste in your Resume",
      "Paste in the Job Description",
    ],
    "Grammar Checker": ["Paste in your Resume"],
    "Career Advisor": [
      "Paste in your Resume",
      "What career do you want to pursue?",
    ],
    "Career Progression": "Paste in your Resume",
    "Followup Messages": [
      "Paste in the Job Description",
      "Paste in your Resume",
    ],
  };

  return (
    <Flex
      direction="column"
      w={["100%", "50%"]}
      alignItems={{ base: "center" }}
    >
      <Flex direction="row" justify="space-between" alignItems="center" w="89%">
        <Flex direction="column">
          <Text fontSize={"2xl"}>Prompt</Text>
          <Text fontSize={"auto"}>
            {secondInput.includes(selectedCard)
              ? subtext[selectedCard][0]
              : subtext[selectedCard]}
          </Text>
        </Flex>
        <Button
          bg="#90278E"
          color="white"
          px={6}
          fontSize="auto"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform 0.5s",
          }}
          _active={{
            bg: "#994F86",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
        >
          Generate
        </Button>
      </Flex>
      <Textarea
        w="90%"
        h="auto"
        minH="40vh"
        backgroundImage="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
        mt={4}
        autoFocus
        size="lg"
        border="none"
        _focus={{
          outline: "none",
          border: "none",
          boxShadow: "none",
        }}
        borderRadius="20px"
        p={8}
      />
      {secondInput.includes(selectedCard) && (
        <Flex direction="column" w="89%">
          <Text fontSize={"auto"} mt={2}>
            {subtext[selectedCard][1]}
          </Text>

          <Textarea
            w="100%"
            h="auto"
            minH="20vh"
            backgroundImage="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
            mt={4}
            size="lg"
            border="none"
            _focus={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
            borderRadius="20px"
            p={8}
          />
        </Flex>
      )}
    </Flex>
  );
}

export default Prompt;

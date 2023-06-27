import React, { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Prompt from "./Prompt";
import Output from "./Output";
import { useAtom } from "jotai";
import { cardSelectedAtom } from "../Atoms";

function Chat() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);

  const cardTextMap = {
    "Cover Letter Generator":
      "Assists in generating a cover letter based on the information in the resume.",
    "Keyword Optimizer":
      "Generates a list of keywords relevant to a given job description to include in a resume.",
    "Bullet points optimizer":
      "Enhance your resume with action verbs framing accomplishment-driven bullet points.",
    "Phrase Suggestions":
      "Provides industry-specific phrases to tailor your resume to desired roles.",
    "Job Description Matcher":
      "Tailors your resume to align with specific job requirements.",
    "Grammar Checker":
      "A grammar and spelling checker to ensure your resume is error-free.",
    "Career Advisor":
      "Offers personalized guidance on career paths based on your resume.",
    "Career Progression":
      "Visualize potential career paths based on your current profile.",
    "Followup Messages":
      "Draft personalized Followup messages for job applications.",
  };

  const displayText = cardTextMap[selectedCard];

  return (
    <Flex direction="column" px={[8, 12, 12]} w="100%" color="white">
      <Flex direction="column" borderBottom="2px solid #994F86" w="100%" pb={4}>
        <Text fontSize="2xl">{selectedCard}</Text>
        <Text>{displayText}</Text>
      </Flex>
      <Flex direction={["column", "row"]} w="100%" mt={6}>
        <Prompt />
        <Output />
      </Flex>
    </Flex>
  );
}

export default Chat;

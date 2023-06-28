import React, { useState, useEffect } from "react";
import { Box, VStack, Text, Button, HStack, SlideFade } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAtom } from "jotai";
import { cardSelectedAtom, outputAtom } from "../Atoms";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate

function CustomDropdown() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const [isOpen, setIsOpen] = useState(true);
  const [output, setOutput] = useAtom(outputAtom);
  const features = [
    "Cover Letter Generator",
    "Keyword Optimizer",
    "Bullet points optimizer",
    "Phrase Suggestions",
    "Job Description Matcher",
    "Industry Experts to follow",
    "Career Advisor",
    "Career Progression",
    "Followup Messages",
  ];
  const location = useLocation(); // Add this line

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedCard(null);
    } else {
      const selectedFromURL = location.pathname.substring(1).replace(/-/g, " ");
      setSelectedCard(selectedFromURL);
    }
  }, [location.pathname]);

  return (
    <Box>
      <Button
        w="100%"
        bg="transparent"
        textAlign="left"
        color="white"
        onClick={() => setIsOpen(!isOpen)}
        _hover={{ bg: "transparent" }}
        fontSize="xl"
        _active={{
          bg: "transparent",
          transform: "none",
          borderColor: "transparent",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        <HStack spacing={32}>
          <Text>Tools</Text>
          <ChevronDownIcon />
        </HStack>
      </Button>
      <SlideFade in={isOpen} offsetY="20px">
        <VStack
          spacing={2}
          bg="transparent"
          align="start"
          color="white"
          borderColor="transparent"
          _focus={{ boxShadow: "none" }}
        >
          {features.map((feature, index) => (
            <Text
              ml={6}
              key={index}
              bg={selectedCard === feature ? "#994F86" : "transparent"}
              fontSize="md"
              p={2}
              px={4}
              borderRadius="20px"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.5s",
              }}
              _active={{
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              onClick={() => {
                setSelectedCard(feature);
                navigate(
                  `/${features[index % features.length].replace(/\s/g, "-")}`
                );
              }}
              cursor="pointer"
            >
              {feature}
            </Text>
          ))}
        </VStack>
      </SlideFade>
    </Box>
  );
}

export default CustomDropdown;

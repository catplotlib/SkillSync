import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import Dropdown from "../Components/Dropdown";
import { useAtom } from "jotai";
import { cardSelectedAtom } from "../Atoms";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate

function LeftSideContent() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Flex
      display={["none", "none", "flex"]}
      py={[2, 8, 12]}
      px={[2, 4, 12]}
      direction="column"
      alignItems="center"
      w="25%"
      minh="105vh"
      h="auto"
      bg="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
      gap={10}
    >
      <Text color="white" fontSize={["md", "3xl", "3xl"]}>
        Resume.ai
      </Text>
      <Flex
        direction="column"
        gap={2}
        w="100%"
        alignItems="center"
        pb={8}
        borderBottom="1px solid #994F86"
      >
        <Button
          bg="#994F86"
          color="white"
          w="80%"
          _hover={{
            bg: "#994F86",
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
          onClick={() => {
            setSelectedCard(null);
            navigate(`/`);
          }}
        >
          Home
        </Button>
        <Button
          bg="transparent"
          color="white"
          border="1px solid #994F86"
          w="80%"
          _hover={{
            bg: "transparent",
            transform: "scale(1.05)",
            transition: "transform 0.5s",
          }}
          _active={{
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
        >
          Your Plan
        </Button>
      </Flex>

      <Dropdown />
    </Flex>
  );
}

export default LeftSideContent;

import React from "react";
import { Flex, Box, Grid, Text } from "@chakra-ui/react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { VscSymbolKeyword } from "react-icons/vsc";
import { MdFormatListBulleted } from "react-icons/md";
import { AiOutlineDatabase, AiOutlineMessage } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { RiEnglishInput } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { useAtom } from "jotai";
import { cardSelectedAtom } from "../Atoms";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate
const icons = [
  <SlEnvolopeLetter size={50} />,
  <VscSymbolKeyword size={50} />,
  <MdFormatListBulleted size={50} />,
  <AiOutlineDatabase size={50} />,
  <ImProfile size={50} />,
  <RiEnglishInput size={50} />,
  <FaChalkboardTeacher size={50} />,
  <GoGraph size={50} />,
  <AiOutlineMessage size={50} />,
];
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

function RightSideContent() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Flex px={[8, 12, 24]} direction="column" pb={[6,2,2]}>
      <Text fontSize={["xl", "xl", "3xl"]} fontWeight={600} color="white" mb={[2,4,6]}>
        Tools
      </Text>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {Array(9)
          .fill()
          .map((_, i) => (
            <Flex
              direction="column"
              key={i}
              bg="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
              h={[24, 32, 48]}
              borderRadius="20px"
              p={4}
              cursor="pointer"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.5s",
              }}
              justify="center"
              alignItems="center"
              gap={2}
              onClick={() => {
                setSelectedCard(features[i % features.length]);
                navigate(
                  `/${features[i % features.length].replace(/\s/g, "-")}`
                );
              }}
            >
              <Box
                h={[12, 16, 28]}
                w={[12, 16, 28]}
                border="3px solid #D488C0"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#D488C0"
              >
                {icons[i % icons.length]}
              </Box>
              <Text color="white">{features[i % features.length]}</Text>
            </Flex>
          ))}
      </Grid>
    </Flex>
  );
}

export default RightSideContent;

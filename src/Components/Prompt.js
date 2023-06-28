import { Box, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  cardSelectedAtom,
  resumeAtom,
  jobDescriptionAtom,
  bulletAtom,
  careerAtom,
  emailAtom,
  outputAtom,
  isLoadingAtom,
} from "../Atoms";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Prompt() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const location = useLocation();
  const [resume, setResume] = useAtom(resumeAtom);
  const [jobDescription, setJobDescription] = useAtom(jobDescriptionAtom);
  const [bullet, setBullet] = useAtom(bulletAtom);
  const [career, setCareer] = useAtom(careerAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [output, setOutput] = useAtom(outputAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

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
    "Industry Experts to follow": ["What career do you want to pursue?"],
    "Career Advisor": [
      "Paste in your Resume",
      "What career do you want to pursue?",
    ],
    "Career Progression": "Paste in your Resume",
    "Followup Messages": [
      "Paste in your Resume",
      "Paste in the Job Description",
    ],
  };
  const differentInput = [
    "Keyword Optimizer",
    "Bullet points optimizer",
    "Phrase Suggestions",
    "Industry Experts to follow",
  ];

  const feature_number = {
    "Cover Letter Generator": 1,
    "Keyword Optimizer": 2,
    "Bullet points optimizer": 3,
    "Phrase Suggestions": 4,
    "Job Description Matcher": 5,
    "Industry Experts to follow": 6,
    "Career Advisor": 7,
    "Career Progression": 8,
    "Followup Messages": 9,
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobapplications/`).then((res) => {
      const matchedData = res.data.find((item) => item.my_id === email);
      if (matchedData) {
        setResume(matchedData.resume);
        setJobDescription(matchedData.job_description);
        setBullet(matchedData.bullet);
        setCareer(matchedData.career);
        setEmail(matchedData.my_id);
      }
    });
  }, []);

  const data = {
    my_id: email,
    feature_number: feature_number[selectedCard],
    resume: resume,
    job_description: jobDescription,
    career: career,
    bullet: bullet,
  };

  const handleOnClick = () => {
    // console.log(data);
    setIsLoading(true);
    // First, get all job applications
    axios
      .post(`http://localhost:8000/api/jobapplications/`, data)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        axios.get(`http://localhost:8000/api/jobapplications/`).then((res) => {
          // Find the job application with the matching email
          const jobApplication = res.data.find(
            (entry) => entry.my_id === email
          );

          // If a matching job application is found, remember the ID
          if (jobApplication) {
            console.log(jobApplication.id);

            // Now that we have the ID, we can make a POST request to the process_feature endpoint
            return axios
              .post(
                `http://localhost:8000/api/jobapplications/${jobApplication.id}/process_feature/`,
                data
              )
              .then((res) => {
                console.log(
                  `http://localhost:8000/api/jobapplications/${jobApplication.id}/process_feature/`
                );
                return axios.get(
                  `http://localhost:8000/api/jobapplications/${jobApplication.id}/process_feature/`
                );
              })
              .then((res) => {
                console.log(res.data.result);
                setOutput(res.data.result);
                setTimeout(() => {
                  setIsLoading(false);
                }, 1000);
              })
              .catch((error) => {
                setIsLoading(false);
                if (error.response) {
                  console.log(error.response.data);
                } else {
                  console.log(error.message);
                }
              });
          } else {
            // If no matching job application is found, throw an error
            throw new Error(`No job application found for email: ${email}`);
          }
        });
      });
  };

  const handleResumeChange = (e) => setResume(e.target.value);
  const handleJobDescriptionChange = (e) => setJobDescription(e.target.value);
  const handleBulletChange = (e) => setBullet(e.target.value);
  const handleCareerChange = (e) => setCareer(e.target.value);

  let value, handleChange;

  if (differentInput.includes(selectedCard)) {
    if (selectedCard === "Keyword Optimizer") {
      value = jobDescription;
      handleChange = handleJobDescriptionChange;
    } else if (selectedCard === "Bullet points optimizer") {
      value = bullet;
      handleChange = handleBulletChange;
    } else if (selectedCard === "Phrase Suggestions") {
      value = career;
      handleChange = handleCareerChange;
    } else if (selectedCard === "Industry Experts to follow") {
      value = career;
      handleChange = handleCareerChange;
    } else {
      value = "";
      handleChange = null;
    }
  } else {
    value = resume;
    handleChange = handleResumeChange;
  }

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
          onClick={handleOnClick}
        >
          Generate
        </Button>
      </Flex>
      <Textarea
        value={value}
        onChange={handleChange}
        w="90%"
        h="auto"
        minH="40vh"
        backgroundImage="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
        mt={4}
        autoFocus
        size="auto"
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
            value={
              selectedCard === "Job Description Matcher" ||
              selectedCard === "Followup Messages"
                ? jobDescription
                : selectedCard === "Career Advisor"
                ? career
                : ""
            }
            onChange={
              selectedCard === "Job Description Matcher" ||
              selectedCard === "Followup Messages"
                ? handleJobDescriptionChange
                : selectedCard === "Career Advisor"
                ? handleCareerChange
                : null
            }
            w="100%"
            h="auto"
            minH="20vh"
            backgroundImage="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
            mt={4}
            size="auto"
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

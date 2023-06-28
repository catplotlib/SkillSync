import React from "react";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { loginAtom, access_tokenAtom, emailAtom, outputAtom ,nameAtom} from "../Atoms";
import { useAtom } from "jotai";

function Home() {
  const [loginn, setLogin] = useAtom(loginAtom);
  const [pic, setPic] = useAtom(access_tokenAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [name, setName] = useAtom(nameAtom);

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // setAccessToken(tokenResponse.access_token);
      axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setName(response.data.picture);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
      axios.get(`http://localhost:8000/api/jobapplications/`).then((res) => {
        let userExists = res.data.some((application) => {
          return application.my_id === email;
        });

        const data = {
          my_id: email,
          feature_number: 1,
          resume: "",
          job_description: "",
          career: "",
          bullet: "",
        };
        if (!userExists) {
          axios
            .post(`http://localhost:8000/api/jobapplications/`, data)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
      navigate("/");
      setLogin(true);
    },
  });

  return (
    <Flex direction="column" alignItems="center" w="100%">
      <Navbar />
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        w="90vw"
        mt={[24]}
        align={["center", "flex-start"]}
      >
        <Flex
          w={["90%", "60%"]}
          direction="column"
          gap={12}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          <Text color="white" fontSize={["3xl", "5xl"]} fontWeight={600}>
            AI is revolutionizing the job market. Harness its power for your
            benefit.
          </Text>

          <Flex display={["flex", "none"]}>
            <Flex
              border="1px solid #D820AA"
              w={[250, 300]}
              h={[300, 350]}
              background="linear-gradient(90deg, #68237d 0%, #1a2649 100%)"
              borderRadius={20}
              justify="center"
              // alignItems="center"
              p={6}
              direction="column"
              alignItems="center"
              gap={6}
            >
              <LuBrainCircuit size={150} color="#90278E " />
              <Flex direction="column" gap={2} w="80%">
                <Button
                  bg="linear-gradient(90deg, #3398bf 0%, #990f93 100%)"
                  color="white"
                  _hover={{
                    bg: "linear-gradient(90deg, #3398bf 0%, #990f93 100%)",
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
                  onClick={() => login()}
                  cursor="pointer"
                >
                  Get Started
                </Button>

                <Button
                  bg="hover"
                  border="1px solid white"
                  color="white"
                  _hover={{
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
                  cursor="pointer"
                >
                  Pricing
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Text color="white" fontSize={["sm", "md", "xl"]} fontWeight={200}>
            Speed up your resume creation process with our suite of AI-powered
            tools.
          </Text>
          <Button
            w={["70%", "20%"]}
            bg="linear-gradient(90deg, #3398bf 0%, #990f93 100%)"
            color="white"
            _hover={{
              bg: "linear-gradient(90deg, #3398bf 0%, #990f93 100%)",
              transform: "scale(1.05)",
              transition: "transform 0.5s",
            }}
            // fontSize="xl"
            _active={{
              bg: "transparent",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            // onClick={handleGetStartedClick}
            onClick={() => login()}
          >
            Get Started
          </Button>

          <Flex mt={[4]} gap={6} mb={[12]}>
            <a href="https://github.com/catplotlib/SkillSync" target="_blank">
              <Flex
                alignItems="center"
                gap={3}
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.5s",
                }}
                cursor="pointer"
              >
                <FaGithub size={32} color="white" />
                <Text color="white" fontSize={["sm", "md"]} fontWeight={200}>
                  Github
                </Text>
              </Flex>
            </a>
            <a href="https://twitter.com/catplotlib" target="_blank">
              <Flex
                alignItems="center"
                gap={3}
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.5s",
                }}
                cursor="pointer"
              >
                <FaTwitter size={32} color="white" />
                <Text color="white" fontSize={["sm", "md"]} fontWeight={200}>
                  Twitter
                </Text>
              </Flex>
            </a>
          </Flex>
        </Flex>

        <Flex w="30%" display={["none", "flex"]}>
          <Flex
            border="1px solid #D820AA"
            w={[100, 200, 300]}
            h={[150, 250, 350]}
            background="linear-gradient(90deg, #68237d 0%, #1a2649 100%)"
            borderRadius={20}
            justify="center"
            // alignItems="center"
            p={6}
            direction="column"
            alignItems="center"
            gap={6}
          >
            <LuBrainCircuit size={150} color="#90278E " />
            <Flex direction="column" gap={2} w="80%">
              <Button
                bg="linear-gradient(90deg, #3398bf 0%, #990f93 100%)"
                color="white"
                _hover={{
                  bg: "linear-gradient(90deg, #3398bf 0%, #990f93 100%)",
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
                // onClick={handleGetStartedClick}
                onClick={() => login()}
              >
                Get Started
              </Button>
              <Button
                bg="hover"
                border="1px solid white"
                color="white"
                _hover={{
                  // bg: "linear-gradient(90deg, #3398bf 0%, #990f93 100%)",
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
                Pricing
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;

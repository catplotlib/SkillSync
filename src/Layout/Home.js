import React from "react";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { loginAtom, profileAtom } from "../Atoms";
import { useAtom } from "jotai";
function Home() {
  const [loginn, setLogin] = useAtom(loginAtom);
  const [profile, setProfile] = useAtom(profileAtom);

  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      navigate("/dashboard");
      setLogin(true);
    },
  });


  const [dataa, setData] = useState();
  const data = {
    my_id: 1,
    feature_number: 8,
    resume: ` Puja Chaudhury
    Boston | chaudhury.p@northeastern.edu | linkedin | +18573132855 | pujachaudhury.in | Technical Blog
    As a Software Engineer with 2 years under my belt, I've mastered Python and cultivated a deep passion for Data Science, backed by a solid foundation in Machine Learning. My contributions to the field include 2 published papers at IEEE conferences, 15+ Technical Blogs contributions during my internships and numerous open source projects in the field of Image Processing, Natural Language Processing and Data analysis.
    Skills
    Programming Languages: Python, C++, R, Javascript, Matlab, Typescript
    Data Science Tools: SQL, Jupyter Notebook, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Matplotlib, Seaborn,PowerBI, Excel,, AWS, Azure, Docker`,

    job_description: `The Factory Software team is at the forefront of building a consistent and distributed computing environment for the manufacturing world at Tesla. This team is responsible for building a supporting infrastructure for Tesla’s future products and to enable our manufacturing operations to grow at ludicrous speeds. Tesla is seeking a Front-End Software Engineer to join our team's mission in building the next generation of manufacturing solutions.`,
    career: `Software Engineer`,
    // Add other fields needed for a JobApplication, like 'resume', 'job_description', etc.
  };
  const handleOnClick = () => {
    axios.post(`http://localhost:8000/api/jobapplications/`, data);
  };
  // useEffect(() => {
  //   axios
  //     .post(
  //       `http://localhost:8000/api/jobapplications/1/process_feature/`,
  //       data
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //       console.log(response.data.result); // This will log the response data in your console.
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

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
            <Flex
              alignItems="center"
              gap={3}
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.5s",
              }}
            >
              <FaGithub size={32} color="white" />
              <Text color="white" fontSize={["sm", "md"]} fontWeight={200}>
                Github
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              gap={3}
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.5s",
              }}
            >
              <FaTwitter size={32} color="white" />
              <Text color="white" fontSize={["sm", "md"]} fontWeight={200}>
                Twitter
              </Text>
            </Flex>
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

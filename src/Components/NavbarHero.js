import React from "react";
import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  cardSelectedAtom,
  loginAtom,
  outputAtom,
  access_tokenAtom,
  nameAtom
} from "../Atoms";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const [login, setLogin] = useAtom(loginAtom);
  const [output, setOutput] = useAtom(outputAtom);
  const [pic, setPic] = useAtom(access_tokenAtom);
  const [name, setName] = useAtom(nameAtom);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      googleLogout();
      setLogin(false);
      navigate("/");
    } catch (error) {
      console.log("Logout Failed", error);
    }
  };
  console.log(name);
  return (
    <Flex
      bgColor="transparent"
      h={{ base: "16vh", md: "12vh" }}
      w={{ base: "100vw", md: "30vw" }}
      justifyContent={{ base: "center", md: "flex-end" }}
      alignItems="center"
      p={{ base: 2, md: 6 }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        direction={"row"}
        gap={[2, 4, 4]}
        alignItems="center"
        justify="center"
      >
        <Image
          borderRadius="full"
          boxSize="10"
          src={name}
          alt="Profile picture"
          mb={{ base: 4, md: 0 }}
        />
        {/* <Text>Hi {name}</Text> */}
        <Button
          background="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
          color="white"
          borderRadius="20px"
          fontSize={{ base: "sm", md: "md" }}
          px={6}
          w={{ base: "40%", md: "auto" }}
          mb={{ base: 4, md: 0 }}
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
            setSelectedCard(null);
            setOutput(null);
            navigate(`/`);
          }}
        >
          Home
        </Button>
        <Button
          background="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), rgba(155, 155, 155, 0.1))"
          color="white"
          borderRadius="20px"
          fontSize={{ base: "sm", md: "md" }}
          px={6}
          w={{ base: "40%", md: "auto" }}
          mb={{ base: 4, md: 0 }}
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
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;

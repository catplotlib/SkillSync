import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import NavbarHero from "../Components/NavbarHero";
import LeftSideContent from "../Components/LeftSideContent";
import RightSideContent from "../Components/RightSideContent";
import Chat from "../Components/Chat";
import { useAtom } from "jotai";
import { cardSelectedAtom, loginAtom } from "../Atoms";
import { useNavigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function Gpt() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const [login] = useAtom(loginAtom);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!login && location.pathname !== "/") {
      navigate("/");
    }
  }, [login, navigate, location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex direction="row">
      <LeftSideContent />
      <Flex direction="column" justify="flex-start" flexGrow={1}>
        <Flex justify="flex-end">
          <NavbarHero />
        </Flex>
        <Chat />
      </Flex>
    </Flex>
  );
}

export default Gpt;

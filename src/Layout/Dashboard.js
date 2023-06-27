import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import NavbarHero from "../Components/NavbarHero";
import LeftSideContent from "../Components/LeftSideContent";
import RightSideContent from "../Components/RightSideContent";
import Chat from "../Components/Chat";
import { useAtom } from "jotai";
import { cardSelectedAtom, loginAtom } from "../Atoms";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
function Dashboard() {
  const [selectedCard, setSelectedCard] = useAtom(cardSelectedAtom);
  const navigate = useNavigate();
  const [login] = useAtom(loginAtom);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // This will clear the timeout if the component unmounts before the timeout is over
  }, [login, navigate]);

  return isLoading ? (
    <Flex justify="center" alignItems="center" h="100vh">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#994F86"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Flex> // replace this with your loading screen
  ) : (
    <Flex direction="row">
      <LeftSideContent />
      <Flex direction="column" justify="flex-start" flexGrow={1}>
        <Flex justify="flex-end">
          <NavbarHero />
        </Flex>
        {selectedCard == null ? <RightSideContent /> : <Chat />}
      </Flex>
    </Flex>
  );
}

export default Dashboard;

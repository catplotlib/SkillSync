import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      bgColor="transparent"
      h={"12vh"} // Adjusted heights
      w="95vw"
      justifyContent="space-between"
      alignItems="center"
      p={[2, 4, 6]} // Adjusted horizontal padding
      direction={["column", "row"]}
    >
      <Text color="white" fontSize={["4xl"]}>
        SkillSync.ai
      </Text>
      {/* <Flex direction={["row"]} gap={[12, 6]}>
        <Text color="white">Follow</Text>
        <Text color="white">Pricing</Text>
        <Text color="white">Sign In</Text>
      </Flex> */}
    </Flex>
  );
}

export default Navbar;

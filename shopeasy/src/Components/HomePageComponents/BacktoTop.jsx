import { Button, Stack } from "@chakra-ui/react";
import {  ChevronUpIcon } from "@chakra-ui/icons";

import React from "react";

const BacktoTop = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Button
      onClick={backToTop}
      leftIcon={<ChevronUpIcon fontSize={"2rem"} />}
      bg="#ABC72C"
      variant="solid"
      _hover={{ bg: "#68D391" }}
      p={"1.9rem 1.6rem"}
      borderRadius={"none"}
      mb={5}
    >
      BACK TO TOP
    </Button>
  );
};

export default BacktoTop;

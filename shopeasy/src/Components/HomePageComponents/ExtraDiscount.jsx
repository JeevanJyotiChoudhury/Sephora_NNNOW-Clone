import React from "react";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

const ExtraDiscount = ({data}) => {
  return (
    <Box w={"90%"} m={"20px auto"} >
      <Flex justify="space-between" gap={5}>
        {data.map((elem) => {
          return (
            <Box
              _hover={{ cursor: "pointer" }}
              w="25%"
            >
              <Image src={elem.image} alt="" />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ExtraDiscount;

import React from "react";
import extradiscount_data from "../../db.json";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

const ExtraDiscount = () => {
  let extradiscountdata = extradiscount_data.extra_discount;
  return (
    <Box w={"90%"} m={"20px auto"} >
      <Flex justify="space-between">
        {extradiscountdata.map((elem) => {
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

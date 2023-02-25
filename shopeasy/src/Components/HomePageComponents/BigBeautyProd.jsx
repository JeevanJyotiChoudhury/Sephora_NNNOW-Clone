import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const BigBeautyProd = ({data}) => {
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((elem) => {
          return (
            <GridItem _hover={{ cursor: "pointer" }}>
              <Image src={elem.image} alt="" />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BigBeautyProd;

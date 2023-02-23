import React from "react";
import bigbeautyprod_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const BigBeautyProd = () => {
  let bigbeautyproddata = bigbeautyprod_data.big_beauty_prod;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {bigbeautyproddata.map((elem) => {
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

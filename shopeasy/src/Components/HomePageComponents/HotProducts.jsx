import React from "react";
import cominghotprod_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const HotProducts = () => {
  let cominghotproddata = cominghotprod_data.coming_hot_prod;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(4, 1fr)">
        {cominghotproddata.map((elem) => {
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

export default HotProducts;

import React from "react";
import extradiscount_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const ExtraDiscount = () => {
  let extradiscountdata = extradiscount_data.extra_discount;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(4, 1fr)">
        {extradiscountdata.map((elem) => {
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

export default ExtraDiscount;

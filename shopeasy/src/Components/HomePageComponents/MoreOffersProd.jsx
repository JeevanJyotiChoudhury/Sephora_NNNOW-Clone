import React from "react";
import moreoffersprod_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const MoreOffersProd = () => {
  let moreoffersproddata = moreoffersprod_data.more_offers_prod;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(4, 1fr)">
        {moreoffersproddata.map((elem) => {
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

export default MoreOffersProd;

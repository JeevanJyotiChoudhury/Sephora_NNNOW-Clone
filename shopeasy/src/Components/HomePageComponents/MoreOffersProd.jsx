import React from "react";
import moreoffersprod_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const MoreOffersProd = () => {
  let moreoffersproddata = moreoffersprod_data.new_on_the_block_data;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
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

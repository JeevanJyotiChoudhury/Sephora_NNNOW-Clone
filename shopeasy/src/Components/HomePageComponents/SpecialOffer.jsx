import React from "react";
import { Box, Image } from "@chakra-ui/react";

const SpecialOffer = ({ data }) => {
  console.log(data);
  return (
    <Box w={"90%"} m={"auto"}>
      <Box>
        {data.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
    </Box>
  );
};

export default SpecialOffer;

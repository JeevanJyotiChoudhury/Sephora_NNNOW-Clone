import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

const CustomerTestimonials = ({data}) => {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      focusOnSelect: true,
    };
  return (
    <Box  w="90%" m= "20px auto">
      <Slider {...settings}>
        {data.map((el) => {
          return (
            <Box _hover={{ cursor: "pointer" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "90%", height: "300px" }}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default CustomerTestimonials;

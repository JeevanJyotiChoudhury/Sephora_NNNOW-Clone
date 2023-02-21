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
    <div style={{ width: "80%", margin: "auto" }}>
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
    </div>
  );
};

export default CustomerTestimonials;

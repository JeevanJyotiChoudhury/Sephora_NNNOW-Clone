import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bankslider_data from "../../db.json";
import { Box } from "@chakra-ui/react";

const BankSlider = () => {
    let banksliderdata = bankslider_data.bank_slider;
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      focusOnSelect: true,
    };
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Slider {...settings}>
        {banksliderdata.map((el) => {
          return (
            <Box _hover={{ cursor: "pointer" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "100%", height: "70px" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default BankSlider;

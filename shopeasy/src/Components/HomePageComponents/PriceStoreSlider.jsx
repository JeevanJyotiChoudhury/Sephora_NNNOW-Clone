import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pricestoreprod_data from "../../db.json";
import { Box } from "@chakra-ui/react";

const PriceStoreSlider = () => {
    let pricestoreproddata = pricestoreprod_data.price_store_prod;
    var settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      focusOnSelect: true,
    };
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {pricestoreproddata.map((el) => {
          return (
            <Box _hover={{ cursor: "pointer" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "100%", height: "250px" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default PriceStoreSlider;

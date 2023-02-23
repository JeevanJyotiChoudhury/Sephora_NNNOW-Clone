import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider_data from "../../db.json";
import { Box, Img } from "@chakra-ui/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "peach" }}
      onClick={onClick}
    />
  );
}

const Topslider = () => {
  let topData = Slider_data.top_slider;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    focusOnSelect: true,
  };
  return (
    <Box  w="90%" m= "20px auto" >
      <Slider {...settings}>
        {topData.map((el) => {
          return (
            <Box _hover={{ cursor: "pointer" }}>
              <Img
                src={el.image}
                alt=""
                w="100%" h="450px"
              />
            </Box>
          )
        })}
      </Slider>
    </Box>
  );
};

export default Topslider;

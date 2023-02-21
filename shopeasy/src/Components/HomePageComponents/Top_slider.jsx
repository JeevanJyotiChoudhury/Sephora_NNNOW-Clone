import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider_data from "../../db.json";
import { Box } from "@chakra-ui/react";

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
    dots: true,
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
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {topData.map((el) => {
          return (
            <Box _hover={{ cursor: "pointer" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "100%", height: "450px" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default Topslider;

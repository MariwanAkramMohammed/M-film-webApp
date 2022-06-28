import React, { useState } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./slider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MoveisSelect } from "../../Redux/AllDatas/ALLDataSelector";

import ShowItem from "../ShowItem/ShowItem";
const SliderPage = ({ movies }) => {
  // real data
  const { items } = movies;
  const [ImageIndex, setImageindex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight className="icon" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft className="icon" />
      </div>
    );
  };

  const Setting = {
    dots: true,

    centerPadding: "0px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyload: true,

    variableWidth: true,
    slidesToShow: 3,
    centerMode: true,

    Infinite: true,
    lazyload: true,
    speed: 1200,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageindex(next);
    },
  };

  return (
    <div className="SliderPage">
      <Slider {...Setting}>
        {items
          .filter((ele, ind) => ind < 4)
          .map((element, index) => (
            <div
              className={ImageIndex === index ? "slide activeSlide" : "slide"}
            >
              <ShowItem key={index} item={element} />
            </div>
          ))}
      </Slider>
    </div>
  );
};
const mapstatetoProps = createStructuredSelector({
  movies: MoveisSelect,
});
export default connect(mapstatetoProps)(SliderPage);

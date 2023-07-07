"use client";

import Slider from "react-slick";
import Title from "../shared/title";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import "./latestArticle.css";
import ItemArticle from "../ItemArticle";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton";
function LatestArticle() {
  const listLater = useSelector((state: any) => state.FILM.listLater);

  const customeSlider = useRef(null);
  const previous = () => {
    (customeSlider.current as any)?.slickPrev();
  };
  const next = () => {
    (customeSlider.current as any)?.slickNext();
  };
  let settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="LatestArticle">
      <div className="container">
        <div className="body">
          <div className="top">
            <Title>LatestArticle</Title>
            <div className="action">
              <button className="btn" onClick={previous}>
                <GrLinkPrevious className="icon" />
              </button>
              <button className="btn" onClick={next}>
                <GrLinkNext className="icon" />
              </button>
            </div>
          </div>
          <div className="list-movie">
            {listLater.length > 0 && (
              <Slider ref={customeSlider} {...settings}>
                {listLater.map((item: Object, index: any) => {
                  return <ItemArticle key={index} data={item} />;
                })}
              </Slider>
            )}

            {listLater.length === 0 && (
              <Slider ref={customeSlider} {...settings}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestArticle;

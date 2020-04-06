import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideView.css";

const photos = [
  {
    name: "Karrie",
    url: "./assets/firstSlider.png",
    id: 1
  },
  {
    name: "Aldous",
    url: "./assets/secondSlider.png",
    id: 2
  },
  {
    name: "Claude",
    url: "./assets/thirdSlider.png",
    id: 3
  }
];

class SlideView extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {photos.map(photo => {
            return (
              <div key={photo.id}>
                <div className="slider-header">
                  <p> What is Mobile Legend: Bang bang ?</p>
                </div>
                <img width="100%" height="100%" src={photo.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SlideView;

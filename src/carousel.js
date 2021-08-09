import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

import React from "react";
import Slider from "react-slick";

export function SimpleSlider() {
  
    const settings = {
      focusOnSelect: true,
      className: "center",
      centerMode: true,
      arrows: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      infinity: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="default">
            <div className="valorantStat">
            <h1 className="description">Stat Tracker for Valorant</h1>
            </div>
          
          </div>
          <div className="default">
            <div className="chess">
            <h1 className="description">Chess Engine</h1>
            </div>

          </div>
          <div className="default">
            <div className="league">
            <h1 className="description">Stat Tracker for League</h1>

            </div>

          </div>
          <div className="default">
            <div className="game">
            <h1 className="description">Pygame Coming Soon</h1>
            </div>

          </div>
          <div className="default">
            <div className="code">
            <h1 className="description">AI project In The Works</h1>
            </div>
          </div>
        
        </Slider>
      </div>
    );
  
}

import React from 'react'
import { Container } from "react-bootstrap";

import  MainCard  from "../../mainCard/MainCard";
import { MySwiper }  from "../../MySwiper/MySwiper";
import { mainSliderData } from "../../../Data/DataHome"

const MainSlider = () => {
 
  return (
    <div className="main-slider">
      <Container>
        <MySwiper
          items={mainSliderData}
          direction="vertical"
          name="mainSlider"
          speed={1000}
          delay={2000}
          spaceBetween={1}
        >
          <MainCard />
        </MySwiper>
      </Container>
    </div>
  );
};

export default MainSlider;


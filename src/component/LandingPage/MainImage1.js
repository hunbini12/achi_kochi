import { Carousel } from "antd";
import React from "react";
import a2 from "./main_img/가을.jpg";
import a3 from "./main_img/겨울.jpg";
import a1 from "./main_img/봄.jpg";
import t1 from "./main_img/여행지1.jpeg";
import t2 from "./main_img/여행지2.jpg";
import t3 from "./main_img/여행지3.jpg";

const images = [
  { src: t1, alt: "여행 지역", label: "여행 지역" },
  { src: t2, alt: "여행지 추천", label: "여행지 추천" },
];

const carouselImages = [
  { src: a1, alt: "봄 여행지", label: "봄 여행지" },
  { src: t3, alt: "여름 여행지", label: "여름 여행지" },
  { src: a2, alt: "가을 여행지", label: "가을 여행지" },
  { src: a3, alt: "겨울 여행지", label: "겨울 여행지" },
];

const ImageItem = ({ src, alt, label }) => (
  <div style={{ width: "450px", position: "relative" }}>
    <a href="/" style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          display: "block",
          width: "450px",
          height: "450px",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            width: "auto",
            height: "100%",
            borderRadius: "2%",
          }}
        />
        <em
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            zIndex: "1",
            fontSize: "50px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {label}
        </em>
      </div>
    </a>
  </div>
);

const CarouselItem = ({ src, alt, label }) => (
  <div>
    <a href="/" style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          display: "block",
          width: "450px",
          height: "450px",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            width: "auto",
            height: "100%",
            borderRadius: "2%",
          }}
        />
        <em
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            zIndex: "1",
            fontSize: "50px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {label}
        </em>
      </div>
    </a>
  </div>
);

const MainImage1 = () => {
  return (
    <div style={{ width: "100%", position: "relative", height: "450px" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {images.map((image, index) => (
          <ImageItem key={index} {...image} />
        ))}
        <div style={{ width: "450px", position: "relative" }}>
          <Carousel autoplay>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} {...image} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MainImage1;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import main_img1 from "./main_img/날씨.jpg";
import main_img2 from "./main_img/준비물.png";
import main_img3 from "./main_img/축제1.jpg";

const images = [
  { index: 1, src: main_img1, alt: "날씨 / 후기", label: "날씨/후기" },
  { index: 2, src: main_img2, alt: "준비물 / 꿀팁", label: "준비물/꿀팁" },
  { index: 3, src: main_img3, alt: "시즌 축제", label: "시즌 축제" },
];

const MainImage2 = () => {
  const [hover, sethover] = useState(-1);

  const handleMouseEnter = (num) => {
    sethover(num);
    console.log(num);
  };

  const handleMouseLeave = () => {
    sethover(-1);
  };
  const ImageItem = ({ src, alt, label, index }) => (
    <div style={{ width: "450px", position: "relative" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            display: "block",
            width: "450px",
            height: "225px",
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
              filter: hover === index ? "brightness(0.9)" : "brightness(1)",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
          <em
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "flex",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
              fontSize: "40px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {label}
          </em>
        </div>
      </Link>
    </div>
  );
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: "225px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <ImageItem key={index} {...image} /> // 객체 속성을 전개연산자로 전달
      ))}
    </div>
  );
};

export default MainImage2;

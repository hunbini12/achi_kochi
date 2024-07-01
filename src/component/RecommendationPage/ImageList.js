import React from "react";
import theme1 from "./theme_img/가족.jpg";
import theme2 from "./theme_img/친구.jpg";
import theme3 from "./theme_img/연인.jpg";
import theme4 from "./theme_img/혼자.jpg";
import theme5 from "./theme_img/푸드.jpg";
import theme6 from "./theme_img/개.jpg";
import theme7 from "./theme_img/바다위.webp";
import theme8 from "./theme_img/캠핑.png";

const themes = [
  { src: theme1, alt: "가족", label: "가족" },
  { src: theme2, alt: "친구", label: "친구" },
  { src: theme3, alt: "연인", label: "연인" },
  { src: theme4, alt: "나홀로", label: "나홀로" },
  { src: theme5, alt: "푸드", label: "맛집 투어" },
  { src: theme6, alt: "펫 투어", label: "펫 투어" },
  { src: theme7, alt: "바다", label: "바다" },
  { src: theme8, alt: "산", label: "산" },
];

const ThemeItem = (
  { src, alt, label } // 분해할당으로 받음
) => (
  <div style={{ width: "240px", position: "relative" }}>
    <a href="/" style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          display: "block",
          width: "210px",
          height: "210px",
          margin: "0 20px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            left: "50%",
            width: "auto",
            height: "100%",
            transform: "translate(-50%, 0)",
            filter: "brightness(0.7)",
          }}
        />
        <em
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            display: "flex",
            width: "210px",
            height: "210px",
            transform: "translate(-50%, 0)",
            zIndex: "1",
            fontSize: "24px",
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {label}
        </em>
      </div>
    </a>
  </div>
);

const ImageList = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "210px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {themes.map(
          (theme, index) => index < 4 && <ThemeItem key={index} {...theme} /> // 테마 1 ~ 4번째, 전개연산자로 속성값 넘겨준다
        )}
      </div>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "210px",
          marginTop: "120px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {themes.map(
          (theme, index) => index >= 4 && <ThemeItem key={index} {...theme} /> // 테마 5 ~ 8번째
        )}
      </div>
    </>
  );
};

export default ImageList;

import React from "react";
import { Carousel } from "antd";
import t1 from "./main_img/여행지1.jpeg";
import t2 from "./main_img/여행지2.jpg";
import t3 from "./main_img/여행지3.jpg";
import a1 from "./main_img/봄.jpg";
import a2 from "./main_img/가을.jpg";
import a3 from "./main_img/겨울.jpg";

const MainImage1 = () => {
  return (
    <div style={{ width: "100%", position: "relative", height: "450px" }}>
      <ul
        style={{
          position: "relative",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <li style={{ float: "left", width: "450px", position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                position: "relative",
                display: "block",
                width: "450px",
                height: "450px",
              }}
            >
              <img
                src={t1}
                alt="여행 지역"
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
                여행 지역
              </em>
            </span>
          </a>
        </li>
        <li style={{ float: "left", width: "450px", position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                position: "relative",
                display: "block",
                width: "450px",
                height: "450px",
              }}
            >
              <img
                src={t2}
                alt="여행지 추천"
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
                여행지 추천
              </em>
            </span>
          </a>
        </li>
        <li style={{ float: "left", width: "450px", position: "relative" }}>
          <Carousel autoplay>
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    position: "relative",
                    display: "block",
                    width: "450px",
                    height: "450px",
                  }}
                >
                  <img
                    src={a1}
                    alt="봄 여행지"
                    style={{
                      position: "absolute",
                      width: "auto",
                      height: "100%",
                      borderRadius: "2%",
                      filter: "brightness(0.9)",
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
                    봄 여행지
                  </em>
                </span>
              </a>
            </div>
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    position: "relative",
                    display: "block",
                    width: "450px",
                    height: "450px",
                  }}
                >
                  <img
                    src={t3}
                    alt="여름 여행지"
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
                    여름 여행지
                  </em>
                </span>
              </a>
            </div>
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    position: "relative",
                    display: "block",
                    width: "450px",
                    height: "450px",
                  }}
                >
                  <img
                    src={a2}
                    alt="가을 여행지"
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
                    가을 여행지
                  </em>
                </span>
              </a>
            </div>
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    position: "relative",
                    display: "block",
                    width: "450px",
                    height: "450px",
                  }}
                >
                  <img
                    src={a3}
                    alt="겨울 여행지"
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
                    겨울 여행지
                  </em>
                </span>
              </a>
            </div>
          </Carousel>
        </li>
      </ul>
    </div>
  );
};

export default MainImage1;

import React from "react";
import theme1 from "./theme_img/가족.jpg";
import theme2 from "./theme_img/친구.jpg";
import theme3 from "./theme_img/연인.jpg";
import theme4 from "./theme_img/혼자.jpg";
import theme5 from "./theme_img/푸드.jpg";
import theme6 from "./theme_img/개.jpg";
import theme7 from "./theme_img/바다위.webp";
import theme8 from "./theme_img/캠핑.png";

const ImageList = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "210px",
          marginTop: "50px",
        }}
      >
        <ul
          style={{
            position: "relative",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme1}
                  alt="가족"
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
                  가족
                </em>
              </span>
            </a>
          </li>
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme2}
                  alt="친구"
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
                  친구
                </em>
              </span>
            </a>
          </li>
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme3}
                  alt="연인"
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
                  연인
                </em>
              </span>
            </a>
          </li>
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme4}
                  alt="나홀로"
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
                  나홀로
                </em>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "210px",
          marginTop: "120px",
        }}
      >
        <ul
          style={{
            position: "relative",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme5}
                  alt="푸드"
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
                  맛집 투어
                </em>
              </span>
            </a>
          </li>
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme6}
                  alt="펫 투어"
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
                  펫 투어
                </em>
              </span>
            </a>
          </li>
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme7}
                  alt="바다"
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
                  바다
                </em>
              </span>
            </a>
          </li>
          <li style={{ float: "left", width: "240px", position: "relative" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span
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
                  src={theme8}
                  alt="산"
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
                  산
                </em>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ImageList;

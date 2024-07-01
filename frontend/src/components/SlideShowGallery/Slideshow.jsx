import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const spanStyle = {
  padding: "20px",
  background: "efefef",
  color: "#FF0000",
  fontWeight: "bold",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "400px",
  marginTop: "100px",
  borderRadius: "30px",
};

const buttonStyle = {
  alignItems: "center",
  marginTop: "9%",
  width: "30px",
  height: "30px",
  background: "#79797988",
  borderRadius: "40px",
  opacity: "80%",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle, marginLeft: "10px" }}>
      <FontAwesomeIcon className="text-lg" icon={faCaretLeft} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle, marginRight: "10px" }}>
      <FontAwesomeIcon className="text-lg" icon={faCaretRight} />
    </button>
  ),
};

const slideImages = [
  { url: "Slideshow_Resources/Pic_1.jpg", caption: "Slide 1" },
  { url: "Slideshow_Resources/Pic_2.jpg", caption: "Slide 2" },
  { url: "Slideshow_Resources/Pic_3.jpg", caption: "Slide 3" },
  { url: "Slideshow_Resources/Pic_4.png", caption: "Slide 4" },
  { url: "Slideshow_Resources/Pic_5.png", caption: "Slide 5" },
  { url: "Slideshow_Resources/Pic_6.png", caption: "Slide 6" },
  { url: "Slideshow_Resources/Pic_7.jpg", caption: "Slide 7" },
  { url: "Slideshow_Resources/Pic_8.jpg", caption: "Slide 8" },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;

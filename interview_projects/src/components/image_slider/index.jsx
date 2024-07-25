import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setLoading(false);
        setImages(data);
      }
    } catch (e) {
      setErrorMsg(e.msg);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading Data ! Please wait.</div>;
  }
  if (errorMsg) {
    return <div>Error occored ! {errorMsg}</div>;
  }

  console.log({ images });
  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />

      {images && images.length
        ? images.map((image) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;

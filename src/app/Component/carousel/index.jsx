"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CustomImage from "../customImage";

/**
 * Description placeholder
 * @date 05/03/2024 - 15:18:58
 *
 * @param {{ images: any; transitionDelay: any; }} param0
 * @param {*} param0.images
 * @param {*} param0.transitionDelay
 * @returns {*}
 */
const Carousel = ({
  images,
  transitionDelay,
  currentImageIndex,
  setCurrentImageIndex,
  numVisibleImages,
  setNumVisibleImages,
  isMobile,
  setIsMobile,
}) => {
  /**
   * Description placeholder
   * @date 06/03/2024 - 12:29:30
   */
  const handleNextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  /**
   * Description placeholder
   * @date 06/03/2024 - 12:29:35
   */
  const handlePrevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    /**
     * Description placeholder
     * @date 06/03/2024 - 12:16:01
     */
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth < 1500 && window.innerWidth > 1024) {
        setNumVisibleImages(numVisibleImages);
      } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setNumVisibleImages(2);
      } else if (window.innerWidth < 768 && window.innerWidth > 468) {
        setNumVisibleImages(1.2);
      } else if (window.innerWidth <= 468) {
        setNumVisibleImages(1.2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numVisibleImages, setIsMobile, setNumVisibleImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, transitionDelay);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex, transitionDelay]);

  /**
   * Description placeholder
   * @date 06/03/2024 - 12:16:20
   *
   * @returns {{}}
   */
  const renderImages = () => {
    const renderedImages = [];

    for (let i = 0; i < numVisibleImages; i++) {
      const index = (currentImageIndex + i) % images.length;
      const image = images[index];
      renderedImages.push(
        <li
          key={index}
          className={`${numVisibleImages > 1 && "last:absolute"} `}
          style={{
            left: `calc(${(i / numVisibleImages) * 100}% + ${i * 15}px)`,
            width: `calc(${100 / numVisibleImages}%)`,
            zIndex: i < Math.ceil(numVisibleImages) - 1 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <CustomImage
            src={image}
            alt={`Slide ${index + 1}`}
            width={1966}
            height={312}
            borderRadius="1rem"
            sizes="100vw"
          />
        </li>,
      );
    }

    return renderedImages;
  };

  return (
    <>
      <div
        className={`relative ${numVisibleImages > 1 && !isMobile ? "px-7" : isMobile ? "pl-4" : ""}`}
        data-testid="carousel"
      >
        {!isMobile && (
          <button
            className="bg-white absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full p-0.5 opacity-50 shadow-md hover:opacity-100 focus:outline-none"
            onClick={handlePrevSlide}
          >
            <CustomImage
              width={32}
              height={32}
              src="/icons/pagination-default-left.svg"
              alt="prev_arrow"
              sizes="100vw"
            />
          </button>
        )}

        {!isMobile && (
          <button
            className="bg-white absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full p-0.5 opacity-50 shadow-md hover:opacity-100 focus:outline-none"
            onClick={handleNextSlide}
          >
            <CustomImage width={32} height={32} src="/icons/pagination-default.svg" alt="next_arrow" sizes="100vw" />
          </button>
        )}

        <ul className={`relative flex h-full w-full ${isMobile ? "overflow-scroll" : "overflow-hidden"}  gap-4 `}>
          {renderImages()}
        </ul>
      </div>

      <div className="absolute left-1/2 z-20 mt-[-20px] flex -translate-x-1/2 transform items-center">
        {[...Array(Math.ceil(images.length / numVisibleImages)).keys()].map((i) => (
          <span
            key={i}
            className={`text-white mx-1 inline-block h-2 w-2 rounded-full text-center ${
              Math.floor(currentImageIndex / numVisibleImages) === i ? "bg-[#444444]" : "bg-gray-400"
            }`}
            style={{
              width: Math.floor(currentImageIndex / numVisibleImages) === i ? "40px" : "4px",
              height: Math.floor(currentImageIndex / numVisibleImages) === i ? "25px" : "4px",
            }}
          >
            {/* {Math.floor(currentImageIndex / numVisibleImages) === i
              ? `${i + 1} / ${Math.ceil(images.length / numVisibleImages)}`
              : ""} */}
          </span>
        ))}
      </div>
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  transitionDelay: PropTypes.number.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentImageIndex: PropTypes.func.isRequired,
  numVisibleImages: PropTypes.number.isRequired,
  setNumVisibleImages: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  setIsMobile: PropTypes.func.isRequired,
};

export default Carousel;

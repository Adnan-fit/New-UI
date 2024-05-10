"use client";
import Image from "next/image";
import PropTypes from "prop-types";

/**
 * CustomImage component for rendering images with Next.js Image component.
 * @param {object} props - The props object.
 * @param {string} props.src - The URL of the image. Required.
 * @param {string} props.alt - The alternative text for the image. Required.
 * @param {number} props.width - The width of the image in pixels. Required.
 * @param {number} props.height - The height of the image in pixels. Required.
 * @param {string} props.sizes - The sizes attribute for the image. Required.
 * @param {boolean} props.isPriority - If true, the image will be loaded eagerly. Required.
 * @param {number} [props.quality=75] - The quality of the image (0 to 100). Default is 75.
 * @returns {JSX.Element} A React JSX element representing the CustomImage component.
 */
export default function CustomImage({ src, alt, width, height, sizes, isPriority, quality = 75, borderRadius }) {
  const loadingAttribute = isPriority ? "eager" : "lazy";
  return (
    <Image
      layout="responsive"
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={isPriority}
      quality={quality}
      loading={loadingAttribute}
      style={{ borderRadius }}
    />
  );
}
CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPriority: PropTypes.bool.isRequired,
  sizes: PropTypes.string.isRequired,
  quality: PropTypes.number,
  borderRadius: PropTypes.string,
};

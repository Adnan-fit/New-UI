import Image from "next/image";
import PropTypes from "prop-types";

/**
 * Chip component represents a small interactive element.
 * @param {Object} props - The props of the component.
 * @param {string} props.id - The unique identifier for the chip.
 * @param {string} props.content - The text content of the chip.
 * @param {string} [props.startIcon] - The URL of the icon to be displayed at the start of the chip.
 * @param {string} [props.endIcon] - The URL of the icon to be displayed at the end of the chip.
 * @param {Function} [props.onClick] - The function to be called when the chip is clicked.
 * @param {"small" | "medium"} [props.size] - The size of the chip.
 * @param {"filled" | "outlined"} [props.variant] - The variant of the chip.
 * @param {"primary" | "dark" | "error" | "info" | "success" | "warning"} [props.color] - The color of the chip.
 * @param {string} [props.subHeader] - The subheader text of the chip.
 * @returns {JSX.Element} Chip component.
 */
const Chip = ({
  id = "chip-component",
  content,
  startIcon,
  endIcon,
  handleClick,
  color = "primary",
  size = "small",
  variant = "filled",
  subHeader,
  handleClose,
}) => {
  const iconSize = size === "small" ? 12 : 15;
  const cursorType = handleClick ? "cursor-pointer" : "cursor-default";

  /**
   * Gets the CSS class name based on the provided size.
   *
   * @param {string} size - The size for which to retrieve the CSS class.
   *                  Must be either "small", "medium", or any other value.
   * @returns {string} The CSS class name corresponding to the size.
   */
  const getSizeClass = () => {
    let sizeClass = "";
    switch (size) {
      case "small":
        sizeClass = "text-xs p-2";
        break;
      case "medium":
        sizeClass = "text-sm p-2.5";
        break;
      default:
        sizeClass = "text-xs p-2";
        break;
    }

    return sizeClass;
  };

  /**
   * Gets the CSS class name based on the provided color.
   *
   * @param {string} color - The color for which to retrieve the CSS class.
   *                  Must be one of "primary", "dark", "error", "info",
   *                  "success", or "warning". Defaults to "text-gray-500"
   *                  if an invalid color is provided.
   * @returns {string} The CSS class name corresponding to the color.
   */
  const getColorClass = () => {
    const colorClasses = {
      primary: `text-gray-500`,
      dark: "text-black font-medium",
      error: "bg-red-500 text-white",
      info: "bg-yellow-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-orange-500 text-white ",
    };
    return colorClasses[color] || "text-gray-500";
  };

  const defaultClass = `flex gap-1 justify-center items-center whitespace-nowrap border-2 rounded-full ${getColorClass()} ${cursorType} ${getSizeClass()} ${
    subHeader && "flex-col"
  }`;

  /**
   * Gets the CSS class name based on the provided button variant.
   *
   * @param {string} variant - The variant of the button for which to retrieve
   *                             the CSS class. Must be one of "filled" or
   *                             "outlined". Defaults to "outlined" if an
   *                             invalid variant is provided.
   * @returns {string} The CSS class name corresponding to the button variant.
   */
  const getVariantClass = () => {
    let variantClass = "";
    switch (variant) {
      case "filled":
        variantClass = "border-black bg-gray-200";
        break;
      case "outlined":
        variantClass = "border-gray-200";
        break;
      default:
        variantClass = "border-gray-200";
        break;
    }

    return variantClass;
  };

  return (
    <div
      id={id}
      onClick={handleClick}
      className={`${defaultClass} ${getVariantClass()}`}
      data-testid="chip"
    >
      {startIcon && (
        <Image
          src={startIcon}
          alt={`${content}_start_icon`}
          width={iconSize}
          height={iconSize}
        />
      )}
      {content && (
        <span className={subHeader && "font-semibold"}>{content}</span>
      )}
      {subHeader && <span className="font-normal">{subHeader}</span>}
      {endIcon && (
        <Image
          src={endIcon}
          alt={`${content}_end_icon`}
          width={iconSize}
          height={iconSize}
          onClick={handleClose}
        />
      )}
    </div>
  );
};

Chip.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.oneOf([
    "primary",
    "dark",
    "error",
    "info",
    "success",
    "warning",
  ]),
  subHeader: PropTypes.string,
  handleClose: PropTypes.func,
};

export default Chip;

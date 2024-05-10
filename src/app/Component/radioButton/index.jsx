import React from "react";
import PropTypes from "prop-types";

/**
 * RadioButton component for selecting options.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.id - The unique identifier for the radio button.
 * @param {string} props.name - The name of the radio button group.
 * @param {string} props.label - The label text for the radio button.
 * @param {string} props.labelPlacement - The placement of the label relative to the radio button. Possible values: "left", "right", "top", "bottom".
 * @param {string} props.labelColor - The color of the label text.
 * @param {boolean} props.isDisabled - Whether the radio button is disabled.
 * @param {boolean} props.isSpaceBetweenInLabel - Whether to apply space between items in the label.
 * @param {function} props.onClick - The function to be called when the radio button is clicked.
 * @param {boolean} props.isChecked - Whether the radio button is checked.
 * @param {string} props.styles - Additional styles to be applied to the component.
 * @param {function} props.restProps - Additional props to be passed to the input element.
 * @returns {JSX.Element} The RadioButton component.
 */
const RadioButton = ({
  id = "radio",
  name = "",
  label = "",
  labelPlacement = "right",
  labelColor = "",
  isSpaceBetweenInLabel = false,
  isDisabled = false,
  isChecked = false,
  styles = "",
  ...restProps
}) => {
  /**
   * Get label classes based on the label placement.
   * @function getLabelClasses
   * @returns {string} The CSS classes for label placement.
   */
  const getLabelClasses = () => {
    switch (labelPlacement) {
      case "left":
        return "flex-row-reverse";
      case "top":
        return "flex-col-reverse";
      case "bottom":
        return "flex-col";
      default:
        return "";
    }
  };

  const labelClasses = getLabelClasses();
  const className = `flex items-center ${isSpaceBetweenInLabel ? "justify-between" : ""} ${styles || "gap-4 p-4"} ${labelClasses}`;

  const radioButtonStyles = `relative appearance-none w-4 h-4 border border-gray-300 rounded-full
                             cursor-pointer ${isDisabled ? "bg-gray-200" : ""} checked:after:w-2.5 
                             checked:after:h-2.5 checked:after:rounded-full checked:after:absolute
                             checked:border-fnp-300 checked:after:content-[''] checked:after:top-1/2 
                             checked:after:left-1/2 checked:after:-translate-x-2/4 
                             checked:after:-translate-y-2/4 checked:after:bg-fnp-300 checked:after:visible`;

  return (
    <label className={className}>
      <input
        type="radio"
        id={id}
        name={"address"}
        value={name}
        disabled={isDisabled}
        className={radioButtonStyles}
        checked={isChecked}
        {...restProps}
      />

      {label && <span className={`ml-2 cursor-pointer ${labelColor}`}>{label}</span>}
    </label>
  );
};
RadioButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelPlacement: PropTypes.string,
  labelColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSpaceBetweenInLabel: PropTypes.bool,
  isChecked: PropTypes.bool,
  styles: PropTypes.string,
  restProps: PropTypes.func,
};

export default RadioButton;

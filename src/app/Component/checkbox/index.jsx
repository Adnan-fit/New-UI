import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

/**
 * Description placeholder
 * @date 13/03/2024 - 11:41:11
 *
 * @param {{ id?: string; label?: string; labelPlacement?: string; labelColor?: string; isDisabled?: boolean; }} param
 * @param {string} [param.id="checkbox"]
 * @param {string} [param.label=""]
 * @param {string} [param.labelPlacement="right"]
 * @param {string} [param.labelColor=""]
 * @param {boolean} [param.isDisabled=false]
 * @returns
 */
const Checkbox = ({
  id = "checkbox",
  label = "",
  labelPlacement = "right",
  labelColor = "",
  isDisabled = false,
  activeColor = "",
  ...restProps
}) => {
  const [isChecked, setIsChecked] = useState();

  /**
   * Handles the onChange event of the checkbox, toggling the isChecked state.
   * @function
   * @name handleOnChange
   * @returns {void}
   */
  const handleOnChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  /**
   * Get the CSS classes for the label container based on the label placement.
   * @param {string} labelPlacementClass - The label placement class (left, top, bottom).
   * @returns {string} The CSS classes for the label container.
   */
  const getLabelContainerClasses = (labelPlacementClass) => {
    switch (labelPlacementClass) {
      case "left":
        return "flex items-center gap-3 flex-row-reverse";
      case "top":
        return "flex items-center gap-3 flex-col-reverse";
      case "bottom":
        return "flex items-center gap-3 flex-col";
      default:
        return "flex items-center gap-3";
    }
  };

  const checkboxStyles = `relative appearance-none w-5 h-5 border-2 border-gray-300
                        rounded ${
                          isDisabled ? "bg-gray-200" : ""
                        } cursor-pointer
                        checked:border-fnp-300 checked:border-fnp-300
                        checked:bg-fnp-100 
                        checked:after:text-sm checked:after:text-300
                        checked:after:absolute checked:after:top-1/2 checked:after:left-1/2
                        checked:after:-translate-x-2/4 checked:after:-translate-y-2/4`;
  return (
    <label className={`${getLabelContainerClasses(labelPlacement)}`}>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className={checkboxStyles}
        name="checkbox"
        disabled={isDisabled}
        onChange={handleOnChange}
        {...restProps}
      />
      {isChecked && (
        <div className="absolute">
          <Image
            src="/icons/checkbox-icon.svg"
            width={20}
            height={20}
            alt="checkbox-icon"
          />
        </div>
      )}

      {label && (
        <span
          className={`cursor-pointer ${isChecked ? activeColor : labelColor}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelPlacement: PropTypes.string,
  labelColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  activeColor: PropTypes.string,
};

export default Checkbox;

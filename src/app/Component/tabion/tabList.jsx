import React from "react";
import PropTypes from "prop-types";

/**
 * A component representing a list of tabs.
 *
 * @component
 * @param {object} props - The props of the component.
 * @param {ReactNode} props.children - The children elements representing the individual tabs.
 * @param {string} props.className - Additional CSS class names for the tab list.
 * @param {number} props.selected - The index of the currently selected tab.
 * @param {function} props.onChange - A function to set the index of the selected tab.
 * @param {string} props.isActiveStyle - The CSS class name for the active tab style.
 * @returns {JSX.Element} - Returns the JSX element representing the TabList component.
 */
const TabList = ({ children, className = "", selected, onChange, isActiveStyle = "", tabListStyle = "" }) => {
  /**
   * For handling the tab click.
   *
   * @function
   * @param {number} index - The index of the currently selected tab.
   * @returns {void} - Returns void.
   */
  const handleTabClick = (index) => {
    if (index === selected) return;
    onChange(index);
  };

  return (
    <ul className={`${tabListStyle || ""} flex gap-2`} role="tab-list">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          id: index + 1,
          tabIndex: index,
          onClick: () => handleTabClick(index),
          isSelected: index === selected,
          className: `${index === selected ? isActiveStyle || "bg-gray-200" : "transition-all duration-300"} ${className}`,
        });
      })}
    </ul>
  );
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tabListStyle: PropTypes.string,
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isActiveStyle: PropTypes.string,
};

export default React.memo(TabList);

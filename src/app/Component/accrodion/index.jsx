import PropTypes from "prop-types";
import React, { useState } from "react";
import AccrodionTitle from "./accrodionTitle";
import AccrodionContent from "./accrodionContent";

/**
 * Description placeholder
 * @date 01/04/2024 - 14:32:47
 * @param {{ children: any; }} param
 * @param {*} param.children
 * @returns {*}
 */
const Accrodion = ({ items, titleStyles, activeClass, inactiveClass, contentStyles }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  /** */
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="">
          <AccrodionTitle
            activeIndex={activeIndex}
            index={index}
            activeClass={activeClass}
            inactiveClass={inactiveClass}
            styles={titleStyles}
            onClick={handleClick}
          >
            {item.title}
          </AccrodionTitle>
          {activeIndex === index && <AccrodionContent styles={contentStyles}>{item.content}</AccrodionContent>}
        </div>
      ))}
    </div>
  );
};
Accrodion.propTypes = {
  items: PropTypes.array,
  titleStyles: PropTypes.string,
  activeClass: PropTypes.string,
  inactiveClass: PropTypes.string,
  contentStyles: PropTypes.string,
};
export default Accrodion;

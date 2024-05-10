import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Chip from "../../atoms/chip";

/**
 * QuickLinks component renders a list of quick links.
 * @param {Object[]} items - Array of objects containing label and href for each quick link.
 * @returns {JSX.Element} QuickLinks component.
 */
const QuickLinks = ({ items }) => {
  return (
    <div className="my-3 ml-2 flex flex-wrap gap-2">
      {items.map((item, index) => (
        <Link href={item.href} key={index}>
          <Chip id={`chip-${index}`} content={item.label} variant="outlined" size="medium" />
        </Link>
      ))}
    </div>
  );
};

QuickLinks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default QuickLinks;

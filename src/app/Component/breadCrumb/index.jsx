import React from "react";
import PropTypes from "prop-types";

/**
 * Breadcrumb component to display a breadcrumb trail.
 * @param {Object[]} items - An array of objects representing breadcrumb items.
 * @param {string} items[].href - The URL for the breadcrumb item.
 * @param {string} items[].label - The label/text for the breadcrumb item.
 * @param {boolean} [items[].svg] - Optional SVG icon for the breadcrumb item.
 * @returns {JSX.Element} - Breadcrumb component JSX.
 */
const Breadcrumb = ({ items }) => {
  return (
    <div className="mb-4 ml-4">
      <ul className="flex items-center whitespace-nowrap">
        {items.map(({ href, label, svg }, index) => (
          <li key={index} className="inline-flex items-center">
            <a
              href={href}
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
            >
              {label}
              {svg && (
                <svg
                  className="size-5 flex-shrink-0 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      svg: PropTypes.bool,
    }),
  ).isRequired,
};

export default Breadcrumb;

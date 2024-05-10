import React from "react";
import PropTypes from "prop-types";

/**
 * A component representing a panel associated with a tab.
 *
 * @component
 * @param {object} props - The props of the component.
 * @param {ReactNode} props.children - The content of the tab panel.
 * @param {number} props.id - The unique identifier of the tab panel.
 * @param {string} props.className - Additional CSS class names for the tab panel.
 * @returns {JSX.Element} - Returns the JSX element representing the TabPanel component.
 */
const TabPanel = ({ children, id, className = "" }) => {
  return (
    <div role="tab" id={`tab_panel_${id}`} className={className}>
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default React.memo(TabPanel);

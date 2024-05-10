import React from "react";
import PropTypes from "prop-types";
import CustomImage from "./CustomImage";

/**
 * Custom Drawer Component.
 * @param {Object} props - Component props.
 * @param {string} props.position - Position of the drawer ('bottom', 'right', 'bottomRight').
 * @param {boolean} props.isOpen - Boolean indicating whether the drawer is open or closed.
 * @param {function} props.onClose - Function to handle the closing of the drawer.
 * @param {React.ReactNode} props.children - Children elements to be rendered inside the drawer.
 * @returns {JSX.Element} Drawer component.
 */
const Drawer = ({ position, children, isOpen, onClose }) => {
  const positionList = {
    bottom: {
      classes:
        "flex flex-col justify-center fixed bottom-0 left-0 right-0 p-4 bg-white shadow-inner rounded-t-[1.5rem]",
      closeButton: "flex items-center justify-center absolute -top-12 left-[50%] translate-x-[-50%]",
      transform: isOpen ? "translateY(0)" : "translateY(100%)",
    },
    right: {
      classes: "fixed top-0 right-0 h-screen w-[25%] p-4 shadow-lg",
      closeButton: "-ml-[63px] flex items-center justify-center absolute",
      transform: isOpen ? "translateX(0)" : "translateX(100%)",
    },
    bottomRight: {
      classes:
        "flex flex-col justify-center fixed bottom-0 right-[0.9%] max-h-[75rem] w-[23%] p-4 bg-white shadow-inner rounded-t-[1.5rem]",
      closeButton: "flex items-center justify-center absolute -top-12 left-[50%] translate-x-[-50%]",
      transform: isOpen ? "translateY(0)" : "translateY(300%)",
    },
  };

  const { classes, closeButton, transform } = positionList[position];

  /**
   * Handle closing the drawer.
   * @param {Object} event - Event object.
   */
  const handleOnClose = (event) => {
    event.stopPropagation();
    onClose(false);
  };

  /**
   * Handle backdrop click to close the drawer.
   */
  const handleBackDrop = () => {
    if (isOpen) {
      onClose(false);
    }
  };

  return (
    <div id={`${position}_drawer`}>
      {isOpen && (
        <button
          onClick={handleBackDrop}
          className="bg-white fixed inset-0 h-full w-full bg-opacity-60 backdrop-blur-sm"
          data-testid="backdrop"
        />
      )}
      <div style={{ transform, transition: "transform 0.3s ease-in-out" }} className={`bg-white-900 ${classes}`}>
        {isOpen && (
          <button onClick={handleOnClose} className={`h-8 w-8 rounded-full ${closeButton}`} data-testid="close-button">
            <CustomImage
              src="/icons/Cancel_Icon.svg"
              alt="drawer-close"
              width={20}
              height={20}
              sizes="10vw"
              isPriority={false}
            />
          </button>
        )}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  position: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Drawer;

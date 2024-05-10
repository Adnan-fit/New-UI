import React from "react";
import PropTypes from "prop-types";

/**
 * Toast component for displaying toast notifications.
 * @param {Object} props - The props object.
 * @param {string} props.variant - The variant of the toast (info, success, warning, error).
 * @param {string} [props.subHeader=""] - The subheader text for the toast.
 * @param {string} props.header - The header text for the toast.
 * @param {boolean} props.isToast - Flag indicating whether the toast is visible.
 * @param {Function} [props.toastHandler=() => {}] - Function to handle toast events.
 * @param {number} [props.duration=5000] - Duration in milliseconds for which the toast will be displayed.
 * @param {boolean} [props.isLoader=false] - Flag indicating whether to display a loader in the toast.
 * @param {boolean} [props.isDrawer=false] - Flag indicating whether the toast is in a drawer position.
 * @param {boolean} [props.isCloseButton=false] - Flag indicating whether to display a close button in the toast.
 * @returns {JSX.Element|null} The JSX element representing the toast or null if the toast is not visible.
 */
const Toast = ({
  variant,
  subHeader = "",
  header,
  isToast,
  toastHandler = () => {},
  duration = 5000,
  isLoader = false,
  isDrawer = false,
  isCloseButton = false,
}) => {
  const position = isDrawer ? "relative top-80 inset-x-14" : "fixed bottom-36 start-1/2 -translate-x-1/2";

  const toastTimeOut = setTimeout(() => {
    toastHandler(!isToast);
  }, duration);

  /**
   * close handler function to cancel a toast.
   * @returns {void} The JSX element representing the toast or null if the toast is not visible.
   */
  const handleClose = () => {
    if (isToast) {
      toastHandler(!isToast);
      clearTimeout(toastTimeOut);
    }
  };

  const icons = {
    info: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 25" fill="none">
        <path
          d="M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z"
          stroke="#2B65D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 8.5V13.5" stroke="#2B65D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9941 16.5H12.0031" stroke="#2B65D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    success: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 25" fill="none">
        <path
          d="M22 9.5V15.5C22 19.28 20.86 21.35 18.14 22.12C17.26 22.38 16.22 22.5 15 22.5H9C7.78 22.5 6.74 22.38 5.86 22.12C3.14 21.35 2 19.28 2 15.5V9.5C2 4.5 4 2.5 9 2.5H15C20 2.5 22 4.5 22 9.5Z"
          stroke="#34A83C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13L10.339 16.5L17 9.5"
          stroke="#34A83C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    warning: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E5962A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />{" "}
        <line x1="12" y1="8" x2="12" y2="12" /> <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    error: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#D64927">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  };

  /**
 * Get the icon in toast to display as notification icon.
 
 * @param {string} props.variantion - The variantion of the toast (info, success, warning, error).
 * @returns {JSX.Element|null} The JSX element representing the toast or null if the toast is not visible.
 */
  const getIcon = (variantion) => {
    return icons[variantion];
  };

  const variantBorderColors = {
    info: "border-blue-800 bg-blue-50",
    success: "border-green-500 bg-green-50",
    warning: "border-orange-400 bg-orange-50",
    error: "border-red-400 bg-red-50",
  };

  const borderColor = variantBorderColors[variant];

  return (
    isToast && (
      <div
        id={variant}
        className={`${position} bg-white m-2 flex min-h-16 w-full max-w-xs items-center justify-between border border-l-4 p-2 ${borderColor} rounded-md shadow-md`}
        data-testid="toast"
      >
        <div className="flex items-center ">
          <div className="mr-2">{getIcon(variant)}</div>
          <div>
            <p className="font-medium">{header}</p>
            {subHeader && <p className="text-sm">{subHeader}</p>}
          </div>
        </div>
        {isCloseButton && !isLoader ? (
          <button
            type="button"
            onClick={handleClose}
            className="bg-gray-light inline-flex h-4 w-4 items-center justify-center rounded-full p-0.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-1 focus:ring-gray-300"
            data-testid="close-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 13" fill="none">
              <path
                d="M9 9.5L3 3.5"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9.5L9 3.5"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : variant === "info" && isLoader ? (
          <></>
        ) : (
          // any loader
          ""
        )}
      </div>
    )
  );
};
Toast.propTypes = {
  variant: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  header: PropTypes.string.isRequired,
  isCloseButton: PropTypes.bool,
  isToast: PropTypes.bool.isRequired,
  toastHandler: PropTypes.func,
  duration: PropTypes.number,
  isLoader: PropTypes.bool,
  isDrawer: PropTypes.bool,
};

export default Toast;

import PropTypes from "prop-types";
/**
 * Description placeholder
 * @date 01/04/2024 - 14:23:06
 *
 * @returns {*}
 */
const AccrodionTitle = ({
  children,
  index,
  onClick: handleClick,
  activeIndex,
  styles,
  activeClass = "",
  inactiveClass = "",
}) => {
  return (
    <button
      type="button"
      data-testid="accrodion_title"
      onClick={() => handleClick(index)}
      className={`w-full p-2 text-left ${styles} ${activeIndex === index ? activeClass : inactiveClass}`}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={`float-right transform transition duration-200 ${activeIndex === index ? "-rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668"
          stroke="url(#paint0_linear_4694_84225)"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4694_84225"
            x1="7.99997"
            y1="5.9668"
            x2="7.99997"
            y2="10.6985"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#000" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};
AccrodionTitle.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  onClick: PropTypes.func,
  activeIndex: PropTypes.number,
  styles: PropTypes.string,
  activeClass: PropTypes.string,
  inactiveClass: PropTypes.string,
};
export default AccrodionTitle;

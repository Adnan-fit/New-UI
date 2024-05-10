import Image from "next/image";
import PropTypes from "prop-types";

/**
 * Represents a Brick component.
 * @param {Object} props - The props object.
 * @param {string} props.id - The unique identifier for the Brick.
 * @param {string} props.content - The content to be displayed in the Brick.
 * @param {string} props.icon - The URL of the icon to be displayed alongside the content.
 * @param {string} props.contentClass - Additional CSS classes for the content span.
 * @param {string} props.bgColor - Background color of the Brick.
 * @param {string} props.alignment - Alignment of the content within the Brick.
 * @param {function} props.handleClick - Function to be called when the Brick is clicked.
 * @returns {JSX.Element} - The Brick component.
 */
const Brick = ({
  id = "brick-component",
  content,
  icon,
  contentClass = "",
  bgColor,
  alignment = "start",
  handleClick,
}) => {
  const defaultClass = `flex justify-${alignment} py-1 px-2 items-center rounded border-2 ${bgColor}`;

  return (
    <div id={id} className={defaultClass} onClick={handleClick}>
      {icon && <Image src={icon} alt={`${content}_start_icon`} className="p-1" width={24} height={24} />}
      <span className={`font-inter text-xs font-medium leading-[16.1px] ${contentClass}`}>{content}</span>
    </div>
  );
};

Brick.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  id: PropTypes.string,
  contentClass: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(["start", "center", "end"]),
  handleClick: PropTypes.func,
};

export default Brick;

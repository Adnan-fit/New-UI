import PropTypes from "prop-types";
import CustomImage from "../customImage";

/**
 * IconButtonComponent is a button component that displays an icon along with optional text.
 *
 * @param {object} props - The props object.
 * @param {string} [props.label=""] - The optional text label displayed alongside the icon.
 * @param {string} props.buttonVarient - The variant of the button ("icon", "iconWithText", "iconWithTextFilled", "iconWithoutTextFilled", "iconWithTextOutlined").
 * @param {string} props.imageSrc - Url string of image.
 * @param {func} props.handleClick - On click handler function.
 * @returns {JSX.Element} The IconButtonComponent.
 */
const IconButtonComponent = ({ label = "", buttonVarient = "icon", iconSrc = "", handleClick, classes = "" }) => {
  const iconButtonVariants = {
    icon: "bg-white-900 font-medium justify-center w-auto",
    iconWithText: "text-xs bg-white-900 text-primary-green100 font-medium justify-center w-auto",
    iconWithTextFilled: "text-xs bg-green-100 text-primary-green100 font-medium justify-center w-auto",
    iconWithoutTextFilled: "bg-green-100 justify-center w-auto ",
    iconWithTextOutlined:
      "text-xs bg-white border-2 border-primary-green100 text-primary-green100 font-medium justify-center w-auto",
  };

  const colorClass = iconButtonVariants[buttonVarient] || "";

  return (
    <div className={`flex w-full items-center justify-center`}>
      <button type={"button"} className={`py-2 ${colorClass} ${classes}`} onClick={handleClick}>
        <div className="mx-6 ">
          <CustomImage src={iconSrc} width={24} height={24} alt="" sizes="10vw" isPriority={false} />
        </div>
        {buttonVarient !== "icon" && (
          <div className="text-center text-xs font-normal not-italic leading-4">{label}</div>
        )}
      </button>
    </div>
  );
};

IconButtonComponent.propTypes = {
  label: PropTypes.string,
  buttonVarient: PropTypes.string,
  iconSrc: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

export default IconButtonComponent;

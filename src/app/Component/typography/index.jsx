import PropTypes from "prop-types";

/**
 * Typography component renders text with specified styles.
 *
 * @param {Object} props - Component props.
 * @param {string} props.variant - Typography variant (e.g., "h1", "h2", "body1").
 * @param {React.ReactNode} props.children - Content to render inside Typography component.
 * @param {string} [props.classes=""] - Additional classes to apply to Typography component.
 * @param {React.ElementType} props.Tag - HTML tag or custom component to use for Typography.
 * @returns {JSX.Element} - Rendered Typography component.
 */
const Typography = ({ variant, children, classes = "", Tag }) => {
  const variantList = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
    subheading1: "text-lg",
    subheading2: "text-base",
    subheading3: "text-sm",
    subheading4: "text-xs",
    body1: "text-base",
    body2: "text-sm",
    paragraph: "text-base",
    strikethrough: "line-through",
  };
  const variantClass = variantList[variant] || "text-base";

  const finalClass = classes ? `${classes}` : `${variantClass}`;

  return <Tag className={finalClass}>{children}</Tag>;
};

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  Tag: PropTypes.elementType.isRequired,
};

export default Typography;

import PropTypes from "prop-types";
/**
 * 
 */
const AccrodionContent = ({ children, styles }) => {
  return (
    <div className={`bg-white p-2 shadow ${styles}`} data-testid="accrodion_content">
      {children}
    </div>
  );
};
AccrodionContent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string,
};
export default AccrodionContent;

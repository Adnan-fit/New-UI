import PropTypes from "prop-types";
import Typography from "../../atoms/typography";
import CustomImage from "../../atoms/customImage";
import { Fragment } from "react";

/**
 * FooterInfo component renders footer information.
 * @param {Object} props - The props object
 * @param {Array} props.footerInfo - Array containing footer information objects
 * @param {boolean} props.isMobile - is mobile device or not
 * @returns {JSX.Element} FooterInfo component JSX
 */
const FooterInfo = ({ footerInfo, isMobile = false }) => {
  return (
    <div className={`flex w-full ${!isMobile ? "bg-white-900 pb-10 pt-10" : "pb-5 pt-5"}`} data-testid="footer-info">
      {footerInfo.length &&
        footerInfo.map((item, index) => {
          return (
            <Fragment key={item.id}>
              {!isMobile ? (
                <div
                  data-testid="footer-info-item"
                  className={`flex w-1/3 items-start justify-center ${footerInfo.length - 1 !== index ? "border-r border-gray-200" : ""}`}
                >
                  <div className="mr-3">
                    <CustomImage src={`/icons/${item.id}.svg`} width={28} height={24} alt={item.heading} sizes="10vw" />
                  </div>
                  <div>
                    <Typography variant="h6" Tag="h6" classes="font-500 text-16 text-fnp-500 leading-20 mb-1">
                      {item.heading}
                    </Typography>
                    <Typography variant="subheading4" Tag="p" classes="text-12 font-400 text-grey-500 leading-14">
                      {item.subheading}
                    </Typography>
                  </div>
                </div>
              ) : (
                item.id === "safe-and-secure-payments" && (
                  <div className={`flex w-full items-start justify-center`}>
                    <div className="mr-3">
                      <CustomImage
                        src={`../icons/${item.id}.svg`}
                        width={28}
                        height={24}
                        alt={item.heading}
                        sizes="10vw"
                      />
                    </div>
                    <div>
                      <Typography variant="h6" Tag="h6" classes="font-500 text-16 text-fnp-500 leading-20 mb-1">
                        {item.heading}
                      </Typography>
                      <Typography variant="subheading4" Tag="p" classes="text-12 font-400 text-grey-500 leading-14">
                        {item.subheading}
                      </Typography>
                    </div>
                  </div>
                )
              )}
            </Fragment>
          );
        })}
    </div>
  );
};
FooterInfo.propTypes = {
  footerInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMobile: PropTypes.bool,
};
export default FooterInfo;

import Link from "next/link";
import PropTypes from "prop-types";
import Typography from "../../atoms/typography";
import CustomImage from "../../atoms/customImage";

/**
 * this component renders FooterCopyRight.
 * @param {Object} props - The props object
 * @param {Array} props.socialIcons - Array containing footer social Icons List
 * @param {string} props.startYear - this is what when company start
 * @param {object} props.paymentGatewayItems - Array containing footer Banks Icons List
 * @param {boolean} props.isMobile - is mobile device or not
 * @returns {JSX.Element} FooterInfo component JSX
 */
const FooterCopyRight = ({ socialIcons, startYear, paymentGatewayItems, isMobile = false }) => {
  /**
   * Gets the current year.
   * @returns {number} The current year
   */
  const currentYear = () => {
    const currentDate = new Date();
    const fullYear = currentDate.getFullYear();
    return fullYear;
  };

  return (
    <div
      data-testid="footer-copy-right"
      className={`flex w-full items-center justify-between pl-10 pr-10 pt-4 ${!isMobile ? "border-t border-gray-200 pb-4" : "pb-5"}`}
    >
      {socialIcons && (
        <div className={`${!isMobile ? "w-1/3" : "w-full"}`}>
          <ul className={`flex ${!isMobile ? "justify-start" : "justify-center"}`}>
            {socialIcons.map((socialIcon) => {
              return (
                <li className="ml-1 mr-1" key={socialIcon.id}>
                  <Link href={socialIcon.href}>
                    <CustomImage
                      src={`/icons/${socialIcon.id}.svg`}
                      width={24}
                      height={24}
                      alt={socialIcon.id}
                      isPriority={false}
                      sizes="10vw"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {!isMobile && (
        <>
          {" "}
          <div className="w-1/3 text-center">
            <Typography variant="subheading4" Tag="p" classes="text-10 text-grey-500 leading-0 font-500">
              &copy; {startYear}-{currentYear()} fnp.com.All rights reserved.
            </Typography>
          </div>
          {paymentGatewayItems && (
            <div className="w-1/3 text-right">
              <ul className="flex justify-end">
                {paymentGatewayItems.map((item) => {
                  return (
                    <li className="ml-1 mr-1" key={item.id}>
                      <CustomImage
                        src={`/icons/${item.id}.svg`}
                        width={36}
                        height={24}
                        alt={item.id}
                        isPriority={false}
                        sizes="10vw"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};
FooterCopyRight.propTypes = {
  socialIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
  startYear: PropTypes.string.isRequired,
  paymentGatewayItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMobile: PropTypes.bool,
};
export default FooterCopyRight;

import PropTypes from "prop-types";
import Link from "next/link";
import Subscription from "./subscription";
import Typography from "../../atoms/typography";

/**
 * FooterBodyLinks component renders footer information.
 * @param {Object} props - The props object
 * @param {Array} props.footerBodyLinks - Array containing footer information objects
 * @returns {JSX.Element} FooterBodyLinks component JSX
 */
const FooterBodyLinks = ({ footerBodyLinks }) => {
  /**
   * Generates a list of footer links.
   * @param {Array} items - An array of objects representing footer links
   * @param {string} items[].path - The URL path of the link
   * @param {string} items[].linkName - The display text of the link
   * @returns {JSX.Element} List of footer links
   */
  const footerLinks = (items) => {
    return (
      <ul className="text-12 leading-24 text-grey-500">
        {items.length &&
          items.map((linkItem) => {
            return (
              <li key={linkItem.path}>
                <Link href={linkItem.path}>{linkItem.linkName}</Link>
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <>
      {footerBodyLinks.length > 0 ? (
        <div className="flex w-full border-b border-gray-200" data-testid="footer-body-links">
          {footerBodyLinks.map((item) => {
            return (
              <div className="w-1/6 border-r border-gray-200 p-10" key={item.title}>
                <Typography variant="subheading3" Tag="h6" classes="mb-2 text-14 font-500 text-fnp-500 capitalize">
                  {item.title}
                </Typography>
                {footerLinks(item.links)}
              </div>
            );
          })}
          <Subscription />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
FooterBodyLinks.propTypes = {
  footerBodyLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FooterBodyLinks;

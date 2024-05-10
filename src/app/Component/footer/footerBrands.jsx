import Link from "next/link";
import PropTypes from "prop-types";
import CustomImage from "../../atoms/customImage";

/**
 * Description placeholder
 * @date 04/04/2024 - 15:08:12
 *
 * @param {{ brandInfo: any; }} param0
 * @param {*} param0.brandInfo contains brand related info
 * @returns {*}
 */
const FooterBrands = ({ brandInfo }) => {
  return (
    <>
      {brandInfo.length > 0 ? (
        <div
          className="flex w-full items-center justify-center border-b border-gray-200 p-10 text-center"
          data-testid="footer-brands"
        >
          {brandInfo.map((item) => {
            return (
              <div className="ml-5 mr-5" key={item.altTag}>
                <Link href={item.brandUrl} target="_blank">
                  <CustomImage
                    src={item.imageUrl}
                    alt={item.altTag}
                    width={item.width}
                    height={item.height}
                    sizes="100vw"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
FooterBrands.propTypes = {
  brandInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FooterBrands;

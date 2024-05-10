"use client";
import PropTypes from "prop-types";
import FooterInfo from "./footerInfo";
import FooterBodyLinks from "./footerBodyLinks";
import FooterCopyRight from "./footerCopyRight";
import FooterBrands from "./footerBrands";
import { useEffect, useState } from "react";
import desktopIndiaConfig from "../../../utils/desktop";
import isMobile from "../../../utils/common";
import CsrPolicy from "./csrPolicy";

/**
 * Description placeholder
 * @date 05/04/2024 - 13:55:22
 *
 * @param {{ fnpBrandsData: any; }} param0
 * @param {*} param0.fnpBrandsData
 * @returns
 */
const Footer = ({ fnpBrandsData }) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    /**
     * Description placeholder
     * @date 05/04/2024 - 13:55:35
     */
    function handleResize() {
      setIsMobileDevice(isMobile());
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const footerInfo = desktopIndiaConfig.footerInfo;
  const footerBodyLinks = desktopIndiaConfig.footerBodyLinks;
  const socialIcons = desktopIndiaConfig.socialIcons;
  const paymentGatewayItems = desktopIndiaConfig.paymentGatewayItems;

  return (
    <footer role="footer" id="footer" className="flex w-full flex-col border-t border-gray-200 bg-gray-100">
      {footerInfo && <FooterInfo footerInfo={footerInfo} isMobile={isMobileDevice} />}
      {!isMobileDevice && footerBodyLinks && <FooterBodyLinks footerBodyLinks={footerBodyLinks} />}
      {!isMobileDevice && Object.keys(fnpBrandsData).length > 0 && fnpBrandsData?.fnpBrands && (
        <FooterBrands brandInfo={fnpBrandsData?.fnpBrands} />
      )}
      {!isMobileDevice && Object.keys(fnpBrandsData).length > 0 && fnpBrandsData?.csr && (
        <CsrPolicy fnpCSRInfo={fnpBrandsData.csr} />
      )}
      <FooterCopyRight
        isMobile={isMobileDevice}
        socialIcons={socialIcons}
        startYear={desktopIndiaConfig.startYear}
        paymentGatewayItems={paymentGatewayItems}
      />
    </footer>
  );
};
Footer.propTypes = {
  fnpBrandsData: PropTypes.object.isRequired,
};
export default Footer;

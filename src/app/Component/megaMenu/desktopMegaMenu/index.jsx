import React from "react";
import PropTypes from "prop-types";

import MegaMenu from "./megaMenu";

/**
 * Component representing the desktop version of the mega menu.
 *
 * @param {object} props - The props passed to the component.
 * @param {array} props.menuData - The data representing the menu items.
 * @returns {JSX.Element|null} DesktopMenu component.
 */
const Menu = ({ data }) => {
  /**
   * Filters out the first level of menu items.
   *
   * @param {array} data - The array of menu data.
   * @returns {array} The array containing the child categories of the menu data.
   */
  const extractChildCategories = (items) => {
    return items.slice(0, data.length).flatMap((item) => item.childCategoryLists);
  };

  const subMenuItems = extractChildCategories(data);

  return (
    <div className="flex items-center justify-center gap-5 border-y border-gray-100 px-5" data-testid="desktop-menu">
      <MegaMenu menuItems={subMenuItems} />
    </div>
  );
};

Menu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
      productCategoryId: PropTypes.string,
      promo: PropTypes.string,
      childCategoryLists: PropTypes.array,
    }),
  ).isRequired,
};

const DesktopMenu = React.memo(Menu);
export default DesktopMenu;

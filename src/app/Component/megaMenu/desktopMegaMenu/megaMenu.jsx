import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import MenuItems from "./menuItems";
import CustomImage from "../../../atoms/customImage";

/**
 * MegaMenu Component
 * @param {Object} props - The props object
 * @param {Array} props.menuItems - Array of menu items
 * @returns {JSX.Element|null} - Returns the MegaMenu JSX or null if no menu items provided
 */
const MegaMenu = ({ menuItems = [] }) => {
  const [showMenu, setShowMenu] = useState(null);

  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  /**
   * Handles mouse enter event on menu category
   * @param {string} categoryName - The name of the category
   */
  const handleMouseEnter = (categoryName) => {
    setShowMenu(categoryName);
  };

  /**
   *
   * Handles mouse leave event on menu
   */
  const handleMouseLeave = () => {
    setShowMenu(null);
  };

  return menuItems?.map((category) => (
    <nav
      key={category.productCategoryId}
      className="relative flex border-b-2 border-transparent py-2 hover:border-fnp-300"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => handleMouseEnter(category.categoryName)}
      role="nav_menu_items"
      id="nav_menu_items"
    >
      <span className="inline-block cursor-pointer overflow-visible whitespace-nowrap font-inter text-12 text-grey-300 xl:text-14">
        <Link
          href={`${category.productCategoryId}?${category.promo}`}
          className="flex items-center justify-center gap-1"
          role="button"
        >
          <span>{category.categoryName}</span>
          <span
            className={`h-10 w-10 transition-all duration-500  ${showMenu === category.categoryName ? "rotate-180" : "rotate-360"}`}
          >
            <CustomImage src="/icons/navigation-chevron.svg" height={100} width={100} />
          </span>
        </Link>
      </span>
      <div className="fixed left-0 right-0 mx-10 my-7 xl:my-8">
        <div className={`${showMenu === category.categoryName ? "block" : "hidden"}`}>
          {<MenuItems childCategory={category.childCategoryLists} />}
        </div>
      </div>
    </nav>
  ));
};

MegaMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      categoryName: PropTypes.string,
      productCategoryId: PropTypes.string,
      promo: PropTypes.string,
      childCategoryLists: PropTypes.array,
    }).isRequired,
  ).isRequired,
};

export default React.memo(MegaMenu);

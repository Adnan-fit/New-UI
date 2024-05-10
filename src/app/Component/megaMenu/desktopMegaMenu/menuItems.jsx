import React from "react";
import PropTypes from "prop-types";

import ChildMenuItems from "./childMenuItems";

/**
 * MenuItems component displays the child menu items based on the provided category.
 * @param {object} props - The props for the MenuItems component.
 * @param {string} props.childCategory - The category for which child menu items are displayed.
 * @returns {JSX.Element|null} A React functional component.
 */
const MenuItems = ({ childCategory = [] }) => {
  if (!childCategory || childCategory.length === 0) {
    return null;
  }

  return (
    <div className="absolute contents items-center justify-center">
      <section className="flex min-h-96 shadow-smoke-gray">
        <ChildMenuItems category={childCategory} />
      </section>
    </div>
  );
};

MenuItems.propTypes = {
  childCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      categoryName: PropTypes.string,
      productCategoryId: PropTypes.string,
      promo: PropTypes.string,
      childCategoryLists: PropTypes.array,
    }),
  ),
};

export default React.memo(MenuItems);

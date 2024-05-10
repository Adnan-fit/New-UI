import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import CustomImage from "../../../atoms/customImage";
import Accrodion from "../../../molecules/accrodion";
import AccrodionTitle from "../../../molecules/accrodion/accrodionTitle";
import AccrodionContent from "../../../molecules/accrodion/accrodionContent";
import CategoryMenu from "./categoryMenu";
import SubCategoryItems from "./subCategoryItems";

/**
 * MenuItems component renders a list of menu items with accordion functionality.
 *
 * @param {Object[]} items - Array of menu items to be displayed.
 * @param {string} items[].categoryName - The name of the menu item category.
 * @param {string} items[].productCategoryId - The ID of the menu item's product category.
 * @param {string} items[].promo - The promotional information for the menu item.
 * @param {Object[]} items[].childCategoryLists - Array of subcategories or child menu items.
 * @param {string} items[].childCategoryLists[].categoryName - The name of the subcategory or child menu item.
 * @param {string} items[].childCategoryLists[].productCategoryId - The ID of the subcategory's product category.
 * @param {string} items[].childCategoryLists[].promo - The promotional information for the subcategory.
 * @param {string} items[].imageSource - The image URL for the menu item (optional).
 * @returns {JSX.Element} JSX for the MenuItems component.
 */
const MenuItems = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        return (
          <div
            key={item.productCategoryId}
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-solid border-grey-300 bg-white-900"
          >
            <Accrodion key={item.productCategoryId}>
              <AccrodionTitle
                inactiveClass={`flex item-center justify-between gap-2 ${item.imageSource ? "pr-3 py-1 pl-1" : "p-4"}`}
                activeClass={`flex item-center justify-between gap-2 ${item.imageSource ? "pr-3 py-1 pl-1" : "p-4"}`}
                activeIndex={activeIndex}
                changeActiveIndex={setActiveIndex}
                index={index}
              >
                <div className="flex items-center justify-between gap-2">
                  {item.imageSource && (
                    <div className="p-1">
                      <CustomImage
                        src={item.imageSource}
                        width={60}
                        height={60}
                        alt={`${item.productCategoryId}_image`}
                        borderRadius="0.5rem"
                      />
                    </div>
                  )}
                  <div className="w-full text-sm font-medium">{item.categoryName}</div>
                </div>
              </AccrodionTitle>
              <AccrodionContent index={index} activeIndex={activeIndex} styles="flex flex-col gap-2">
                {item.childCategoryLists.map((childCategory, i) => {
                  return (
                    <>
                      {Array.isArray(childCategory) && <CategoryMenu data={childCategory} />}
                      {childCategory.childCategoryLists && childCategory.childCategoryLists.length > 0 ? (
                        <SubCategoryItems data={childCategory} index={i} />
                      ) : (
                        <>
                          {childCategory.categoryName && (
                            <div className="px-2 py-2 pl-3 text-sm text-fnp-400">
                              <Link
                                key={childCategory.categoryName}
                                href={`${childCategory.productCategoryId}?promo=${childCategory.promo}`}
                              >
                                {childCategory.categoryName}
                              </Link>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </AccrodionContent>
            </Accrodion>
          </div>
        );
      })}
    </div>
  );
};

MenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      productCategoryId: PropTypes.string.isRequired,
      promo: PropTypes.string.isRequired,
      childCategoryLists: PropTypes.arrayOf(
        PropTypes.shape({
          categoryName: PropTypes.string.isRequired,
          productCategoryId: PropTypes.string.isRequired,
          promo: PropTypes.string.isRequired,
          childCategoryLists: PropTypes.array,
        }),
      ).isRequired,
      imageSource: PropTypes.string,
    }),
  ).isRequired,
};

export default MenuItems;

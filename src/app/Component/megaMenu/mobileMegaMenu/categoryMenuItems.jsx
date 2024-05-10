import { useState } from "react";
import PropTypes from "prop-types";
import Accrodion from "../../../molecules/accrodion";
import AccrodionTitle from "../../../molecules/accrodion/accrodionTitle";
import AccrodionContent from "../../../molecules/accrodion/accrodionContent";
import Link from "next/link";

/**
 * CategoryMenu component displays a list of categories with accordion functionality.
 *
 * @param {Object[]} data - Array of category data to be displayed.
 * @param {string} data[].categoryName - The name of the category.
 * @param {Object[]} data[].childCategoryLists - Array of subcategories for each category.
 * @param {string} data[].childCategoryLists[].categoryName - The name of the subcategory.
 * @param {string} data[].childCategoryLists[].productCategoryId - The ID of the subcategory's product category.
 * @param {string} data[].childCategoryLists[].promo - The promotional information for the subcategory.
 * @returns {JSX.Element} JSX for the CategoryMenu component.
 */
const CategoryMenu = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {data.map((item, index) => {
        return (
          <Accrodion key={item.categoryName}>
            <AccrodionTitle
              activeIndex={activeIndex}
              changeActiveIndex={setActiveIndex}
              index={index}
              inactiveClass="text-sm bg-white-100 rounded-lg flex text-fnp-500 justify-between pr-3 px-2 py-2 pl-3"
              activeClass="text-sm flex justify-between text-fnp-500 px-2 pr-3 py-2 pl-3 bg-white-100 rounded-lg"
            >
              <span>{item.categoryName}</span>
            </AccrodionTitle>

            <AccrodionContent activeIndex={activeIndex} index={index} styles="flex flex-col rounded-lg">
              {item?.childCategoryLists?.map((subChildCategory) => {
                return (
                  <Link
                    key={subChildCategory.categoryName}
                    href={`${subChildCategory.productCategoryId}?promo=${subChildCategory.promo}`}
                    className="px-2 py-2 pl-3 text-sm text-fnp-400"
                  >
                    {subChildCategory.categoryName}
                  </Link>
                );
              })}
            </AccrodionContent>
          </Accrodion>
        );
      })}
    </>
  );
};

CategoryMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      childCategoryLists: PropTypes.arrayOf(
        PropTypes.shape({
          categoryName: PropTypes.string.isRequired,
          productCategoryId: PropTypes.string.isRequired,
          promo: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default CategoryMenu;

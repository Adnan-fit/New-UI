import React from "react";
import PropTypes from "prop-types";

import { Tabs, Tab, TabList, TabPanel } from "../../../molecules/tabion";
import MenuItems from "./menuItems";

/**
 * MobileMegaMenu component for displaying a mobile-friendly mega menu.
 *
 * @param {object} props - Component props.
 * @param {Array} props.data - Array of menu item data objects.
 * @returns {JSX.Element} JSX for the MobileMegaMenu component.
 */
const MobileMegaMenu = ({ data = [] }) => {
  const modifiedCategories = data.reduce((accumulator, currentObject, currentIndex, array) => {
    if (currentIndex === array.length - 1) {
      const objectKeys = Object.keys(currentObject);
      const lastObjectValues = objectKeys.reduce((objectAccumulator, key) => {
        return objectAccumulator.concat(currentObject[key]);
      }, []);
      const lastObjFilterByCategoryName = lastObjectValues.filter((item) => item.categoryName);
      return accumulator.concat(lastObjFilterByCategoryName);
    } else {
      return accumulator.concat(currentObject);
    }
  }, []);

  return (
    <div className="m-3">
      <Tabs>
        <TabList
          className="max-w-full items-center gap-2 whitespace-nowrap p-2 text-sm text-grey-400"
          isActiveStyle="border-b-2 border-fnp-400 text-fnp-400 font-semibold"
          tabListStyle="overflow-auto justify-start p-2"
        >
          {modifiedCategories.map((title, index) => {
            return (
              <Tab key={title.productCategoryId} id={index}>
                {title.categoryName}
              </Tab>
            );
          })}
        </TabList>
        {modifiedCategories.map((items, index) => (
          <TabPanel key={items.productCategoryId} id={index} className="my-1">
            <MenuItems items={items.childCategoryLists} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

MobileMegaMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
      productCategoryId: PropTypes.string,
      promo: PropTypes.string,
      childCategoryLists: PropTypes.array,
    }),
  ).isRequired,
};

export default React.memo(MobileMegaMenu);

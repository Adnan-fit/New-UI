"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * InfiniteScroll component that enables infinite scrolling behavior.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children elements to be rendered.
 * @param {Array} props.data - The array of data fetched and rendered.
 * @param {Function} props.getMoreData - Function to fetch more data when scrolled to the bottom.
 * @param {number} props.totalCount - The total number of data items expected.
 * @returns {JSX.Element} InfiniteScroll component JSX.
 */
const InfiniteScroll = ({ children, data, getMoreData, totalCount }) => {
  const [isAllDataFetched, setIsAllDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /**
     * Event handler to check if scrolled to the bottom of the page and updates the data accordingly.
     * @returns {void}
     */
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isAllDataFetched) {
        getMoreData();
        setIsLoading(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAllDataFetched, getMoreData]);

  useEffect(() => {
    if (data?.length === totalCount) {
      setIsAllDataFetched(true);
      setIsLoading(false);
    }
  }, [data]);

  return (
    <>
      {React.Children.toArray(children)}
      {isLoading && <div>Loading....</div>}
    </>
  );
};

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
  getMoreData: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default InfiniteScroll;

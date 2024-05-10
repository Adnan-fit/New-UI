"use client";
import create from "zustand";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const useStore = create((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));

const ProductList = () => {
  const { products, setProducts } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [products, setProducts]);

  return (
    <div>
      <h1>Maybelline Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {console.log("first", product.image_link)}
            <div>test</div><Image
              src={product.image_link}
              alt=""
              id="img"
              width={400}
              height={300}
            />
            <div>Name : {product.name} </div>
            <div>Price : ${product.price} </div>
            <div>Product Type : {product.product_type} </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

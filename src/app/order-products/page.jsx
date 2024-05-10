"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const route = useRouter();

  const handleClick = () => {
    // route.push("/");
    // route.replace("/");
    route.back();
    // route.forward();
  };
  return (
    <>
      <h2>Order Product</h2>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;

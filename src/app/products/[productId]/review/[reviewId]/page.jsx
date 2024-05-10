import React from "react";
import { notFound } from "next/navigation";
import Testimonial from "@/app/Component/Testimonial";

const ReviewDetails = ({ params }) => {
  if (parseInt(params.reviewId) >= 1000) {
    return notFound();
  }
  return (
    <>
      <div>
        Review {params.reviewId} ProductDetails {params.productId}
      </div>
      <Testimonial />
    </>
  );
};

export default ReviewDetails;

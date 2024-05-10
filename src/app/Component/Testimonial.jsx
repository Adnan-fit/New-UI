import React from "react";
import StarRatings from "./StarRatings";

const Testimonial = () => {
  const Name = "Sunil Sharma ";
  const rating = 3.4;
  const ratingMsg = "Thank you so such for making my friend’s day so special!!!";
  const stars = 5;

  function getFirstLetters(name) {
    const words = name.split(" ");
    let initials = "";
    words.forEach((word) => {
      initials += word.charAt(0);
    });
    return initials;
  }

  return (
    <div className="w-96 h-auto flex flex-col font-sans p-4 m-3 text-md rounded-xl border-solid border-2 border-gray-200">
      <div className="w-4/5 h-16 flex">
        <div className="h-12 w-12 rounded-full bg-gray-500 flex items-center justify-center">
          <p className="text-white">{getFirstLetters(Name)}</p>
        </div>
        <div className="w-54 font-medium dark:text-black m-2">
          <StarRatings ratings={rating} stars={stars}/>
          <div className="w-54">
            <span className="inline text-sm text-gray-500">{Name}</span>
            <b> • </b>
            <span className="inline text-sm text-gray-500">2 months ago</span>
          </div>
        </div>
      </div>
      <div className="w-80">
        <p>{ratingMsg}</p>
      </div>
      <div className="w-58 h-8 flex gap-1 mt-4">
        <div className="w-auto  bg-gray-100 p-1 rounded-md">
          Occasion :<span>BirthDay</span>
        </div>
        <div className="w-auto bg-gray-100 p-1 rounded-md">
          City :<span>Delhi</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

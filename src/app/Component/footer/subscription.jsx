"use client";
import { useState } from "react";
import TextField from "../../atoms/textField";
import CustomImage from "../../atoms/customImage";

/**
 * Description placeholder
 * @date 08/03/2024 - 09:22:46
 *
 * @returns {*}
 */
const Subscription = () => {
  const [userEmail, setUserEmail] = useState("");
  /**
   * Description placeholder
   * @date 08/03/2024 - 09:26:03
   *
   * @param {*} e
   */
  const handleOnChange = (e) => {
    setUserEmail(e.target.value);
  };
  /**
   * Description placeholder
   * @date 08/03/2024 - 09:17:58
   */
  const handleSubscription = () => {
    setUserEmail(userEmail);
  };

  return (
    <>
      <div className="w-2/6 p-10" data-testid="subscription-component">
        <h6 className="mb-2 text-14 font-500 capitalize text-fnp-500">Subscribe Now</h6>
        <p className="text-12 leading-20 text-grey-500">Get updates on promotions and offers coupons.</p>
        <div className="mt-4">
          <TextField
            variant="primary"
            id="subscription"
            placeholder="Enter Email address"
            type="email"
            inputValue={userEmail}
            isRequired={true}
            onChange={handleOnChange}
            startAdornment={<CustomImage src={`/icons/sms.svg`} width={24} height={24} alt="email icon" sizes="10vw" />}
            endAdornment={
              <div onClick={handleSubscription}>
                <CustomImage
                  src={`/icons/arrow.svg`}
                  width={24}
                  height={24}
                  alt="right arrow icon"
                  sizes="10vw"
                  isPriority={false}
                />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};
export default Subscription;

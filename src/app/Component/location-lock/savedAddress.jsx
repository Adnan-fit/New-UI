import { usePathname, useRouter } from "next/navigation";
import PropTypes from "prop-types";
import ButtonComponent from "../../atoms/button";
import CustomImage from "../../atoms/customImage";
import Typography from "../../atoms/typography";
import RadioItemList from "../radioItemList";
import desktopIndiaConfig from "../../../utils/desktop";

/**
 * Description placeholder
 * @date 09/04/2024 - 10:32:28
 *
 * @export
 * @returns {string}
 */
export default function SavedAddress({
  isLoggedIn,
  savedAddress,
  handleAddressSelction,
  isHideSavedAddress = false,
  isRemovedFromDom = false,
}) {
  const router = useRouter();
  const pathName = usePathname();
  const animationTime = desktopIndiaConfig.animationTime;
  /**
   * Description placeholder
   * @date 27/03/2024 - 11:36:51
   */
  const showLogin = () => {
    router.push(`/account/my-account?from=${pathName}`);
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="mt-4 w-full">
          <ButtonComponent
            size="medium"
            buttonVarient="countryDropdown"
            label="Login to use Saved Addresses"
            subIcon={"../icons/arrow-right.svg"}
            handleClick={showLogin}
            classes="justify-start bg-[url('/icons/login-bg.svg')] bg-no-repeat bg-center bg-cover"
          />
        </div>
      ) : (
        !isRemovedFromDom && (
          <div
            className={`flex transform flex-col overflow-auto rounded-8 border border-gray-300 pl-2 pr-2 transition-all scrollbar-thin scrollbar-webkit duration-[${animationTime}] ease-out ${isHideSavedAddress ? "max-h-[0] opacity-0" : "mt-4 max-h-[65vh] opacity-100 md:max-h-[30vh]"}`}
          >
            <div className="flex w-full p-2">
              <div className="mr-2">
                <CustomImage
                  src="../icons/user-square.svg"
                  alt=""
                  sizes="10vw"
                  width={24}
                  height={24}
                  isPriority={false}
                />
              </div>
              <Typography variant="p" Tag="p" classes="font-500 text-16 text-fnp-500">
                Saved Addresses
              </Typography>
            </div>
            <div className="w-full">
              {savedAddress.map((item) => {
                return (
                  <RadioItemList
                    id={item.name}
                    name={item.name}
                    radioListType="savedAddress"
                    listContent={item}
                    key={item.name}
                    // eslint-disable-next-line react/jsx-handler-names
                    onChange={() => {
                      handleAddressSelction(item);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )
      )}
    </>
  );
}
SavedAddress.propTypes = {
  handleAddressSelction: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  savedAddress: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isHideSavedAddress: PropTypes.bool,
  isRemovedFromDom: PropTypes.bool,
};

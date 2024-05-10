"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ButtonComponent from "../../atoms/button";
import CustomImage from "../../atoms/customImage";
import TextField from "../../atoms/textField";
import Typography from "../../atoms/typography";
import RadioItemList from "../radioItemList";
import { useRouter } from "next/navigation";
import ListDropDown from "../listDropDown";
import isMobile from "../../../ utils/common";
import SavedAddress from "./savedAddresses";
import desktopIndiaConfig from "../../../utils/desktop";

/**
 * Description placeholder
 * @date 27/03/2024 - 11:36:20
 *
 * @type {{}}
 */
const savedAddress = [
  { name: "Majid", address: "Vaishali, Ghaziabad, 201101" },
  { name: "Sandeep", address: "Vaishali, Ghaziabad, 201101" },
  { name: "Adnan", address: "Vaishali, Ghaziabad, 201101" },
  { name: "Karan", address: "Vaishali, Ghaziabad, 201101" },
  { name: "Tushar", address: "Vaishali, Ghaziabad, 201101" },
];

/**
 * Description placeholder
 * @date 27/03/2024 - 11:36:20
 *
 * @type {{ topCountries: {}; countryList: {}; }}
 */
const supportedcityandcountry = {
  topCountries: [
    {
      catalogID: "usa",
      name: "USA",
      countryId: "USA",
      categoryId: "usa/gifts",
      url: "/icons/countries-flags/usa.svg",
    },
    {
      catalogID: "uk",
      name: "UK",
      countryId: "GBR",
      categoryId: "uk/gifts",
      url: "/icons/countries-flags/uk.svg",
    },
    {
      catalogID: "australia",
      name: "Australia",
      countryId: "AUS",
      categoryId: "australia/gifts",
      url: "/icons/countries-flags/australia.svg",
    },
    {
      catalogID: "canada",
      name: "Canada",
      countryId: "CAN",
      categoryId: "canada/gifts",
      url: "/icons/countries-flags/canada.svg",
    },
    {
      catalogID: "uae",
      name: "UAE",
      countryId: "UAE",
      categoryId: "uae/gifts",
      geoCode: ["AE"],
      geoDomainURL: "https://fnp.ae",
      shouldRedirect: true,
      redirectionText: "You will be redirected to our UAE site for a more localised experience",
      url: "/icons/countries-flags/uae.svg",
    },
  ],
  countryList: [
    {
      catalogID: "usa",
      name: "USA",
      countryId: "USA",
      categoryId: "usa/gifts",
      url: "/icons/countries-flags/usa.svg",
    },
    {
      catalogID: "uk",
      name: "UK",
      countryId: "GBR",
      categoryId: "uk/gifts",
      url: "/icons/countries-flags/uk.svg",
    },
    {
      catalogID: "australia",
      name: "Australia",
      countryId: "AUS",
      categoryId: "australia/gifts",
      url: "/icons/countries-flags/australia.svg",
    },
    {
      catalogID: "canada",
      name: "Canada",
      countryId: "CAN",
      categoryId: "canada/gifts",
      url: "/icons/countries-flags/canada.svg",
    },
    {
      catalogID: "germany",
      name: "Germany",
      countryId: "DEU",
      categoryId: "germany/gifts",
      url: "/icons/countries-flags/germany.svg",
    },
    {
      catalogID: "uae",
      name: "UAE",
      countryId: "ARE",
      categoryId: "uae/gifts",
      geoCode: ["AE"],
      geoDomainURL: "https://fnp.ae",
      shouldRedirect: true,
      redirectionText: "You will be redirected to fnp.ae for a more localised experience",
      url: "/icons/countries-flags/uae.svg",
    },
    {
      catalogID: "singapore",
      name: "Singapore",
      countryId: "SGP",
      categoryId: "singapore",
      geoCode: ["SG"],
      geoDomainURL: "https://fnp.sg",
      shouldRedirect: true,
      redirectionText: "You will be redirected to fnp.sg for a more localised experience",
      url: "/icons/countries-flags/singapore.svg",
    },
    {
      catalogID: "brazil",
      name: "Brazil",
      countryId: "brazil",
      categoryId: "brazil/gifts",
      url: "/icons/countries-flags/brazil.svg",
    },
    {
      catalogID: "philippines",
      name: "Philippines",
      countryId: "PHL",
      categoryId: "philippines/gifts",
      url: "/icons/countries-flags/philippines.svg",
    },
    {
      catalogID: "new-zealand",
      name: "New Zealand",
      countryId: "NZL",
      categoryId: "new-zealand/gifts",
      url: "/icons/countries-flags/new-zealand.svg",
    },
    {
      catalogID: "argentina",
      name: "Argentina",
      countryId: "ARG",
      categoryId: "argentina/gifts",
      url: "/icons/countries-flags/argentina.svg",
    },
    {
      catalogID: "austria",
      name: "Austria",
      countryId: "AUT",
      categoryId: "australia/gifts",
      url: "/icons/countries-flags/australia.svg",
    },
    {
      catalogID: "bahrain",
      name: "Bahrain",
      countryId: "BHR",
      categoryId: "bahrain/gifts",
      url: "/icons/countries-flags/bahrain.svg",
    },
    {
      catalogID: "belgium",
      name: "Belgium",
      countryId: "BEL",
      categoryId: "belgium/gifts",
      url: "/icons/countries-flags/belgium.svg",
    },
    {
      catalogID: "bulgaria",
      name: "Bulgaria",
      countryId: "BGR",
      categoryId: "bulgaria/gifts",
      url: "/icons/countries-flags/bulgaria.svg",
    },
    {
      catalogID: "china",
      name: "China",
      countryId: "CHN",
      categoryId: "china/gifts",
      url: "/icons/countries-flags/china.svg",
    },
    {
      catalogID: "croatia",
      name: "Croatia",
      countryId: "HRV",
      categoryId: "croatia/gifts",
      url: "/icons/countries-flags/croatia.svg",
    },
    {
      catalogID: "denmark",
      name: "Denmark",
      countryId: "DNK",
      categoryId: "denmark/gifts",
      url: "/icons/countries-flags/denmark.svg",
    },
    {
      catalogID: "egypt",
      name: "Egypt",
      countryId: "EGY",
      categoryId: "egypt/gifts",
      url: "/icons/countries-flags/egypt.svg",
    },
    {
      catalogID: "finland",
      name: "Finland",
      countryId: "FIN",
      categoryId: "finland/gifts",
      url: "/icons/countries-flags/finland.svg",
    },
    {
      catalogID: "france",
      name: "France",
      countryId: "FRA",
      categoryId: "france/gifts",
      url: "/icons/countries-flags/france.svg",
    },
    {
      catalogID: "greece",
      name: "Greece",
      countryId: "GRC",
      categoryId: "greece/gifts",
      url: "/icons/countries-flags/greece.svg",
    },
    {
      catalogID: "hong-kong",
      name: "Hong Kong",
      countryId: "HKG",
      categoryId: "hong-kong/gifts",
      url: "/icons/countries-flags/hong-kong.svg",
    },
    {
      catalogID: "hungary",
      name: "Hungary",
      countryId: "HUN",
      categoryId: "hungary/gifts",
      url: "/icons/countries-flags/hungary.svg",
    },
    {
      catalogID: "indonesia",
      name: "Indonesia",
      countryId: "IDN",
      categoryId: "indonesia/gifts",
      url: "/icons/countries-flags/indonesia.svg",
    },
    {
      catalogID: "ireland",
      name: "Ireland",
      countryId: "IRL",
      categoryId: "ireland/gifts",
      url: "/icons/countries-flags/ireland.svg",
    },
    {
      catalogID: "italy",
      name: "Italy",
      countryId: "ITA",
      categoryId: "italy/gifts",
      url: "/icons/countries-flags/italy.svg",
    },
    {
      catalogID: "japan",
      name: "Japan",
      countryId: "JPN",
      categoryId: "japan/gifts",
      url: "/icons/countries-flags/japan.svg",
    },
    {
      catalogID: "jordan",
      name: "Jordan",
      countryId: "JOR",
      categoryId: "jordan/gifts",
      url: "/icons/countries-flags/jordan.svg",
    },
    {
      catalogID: "kuwait",
      name: "Kuwait",
      countryId: "KWT",
      categoryId: "kuwait/gifts",
      url: "/icons/countries-flags/kuwait.svg",
    },
    {
      catalogID: "lebanon",
      name: "Lebanon",
      countryId: "LBN",
      categoryId: "lebanon/gifts",
      url: "/icons/countries-flags/lebanon.svg",
    },
    {
      catalogID: "malaysia",
      name: "Malaysia",
      countryId: "MYS",
      categoryId: "malaysia/gifts",
      url: "/icons/countries-flags/malaysia.svg",
    },
    {
      catalogID: "mauritius",
      name: "Mauritius",
      countryId: "MUS",
      categoryId: "mauritius/gifts",
      url: "/icons/countries-flags/mauritius.svg",
    },
    {
      catalogID: "morocco",
      name: "Morocco",
      countryId: "MAR",
      categoryId: "morocco/gifts",
      url: "/icons/countries-flags/morocco.svg",
    },
    {
      catalogID: "nepal",
      name: "Nepal",
      countryId: "NPL",
      categoryId: "nepal/gifts",
      url: "/icons/countries-flags/nepal.svg",
    },
    {
      catalogID: "netherlands",
      name: "Netherlands",
      countryId: "NLD",
      categoryId: "netherlands/gifts",
      url: "/icons/countries-flags/netherlands.svg",
    },
    {
      catalogID: "norway",
      name: "Norway",
      countryId: "NOR",
      categoryId: "norway/gifts",
      url: "/icons/countries-flags/norway.svg",
    },
    {
      catalogID: "oman",
      name: "Oman",
      countryId: "OMN",
      categoryId: "oman/gifts",
      url: "/icons/countries-flags/oman.svg",
    },
    {
      catalogID: "pakistan",
      name: "Pakistan",
      countryId: "PAK",
      categoryId: "pakistan/gifts",
      url: "/icons/countries-flags/pakistan.svg",
    },
    {
      catalogID: "poland",
      name: "Poland",
      countryId: "POL",
      categoryId: "poland/gifts",
      url: "/icons/countries-flags/poland.svg",
    },
    {
      catalogID: "portugal",
      name: "Portugal",
      countryId: "PRT",
      categoryId: "portugal/gifts",
      url: "/icons/countries-flags/portugal.svg",
    },
    {
      catalogID: "qatar",
      name: "Qatar",
      countryId: "QAT",
      categoryId: "qatar/gifts",
      url: "/icons/countries-flags/qatar.svg",
    },
    {
      catalogID: "romania",
      name: "Romania",
      countryId: "ROU",
      categoryId: "romania/gifts",
      url: "/icons/countries-flags/romania.svg",
    },
    {
      catalogID: "russia",
      name: "Russia",
      countryId: "RUS",
      categoryId: "russia/gifts",
      url: "/icons/countries-flags/russia.svg",
    },
    {
      catalogID: "saudi-arabia",
      name: "Saudi Arabia",
      countryId: "SAU",
      categoryId: "saudi-arabia/gifts",
      url: "/icons/countries-flags/saudi-arabia.svg",
    },
    {
      catalogID: "south-africa",
      name: "South Africa",
      countryId: "ZAF",
      categoryId: "south-africa/gifts",
      url: "/icons/countries-flags/south-africa.svg",
    },
    {
      catalogID: "spain",
      name: "Spain",
      countryId: "ESP",
      categoryId: "spain/gifts",
      url: "/icons/countries-flags/spain.svg",
    },
    {
      catalogID: "sri-lanka",
      name: "Sri Lanka",
      countryId: "LKA",
      categoryId: "sri-lanka/gifts",
      url: "/icons/countries-flags/sri-lanka.svg",
    },
    {
      catalogID: "sweden",
      name: "Sweden",
      countryId: "SWE",
      categoryId: "sweden/gifts",
      url: "/icons/countries-flags/sweden.svg",
    },
    {
      catalogID: "switzerland",
      name: "Switzerland",
      countryId: "CHE",
      categoryId: "switzerland/gifts",
      url: "/icons/countries-flags/switzerland.svg",
    },
    {
      catalogID: "taiwan",
      name: "Taiwan",
      countryId: "TWN",
      categoryId: "taiwan/gifts",
      url: "/icons/countries-flags/taiwan.svg",
    },
    {
      catalogID: "thailand",
      name: "Thailand",
      countryId: "THA",
      categoryId: "thailand/gifts",
      url: "/icons/countries-flags/thailand.svg",
    },
    {
      catalogID: "ukraine",
      name: "Ukraine",
      countryId: "UKR",
      categoryId: "ukraine/gifts",
      url: "/icons/countries-flags/ukraine.svg",
    },
  ],
};

/**
 * Description placeholder
 * @date 26/03/2024 - 13:45:26
 *
 * @export
 * @returns {string}
 */
export default function LocationLock({ showHideLocationLock }) {
  const animationTime = desktopIndiaConfig.animationTime;
  const defaultCountry = {
    catalogID: "india",
    name: "India",
    countryId: "IND",
    categoryId: "gifts",
    url: "/icons/countries-flags/india.svg",
  };
  const router = useRouter();
  const [showCountryList, setShowCountryList] = useState(false);
  const [hideSavedAddress, setHideSavedAddress] = useState(false);
  const [removedSavedAddress, setRemovedSavedAddress] = useState(false);
  const [animateCountryList, setAnimateCountryList] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [slectedCountry, setSlectedCountry] = useState(defaultCountry);
  const [iscountrySelected, setIscountrySelected] = useState(false);
  const [slectedCountryCities, setSlectedCountryCities] = useState([]);
  const [enterCityName, setEnterCityName] = useState("");
  const [filterCities, setFilterCities] = useState([]);
  const [enterPincde, setEnterPincde] = useState("");
  const [pincodeList, setPincodeList] = useState([]);
  const [filterPincodes, setFilterPincodes] = useState([]);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    /**
     * Description placeholder
     * @date 05/04/2024 - 13:55:35
     */
    function handleResize() {
      setIsMobileDevice(isMobile());
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Description placeholder
   * @date 27/03/2024 - 11:36:44
   */
  const showCountryListSec = () => {
    setShowCountryList(true);
    setHideSavedAddress(true);
    if (slectedCountry.name !== "India") {
      setIscountrySelected(true);
      const withIndia = [defaultCountry, ...supportedcityandcountry.countryList];
      setFilteredList(withIndia);
    } else {
      setIscountrySelected(false);
      setFilteredList(supportedcityandcountry.countryList);
    }

    setTimeout(() => {
      setAnimateCountryList(true);
    }, animationTime);
  };

  /**
   * Description placeholder
   * @date 27/03/2024 - 11:48:43
   */
  const onHandleClick = () => {
    setHideSavedAddress(true);
  };
  /**
   * Description placeholder
   * @date 27/03/2024 - 12:45:59
   *
   * @param {*} e
   */
  const handleChange = async (e) => {
    const id = e.target.getAttribute("id");
    const inputValue = e.target.value;
    setRemovedSavedAddress(true);
    if (id === "searchCountry") {
      setSearchCountry(inputValue);
      let filteredListData = supportedcityandcountry.countryList.filter((item) => {
        return item.name.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilteredList(filteredListData);
    } else if (id === "city") {
      setEnterCityName(inputValue);
      if (inputValue.length >= 2) {
        let setFilterCitiesData = slectedCountryCities.filter((item) => {
          return item.cityName.toLowerCase().includes(inputValue.toLowerCase());
        });
        setFilterCities(setFilterCitiesData.slice(0, 5));
      } else {
        setFilterCities([]);
      }
    } else if (id === "pincode") {
      setEnterPincde(inputValue);
      if (inputValue.length === 2) {
        const pincodeListData = await fetch(`https://atcdel.fnp.com/chocolate/v1/global/static/pincode/${inputValue}`);
        const finalPincodes = await pincodeListData?.json();
        setPincodeList(finalPincodes);
        setFilterPincodes(finalPincodes.slice(0, 5));
      } else {
        let filterPincodesData =
          pincodeList.length &&
          pincodeList.filter((item) => {
            return item.cityName.toLowerCase().includes(inputValue.toLowerCase());
          });
        filterPincodesData.length && setFilterPincodes(filterPincodesData.slice(0, 5));
      }
    }
  };
  /**
   * Description placeholder
   * @date 27/03/2024 - 14:14:57
   *
   * @param {*} item
   */
  const handleCountrySelction = async (item) => {
    setSlectedCountry(item);
    setShowCountryList(false);
    setSearchCountry("");
    setRemovedSavedAddress(true);
    if (item.name !== "India") {
      setIscountrySelected(true);
      const withIndia = [defaultCountry, ...supportedcityandcountry.countryList];
      setFilteredList(withIndia);
      const citiesData = await fetch(`https://atcdel.fnp.com/tiffany/v1/cities/country/${item.countryId}`);
      const finalCities = await citiesData?.json();
      setSlectedCountryCities(finalCities?.data);
    } else {
      setIscountrySelected(false);
      setFilteredList(supportedcityandcountry.countryList);
    }
  };

  /**
   * Description placeholder
   * @date 27/03/2024 - 15:19:55
   */
  const onHandleClose = () => {
    showHideLocationLock(false);
  };
  /**
   * Description placeholder
   * @date 28/03/2024 - 15:17:14
   *
   * @param {*} item
   */
  const onHandleAddressSelction = () => {
    onHandleClose();
  };
  /**
   * Description placeholder
   * @date 27/03/2024 - 16:22:34
   */
  const redirectToCatalog = () => {
    router.push(slectedCountry.categoryId);
  };

  /**
   * Description placeholder
   * @date 28/03/2024 - 15:17:29
   */
  const onHandleClickList = () => {
    // console.log("li clicked KP");
  };
  return (
    <div
      className="relative flex h-full w-full flex-col  flex-wrap bg-white-900 p-4 md:h-max md:max-w-[440px] md:rounded-2xl"
      id="locationLock"
      data-testid="locationLock"
    >
      <div className="absolute right-2 top-2 hidden md:block">
        <ButtonComponent
          buttonVarient="icon"
          icon="../icons/close-circle.svg"
          handleClick={onHandleClose}
          classes="py-[0] px-[0] border-0"
        />
      </div>
      <div className="flex w-full">
        <div className="mr-2">
          <CustomImage src="../icons/location-Icon.svg" alt="" sizes="10vw" width={24} height={24} isPriority={false} />
        </div>
        <Typography variant="p" Tag="p" classes="font-500 text-16 text-fnp-500">
          Gift Receiver’s Location
        </Typography>
      </div>
      <div className="mt-2 w-full">
        <Typography variant="p" Tag="p" classes="text-12 text-grey-400">
          Check availability of gifts by sharing receiver’s delivery location
        </Typography>
      </div>
      {!isMobileDevice && (
        <SavedAddress
          isLoggedIn={true}
          savedAddress={savedAddress}
          handleAddressSelction={onHandleAddressSelction}
          isHideSavedAddress={hideSavedAddress}
          isRemovedFromDom={removedSavedAddress}
        />
      )}

      <div className="mt-4">
        <ButtonComponent
          size="medium"
          buttonVarient="countryDropdown"
          icon={slectedCountry.url}
          subIcon={`../icons/${showCountryList ? "arrow-up.svg" : "navigation-chevron.svg"}`}
          label={slectedCountry.name}
          handleClick={showCountryListSec}
        />
      </div>
      {!showCountryList ? (
        <div className="mt-4">
          <TextField
            placeholder={`${iscountrySelected ? "Enter city name" : "Enter Receiver’s pincode, location, area"}`}
            type="text"
            id={`${iscountrySelected ? "city" : "pincode"}`}
            isRequired={false}
            inputValue={iscountrySelected ? enterCityName : enterPincde}
            variant="primary"
            autoFocus={iscountrySelected}
            onChange={handleChange}
            // eslint-disable-next-line react/jsx-handler-names
            onClick={onHandleClick}
          />
          {filterPincodes.length > 0 || filterCities.length > 0 || !iscountrySelected ? (
            <ListDropDown
              suggestions={iscountrySelected ? filterCities : filterPincodes}
              keyName={iscountrySelected ? "cityName" : ""}
              startAdornment={(props) => <CustomImage src="/icons/location-Icon.svg" alt="Location-Icon" {...props} />}
              handleClick={onHandleClickList}
              classes="overflow-auto scrollbar-thin scrollbar-webkit"
            />
          ) : (
            <ButtonComponent size="medium" buttonVarient="filled" label="View Gifts" handleClick={redirectToCatalog} />
          )}
        </div>
      ) : (
        <>
          <div className="mt-4">
            <TextField
              placeholder="Search country"
              type="text"
              id="searchCountry"
              isRequired={false}
              variant="primary"
              startAdornment={<CustomImage src="../icons/search-bar.svg" alt="" sizes="10vw" width={24} height={24} />}
              inputValue={searchCountry}
              onChange={handleChange}
            />
          </div>
          {filteredList.length > 0 && (
            <div
              data-testid="countryList"
              className={`flex transform flex-col overflow-auto rounded-8 border border-gray-300 pl-2 pr-2 transition-all scrollbar-thin scrollbar-webkit duration-[${animationTime}] ease-out ${animateCountryList ? "max-h-[65vh] opacity-100 md:max-h-[30vh]" : "max-h-[0] opacity-0"}`}
            >
              {filteredList.map((item) => {
                return (
                  <RadioItemList
                    id={item.catalogID}
                    name={item.catalogID}
                    radioListType="countrySelection"
                    listContent={item}
                    key={item.countryId}
                    isChecked={item.name === slectedCountry.name}
                    // eslint-disable-next-line react/jsx-handler-names
                    onChange={() => {
                      handleCountrySelction(item);
                    }}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
LocationLock.propTypes = {
  showHideLocationLock: PropTypes.func.isRequired,
};

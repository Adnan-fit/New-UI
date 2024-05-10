import React, { useState } from "react";
import { useCookies } from "react-cookie";

const EUCookieConsent = ({ toggleDrawer }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "cookieConsent",
    "functional",
    "analytics",
    "marketing",
  ]);
  const [contentState, setContentState] = useState({});

  const cookiePreference = [
    {
      id: 1,
      title: "Strictly Necessary Cookies",
      content:
        "These cookies are essential for the website to work properly. These cookies enable function permitting intended use of the Website. We place these cookies on the Website and therefore they are First Party Cookies. Examples of such cookies are storing the consent provided for cookies, distributing traffic on the website,  etc. Since they are necessary for function of the Website, no consent is required for these cookies.",
      cookieKey: "Necessary",
      cookieValue: "1",
    },
    {
      id: 2,
      title: "Analytical Cookies",
      content:
        "These cookies are essential for the website to work properly. These cookies enable function permitting intended use of the Website. We place these cookies on the Website and therefore they are First Party Cookies. Examples of such cookies are storing the consent provided for cookies, distributing traffic on the website,  etc. Since they are necessary for function of the Website, no consent is required for these cookies.",
      cookieKey: "Analytical",
      cookieValue: 12334,
    },
    {
      id: 3,
      title: "Marketing Cookies",
      content:
        "These cookies are essential for the website to work properly. These cookies enable function permitting intended use of the Website. We place these cookies on the Website and therefore they are First Party Cookies. Examples of such cookies are storing the consent provided for cookies, distributing traffic on the website,  etc. Since they are necessary for function of the Website, no consent is required for these cookies.",
      cookieKey: "Marketing",
      cookieValue: true,
    },
    {
      id: 4,
      title: "Functional Cookies",
      content:
        "These cookies are essential for the website to work properly. These cookies enable function permitting intended use of the Website. We place these cookies on the Website and therefore they are First Party Cookies. Examples of such cookies are storing the consent provided for cookies, distributing traffic on the website,  etc. Since they are necessary for function of the Website, no consent is required for these cookies.",
      cookieKey: "Functional",
      cookieValue: true,
    },
  ];

  const handleAcceptAll = () => {
    // cookiePreference.forEach((preference) => {
    //   setCookie(preference.cookieKey, preference.cookieValue, { path: "/" });
    // });
    // setCookie("cookieConsent", true, { path: "/" });
    toggleDrawer(); // Toggle the drawer
  };

  const handleTogglePreference = (cookieKey, cookieValue) => {
    if (cookieValue) {
      setCookie(cookieKey, cookieValue, { path: "/" });
    } else {
      removeCookie(cookieKey, { path: "/" });
    }
  };

  const handleToggleContent = (preferenceId) => {
    setContentState((prevContentState) => ({
      ...prevContentState,
      [preferenceId]: !prevContentState[preferenceId],
    }));
  };

  const setNecessaryCookieAndCloseDrawer = () => {
    handleTogglePreference("Necessary", "1"); // Set necessary cookie
    toggleDrawer(); // Close drawer
  };

  const Button = ({ text, onClick }) => (
    <button
      className="bg-teal-500 w-[100%] h-[2.5rem] px-2 mt-2 rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );

  return (
    <div className="cookie-consent">
      <h2 className="text-xl font-bold">Cookie Policy</h2>
      <p>
        We use cookies to enhance your browsing experience, analyze traffic,
        serve ads, and personalize content in accordance with our
        <a href={"/privacy-policy"}>Privacy Policy</a>. Click {`'Accept'`} to
        consent to our use of cookies.
      </p>
      <Button text="Accept all" onClick={handleAcceptAll} />
      <div className="preferences">
        <h3 className="font-semibold mt-2">Cookie Settings</h3>
        <div className="border-2 border-b-0 mt-2 mb-14">
          {cookiePreference.map((preference) => (
            <div key={preference.id} className="border-b-2 py-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="mx-4 text-lg">
                    {contentState[preference.id] ? (
                      <span>&#8722;</span>
                    ) : (
                      <span>&#43;</span>
                    )}
                  </div>
                  <label
                    className="cursor-pointer w-[11rem] font-medium"
                    onClick={() => handleToggleContent(preference.id)}
                  >
                    {preference.title}
                  </label>
                </div>
                <div className="mx-1 flex items-center">
                  {preference.cookieKey === "Necessary" ? (
                    <span
                      className="text-teal-500 cursor-pointer"
                      onClick={() => handleToggleContent(preference.id)}
                    >
                      &#x2713;Always Active
                    </span>
                  ) : (
                    <input
                      className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-gray-400 before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-teal-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-teal-500 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="checkbox"
                      role="switch"
                      checked={cookies[preference.cookieKey]}
                      onChange={(e) =>
                        handleTogglePreference(
                          preference.cookieKey,
                          e.target.checked ? preference.cookieValue : null
                        )
                      }
                    />
                  )}
                </div>
              </div>
              {contentState[preference.id] && (
                <div className="bg-slate-50">
                  <p className="p-5 text-md">{preference.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Button
          text="Only necessary"
          onClick={setNecessaryCookieAndCloseDrawer}
        />
        <Button text="Confirm my choices" onClick={toggleDrawer} />
      </div>
    </div>
  );
};

export default EUCookieConsent;

"use client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import Drawer from "./Component/Drawer";
import EUCookieConsent from "./Component/CookieConsent";

const HomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [cookies] = useCookies(["cookieConsent"]);

  const EU_countries = [
    "Austria",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Iceland",
    "Liechtenstein",
    "Norway",
    "Sweden",
  ];
  const isEuCountry = EU_countries.includes("Spain");
  useEffect(() => {
    if (isEuCountry) {
      setExpanded(true);
    }
  }, [isEuCountry]);
  const toggleDrawer = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="flex flex-col">
      <h1>Next.js 14</h1>
      <Link href="/blog">BLOG</Link>
      {!cookies.cookieConsent && isEuCountry && (
        <Drawer
          position="bottom"
          isOpen={expanded}
          onClose={() => setExpanded(false)}
        >
          <EUCookieConsent toggleDrawer={toggleDrawer} />
        </Drawer>
      )}
    </div>
  );
};

export default HomePage;

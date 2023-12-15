import React from "react";
import { HomeNavbar } from "../../common";
import {
  CinemaHomeBanner_Container,
  CinemaHomeHero,
  CinemaHomeProductile,
  CinemaHomeWelcome,
} from "../../container";
import CinemaWelcomeStoreCard from "../../components/cinemawelcomestorecard/CinemaWelcomeStoreCard";

const CinemaaHome = () => {
  return (
    <div>
      <HomeNavbar />
      {/* <CinemaHomeNavbar /> */}
      <CinemaHomeHero />
      <CinemaHomeWelcome />
      <CinemaHomeProductile />
      <CinemaHomeBanner_Container />
      <CinemaWelcomeStoreCard WcBtn={true} />
    </div>
  );
};

export default CinemaaHome;

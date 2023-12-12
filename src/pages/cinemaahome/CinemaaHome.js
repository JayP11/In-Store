import React from "react";
import { CinemaHomeNavbar } from "../../common";
import { CinemaHomeBanner_Container, CinemaHomeHero, CinemaHomeProductile, CinemaHomeWelcome } from "../../container";
import CinemaWelcomeStoreCard from "../../components/cinemawelcomestorecard/CinemaWelcomeStoreCard";

const CinemaaHome = () => {
  return (
    <div>
      <CinemaHomeNavbar />
      <CinemaHomeHero />
      <CinemaHomeWelcome />
      <CinemaHomeProductile />
      <CinemaHomeBanner_Container />
      <CinemaWelcomeStoreCard WcBtn={true} />
    </div>
  );
};

export default CinemaaHome;
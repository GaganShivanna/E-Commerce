import React from "react";
import FinalNavBar from "../components/CustomStuff/FinalNavbar";
import CustCards from "../components/CustomStuff/CustCards";
import CustDisCard from "../components/CustomStuff/CustDisCard";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../pages/Home"; // Ensure that this path is correct based on your project structure

const LandingPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <>
          <FinalNavBar />
          <CustCards />
          <CustDisCard />
        </>
      )}

      {isAuthenticated && (
        <Home />
      )}
    </>
  );
};

export default LandingPage;

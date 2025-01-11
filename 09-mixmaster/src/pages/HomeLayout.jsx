import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state === "loading";
  const value = 'same value'

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet context={{value}} />}
        {/* <Outlet /> */}
      </section>
    </>
  );
};

export default HomeLayout;

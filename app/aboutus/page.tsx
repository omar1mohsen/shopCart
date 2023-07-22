import React from "react";
import Navbar from "../components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "../components/Footer";
import ScrollTopBtn from "../components/assets/ScrollTopBtn";

const page = () => {
    return (
<>
<Navbar/>
<MainPage/>
<Footer/>
<ScrollTopBtn/>
</>
    );
};

export default page;

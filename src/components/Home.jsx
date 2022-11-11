import React from "react";
import DetailsSection from "./sections/DetailsSection";
import ImageSection from "./sections/ImageSection";

const Home = () => {
    return (
        <main
            className="md:grid grid-cols-2 place-content-center md:py-16 md:px-12 md:gap-16
        lg:px-36 xl:px-72 xl:gap-20">
            <ImageSection />
            <DetailsSection />
        </main>
    );
};

export default Home;

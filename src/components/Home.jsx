import React from "react";
import DetailsSection from "./sections/DetailsSection";
import Photo from "./sections/ImageSection";

const Home = () => {
    return (
        <main className="md:grid grid-cols-2 md:max-w-[60%] md:min-w-[780px] md:mx-auto md:mt-[10vh] md:gap-24 place-content-center">
            <Photo />
            <DetailsSection />
        </main>
    );
};

export default Home;

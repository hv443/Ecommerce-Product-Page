import React from "react";
import { useState } from "react";
import { allImages } from "../../assets/ImageArray";
import preArrow from "../../assets/icons/icon-previous.svg";
import nextArrow from "../../assets/icons/icon-next.svg";

const ImageSection = () => {
    const [imageIndex, setImageIndex] = useState(0);

    function nextImage() {
        setImageIndex((index) => {
            return index == allImages.length - 1 ? (index = 0) : index + 1;
        });
    }
    function previousImage() {
        setImageIndex((index) => {
            return index == 0 ? (index = allImages.length - 2) : index - 1;
        });
    }

    function changeImage(e) {
        setImageIndex(e.target.id);
    }

    const thumbnailImages = allImages.map((img) => {
        return (
            <img
                onClick={changeImage}
                key={img.id}
                id={img.id}
                className="rounded-lg object-cover cursor-pointer"
                src={img.thumbnail}
                alt="thumbnail"
            />
        );
    });

    return (
        <section className="max-h-[50vh] w-full relative overflow-hidden md:max-h-full md:space-y-5">
            <img
                className="w-full object-cover md:rounded-lg"
                src={allImages[imageIndex].img}
                alt=""
            />

            <div className="hidden md:grid grid-cols-4 gap-7 overflow-hidden">
                {thumbnailImages}
            </div>

            <button
                onClick={previousImage}
                className="absolute grid place-content-center top-1/2 -translate-y-1/2 left-5 rounded-full bg-light p-2 w-10 aspect-square active:scale-110 md:hidden">
                <img src={preArrow} alt="preBtn" />
            </button>

            <button
                onClick={nextImage}
                className="absolute grid place-content-center top-1/2 -translate-y-1/2 right-5 rounded-full bg-light p-2 w-10 aspect-square  active:scale-110 md:hidden">
                <img src={nextArrow} alt="preBtn" />
            </button>
        </section>
    );
};

export default ImageSection;

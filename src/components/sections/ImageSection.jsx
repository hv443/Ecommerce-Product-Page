import React from "react";
import { useState } from "react";
import items from "../../assets/itemsArray";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { useProduct } from "../../context/useContext";

const ImageSection = () => {
    const { productIndex } = useProduct();
    const [imageIndex, setImageIndex] = useState(0);
    const [enlargeImage, setEnlargeImage] = useState(false);
    const allImages = items[productIndex].images;

    function toggleEnlargeImgae() {
        setEnlargeImage((pre) => !pre);
    }

    function nextImage() {
        setImageIndex((pre) => {
            return pre == allImages.length - 1 ? (pre = 0) : Number(pre) + 1;
        });
    }
    function previousImage() {
        setImageIndex((pre) => {
            return pre == 0 ? (pre = allImages.length - 1) : Number(pre) - 1;
        });
    }

    function changeImage(e) {
        setImageIndex(e.target.id);
    }

    const thumbnailImages = allImages.map((img) => {
        return (
            <div
                key={img.id}
                className={`rounded-lg w-full cursor-pointer duration-200 overflow-hidden border-2
                ${img.id == imageIndex ? " border-element " : "border-transparent"}`}>
                <img
                    onClick={changeImage}
                    id={img.id}
                    src={img.thumbnail}
                    alt="thumbnail"
                    className={`hover:opacity-60 w-full object-cover duration-200 ${
                        img.id == imageIndex && "  opacity-30"
                    }`}
                />
            </div>
        );
    });

    return (
        <>
            <section className="max-h-[50vh] w-full relative md:max-h-full md:gap-8 md:grid md:place-content-center overflow-hidden">
                <div>
                    <img
                        onClick={toggleEnlargeImgae}
                        className="object-cover w-full md:rounded-2xl md:cursor-pointer"
                        src={allImages[imageIndex].img}
                        alt="img"
                    />
                </div>

                <button
                    onClick={previousImage}
                    className="absolute grid place-content-center top-1/2 -translate-y-1/2 left-5 rounded-full bg-light p-3 active:scale-110 active:text-element md:hidden">
                    <FontAwesomeIcon className="aspect-square" icon={faChevronLeft} />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute grid place-content-center top-1/2 -translate-y-1/2 right-5 rounded-full bg-light p-3 active:scale-110 active:text-element  md:hidden">
                    <FontAwesomeIcon className="aspect-square" icon={faChevronRight} />
                </button>

                <div className="hidden md:grid grid-cols-4 gap-8">{thumbnailImages}</div>
            </section>

            <div
                className={`${
                    enlargeImage ? "md:flex" : "md:hidden"
                } hidden flex-col absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full items-center justify-center bg-black/80`}>
                <div className="grid w-[500px] gap-6">
                    <div className="w-full grid place-content-end">
                        <FontAwesomeIcon
                            onClick={toggleEnlargeImgae}
                            className="text-light h-6 hover:text-element cursor-pointer"
                            icon={faClose}
                        />
                    </div>
                    <div className="relative">
                        <img
                            className="object-cover rounded-2xl"
                            src={allImages[imageIndex].img}
                            alt="img"
                        />

                        <button
                            onClick={previousImage}
                            className="absolute grid place-content-center top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full bg-light p-4 aspect-square active:scale-95 hover:text-element ">
                            <FontAwesomeIcon className="aspect-square" icon={faChevronLeft} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute grid place-content-center top-1/2 -translate-y-1/2 translate-x-1/2 right-0 rounded-full bg-light p-4 aspect-square active:scale-95 hover:text-element ">
                            <FontAwesomeIcon className="aspect-square" icon={faChevronRight} />
                        </button>
                    </div>

                    <div className="flex w-[75%] mx-auto gap-6">{thumbnailImages}</div>
                </div>
            </div>
        </>
    );
};

export default ImageSection;

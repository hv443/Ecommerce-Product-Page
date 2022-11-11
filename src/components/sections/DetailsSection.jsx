import React from "react";
import { items } from "../../assets/itemsArray";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const DetailsSection = () => {
    const [productCount, setProductCount] = useState(0);
    const item = items[0];

    function addProduct() {
        setProductCount((pre) => pre + 1);
    }

    function removeProduct() {
        setProductCount((pre) => (pre == 0 ? pre : pre - 1));
    }

    return (
        <section className="p-5 space-y-6 font-bold pb-10 md:grid md:place-content-center md:p-0">
            <sub className="text-element font-bold uppercase tracking-widest">
                {item.companyName}
            </sub>
            <article className="space-y-4 md:space-y-6">
                <h1 className="text-3xl font-bold capitalize text-primary md:text-4xl xl:text-5xl">
                    {item.name}
                </h1>
                <p className="text-secondary font-normal">{item.description}</p>
            </article>

            <div className="flex justify-between md:block ">
                <div className="space-x-4 flex items-center">
                    <span className="text-2xl">${item.price}</span>
                    <span className="py-1 px-2 bg-element-pale rounded-md text-element">50%</span>
                </div>
                <p className="text-off line-through">$250.00</p>
            </div>

            <div className="space-y-3 md:flex md:space-y-0 md:space-x-3">
                <div className="flex justify-between items-center bg-regular rounded-md md:flex-[35%]">
                    <button onClick={removeProduct} className="p-5 md:p-3">
                        <FontAwesomeIcon className="text-element" icon={faMinus} />
                    </button>
                    <span>{productCount}</span>
                    <button onClick={addProduct} className="p-5 md:p-3">
                        <FontAwesomeIcon className="text-element" icon={faPlus} />
                    </button>
                </div>

                <button className="w-full flex justify-center items-center space-x-3 p-3 px-5 bg-element rounded-md text-light shadow-2xl shadow-element md:flex-[65%] active:scale-95 hover:opacity-70 duration-200">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};

export default DetailsSection;

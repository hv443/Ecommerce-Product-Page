import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
    return (
        <div className="hidden absolute shadow-lg rounded-md z-20 bg-light left-1/2 -translate-x-1/2 top-20 w-[95%] md:min-w-[300px] md:top-full md:left-full md:-translate-x-full">
            <h1 className="font-bold p-5 border-b ">Cart</h1>
            <div className="p-5 space-y-5 min-h-[150px]">
                <div className="flex flex-row items-center justify-between">
                    <img src="" alt="img" />
                    <div>
                        <p>product name</p>
                        <div className="flex gap-1">
                            <p>$100 x 5 </p>
                            <b>$500</b>
                        </div>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>{" "}
                </div>

                <button className="w-full p-3 bg-element rounded-md text-light font-semibold active:scale-95 hover:opacity-70 duration-200">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItem;

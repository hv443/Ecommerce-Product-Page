import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import items from "../assets/itemsArray";
import { useCart, useProduct } from "../context/useContext";

const CartItem = ({ toggleCart, setIsCartOpen }) => {
    const { cartItemCount, setCartItemCount } = useCart();
    const { productIndex } = useProduct();

    const item = items[productIndex];
    const img = items[productIndex].images[0];
    // const cartRef = useRef();

    // useEffect(() => {
    //     function closeCart(e) {
    //         if (!cartRef.current.contains(e.target)) {
    //             setIsCartOpen(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", closeCart);

    //     return () => {
    //         document.removeEventListener("mousedown", closeCart);
    //     };
    // });

    return (
        <div
            // ref={cartRef}
            className="absolute shadow-cartShadow rounded-md z-20 bg-light left-1/2 -translate-x-1/2 top-20 min-w-[95%] md:min-w-[360px] md:top-[150%] md:left-full md:-translate-x-full">
            <h1 className="font-bold p-5 border-b ">Cart</h1>
            {cartItemCount > 0 ? (
                <div className="p-5 space-y-5 text-secondary">
                    <div className="flex flex-row items-center justify-between gap-3">
                        <img className="max-w-[50px] rounded-md" src={img.thumbnail} alt="img" />
                        <div className="flex flex-col justify-center ">
                            <p className="capitalize">{item.name}</p>
                            <div className="flex gap-1">
                                <p>
                                    ${item.price} x {cartItemCount}
                                </p>
                                <b className="text-primary">
                                    ${(item.price * cartItemCount).toFixed(2)}
                                </b>
                            </div>
                        </div>
                        <button onClick={() => setCartItemCount(0)}>
                            <FontAwesomeIcon
                                className="hover:text-primary duration-200"
                                icon={faTrashCan}
                            />
                        </button>
                    </div>

                    <button className="w-full p-3 bg-element rounded-md text-light font-semibold active:scale-95 hover:opacity-70 duration-200">
                        Checkout
                    </button>
                </div>
            ) : (
                <span className="w-full min-h-[160px] grid place-content-center text-secondary font-bold">
                    Your cart is empty.
                </span>
            )}
        </div>
    );
};

export default CartItem;

import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const ProductContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};
export const useProduct = () => {
    return useContext(ProductContext);
};

export function ContextProvider({ children }) {
    const [cartItemCount, setCartItemCount] = useState(false);
    const [productCount, setProductCount] = useState(0);
    const productIndex = 0;

    function addToCart() {
        setCartItemCount((preCount) => preCount + productCount);
        setProductCount(0);
    }

    return (
        <CartContext.Provider value={{ cartItemCount, setCartItemCount }}>
            <ProductContext.Provider
                value={{ productCount, setProductCount, addToCart, productIndex }}>
                {children}
            </ProductContext.Provider>
        </CartContext.Provider>
    );
}

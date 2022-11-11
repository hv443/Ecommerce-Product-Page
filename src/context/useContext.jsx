import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => {
    return useContext(CartContext);
};

export function ContextProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function toggleCart() {
        setIsCartOpen((pre) => !pre);
    }

    return <CartContext.Provider value={[isCartOpen, toggleCart]}>{children}</CartContext.Provider>;
}

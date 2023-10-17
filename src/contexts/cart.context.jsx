import { createContext, useState } from "react";

const addCartItem = (cartItem, productToAdd) => {

};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const value = { isCartOpen, setIsCartOpen };

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
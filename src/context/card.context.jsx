import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    cartItemCount: 0,
    clearItemFromCart: () => { },
    cartTotal: 0,
})

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );


    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItem] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (productToRemove) => {
        setCartItem(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItem(clearCartItem(cartItems, cartItemToClear));
    };

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount, removeItemToCart, clearItemFromCart, cartTotal }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
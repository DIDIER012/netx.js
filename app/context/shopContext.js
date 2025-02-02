"use client";

import { useState, createContext } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({children}) => {
    const [shop, setShop] = useState([]);

    const cart = (product) => {
        let stocks = shop.some((elemento) => elemento.id === product.id);

        if (stocks) {
            let updatedStocks = shop.map((elemento) => 
                elemento.id === product.id ? { ...elemento, quantity: product.quantity } : elemento
            );
            setShop(updatedStocks);
        } else {
            setShop([...shop, product]); 
        }
    };
    
    const deleteProductById = (id) => {
        let updatedArray = shop.filter((product) => product.id !== id);
        setShop(updatedArray);
    };
    
    const getTotalAmount = () => {
        let totalCart = shop.reduce((acc, product) => acc + product.price * product.quantity, 0);
        return totalCart;
    };

    const totalBuy = () => {
        let total = shop.reduce((acc, product) => acc + product.quantity, 0); 
        return total;
    };

    const clearCart = () => {
        setShop([]);
    };

    const totalQuantity = (id) => { 
        let product = shop.find((element) => element.id === id); 
        return product ? product.quantity : 1;
    };

    let data = { 
        shop, 
        cart,
        deleteProductById,
        getTotalAmount,
        totalBuy,
        clearCart,
        totalQuantity
    };

    return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>
};
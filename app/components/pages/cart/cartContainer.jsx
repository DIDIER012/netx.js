"use client";
import { useContext } from "react"
import Cart from "./cart";
import { ShopContext } from "../../context/shopContext";



const CartContainer = () => {
    const {shop, deleteProductById, clearCart, getTotalAmount} = useContext(ShopContext);

    let total = getTotalAmount()


    return (
    <Cart
    shop= {shop}
    clearCart= {clearCart}
    deleteProductById= {deleteProductById}
    total={total}/>
    )
}

export default CartContainer;
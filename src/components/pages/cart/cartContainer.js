import { useContext } from "react"
import { ShopContext } from "../../../context/shopContext"
import Cart from "./cart";



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
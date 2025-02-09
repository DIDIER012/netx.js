"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";  
import Badge from "@mui/material/Badge";  
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";



const CartWidget = ({toggleButton}) => {  

    const { shop } = useContext(ShopContext);


    return (  
        <div  className="flex justify-center items-center  cursor-pointer relative" onClick={toggleButton}>  
            <Badge badgeContent={shop.length} color="primary" max={50} showZero={true}>  
                <ShoppingCartIcon className="text-gray-800"/>  
            </Badge>  
        </div>  
    );  
};  

export default CartWidget;
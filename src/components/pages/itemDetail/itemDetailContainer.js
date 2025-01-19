import { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";  
import { ShopContext } from "../../../context/shopContext";
import { collection, getDoc, doc } from "firebase/firestore";  
import { db } from "../../../firebase.config";  
import ItemDetail from "./itemDetail";  
import Swal from "sweetalert2";  

const ItemDetailContainer = () => {  
const [items, setItems] = useState({});  
const { cart, totalQuantity } = useContext(ShopContext);  
const { id } = useParams();  

let totalItems = totalQuantity(id);  

useEffect(() => {  
const productsDetail = async () => {  
    try {  
    let refDoc = doc(collection(db, "farmacia"), id);  
    const res = await getDoc(refDoc);  
    if (res.exists()) {  
        setItems({ ...res.data(), id: res.id });  
    } else {  
        console.error("No se encontró el documento con id:", id);  
        setItems({}); 
    }  
    } catch (error) {  
    console.error("Hay un error al cargar los productos ", error);  
    }  
};  
productsDetail();  
}, [id]);  

const add = (quantity) => {  
let addToProduct = { ...items, quantity };  
cart(addToProduct);  

Swal.fire({  
    position: "top-end",  
    icon: "success",  
    title: "El producto ha sido agregado al carrito!",  
    showConfirmButton: false,  
    timer: 1000  
});  
};  

return <ItemDetail items={items} totalItems={totalItems} add={add} />;  
};  

export default ItemDetailContainer;
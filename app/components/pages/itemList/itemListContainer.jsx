import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase.config";

const ItemListContainer = () => {
const [items, setItems] = useState([]);


useEffect(() => {
let productsList = collection(db, "farmacia");

let consulta = productsList;

if(categoryName) {
    let productsFiltered = query(
    productsList,
    where("category", "==", categoryName)
    );
    consulta = productsFiltered
}

getDocs(consulta).then((res) => {
    let array = res.docs.map((elemento) => {
    return {...elemento.data(), id: elemento.id};
    })
    setItems(array);
})
}, [categoryName]);

return <ItemList items={items} />;
};

export default ItemListContainer;

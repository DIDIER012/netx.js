"use client";
import { useContext, useState } from "react";  
import { ShopContext } from "../../context/shopContext";  
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";  
import { db } from "../../../firebase.config";


const Checkout = () => {  
    const [user, setUser] = useState({  
        name: "",  
        phone: "",  
        email: "",  
    });  

    const { shop, getTotalAmount, clearCart } = useContext(ShopContext);  
    const [orderId, setOrderId] = useState(null);  
    const [login, setLogin] = useState(false);  
    const [error, setError] = useState({  
        name: "",  
        phone: "",  
        email: "",  
    });  

    const submit = (e) => {  
        e.preventDefault();  
        
        // Resetea el estado de error al inicio del envío  
        setError({ name: "", phone: "", email: "" });  
        
        let hasError = false;  

        // Validaciones  
        if (user.name.length < 4) {  
            setError(prev => ({ ...prev, name: "La longitud debe ser mayor a 10" }));  
            hasError = true;  
        }  
        // Si hay errores, no continuar  
        if (hasError) return;  

        setLogin(true);  

        let total = getTotalAmount();  

        const order = {  
            userInput: user,  
            items: shop,  
            total,  
        };  

        let refCollection = collection(db, "orders");  
        addDoc(refCollection, order)  
            .then((res) => {  
                setOrderId(res.id);  
                clearCart();  
            })  
            .catch((error) => {  
                console.error("Error en la base de datos!", error);  
            })  
            .finally(() => {  
                setLogin(false);  
            });  

        order.items.forEach((elemento) => {  
            updateDoc(doc(db, "farmacia", elemento.id), {  
                stock: elemento.stock - elemento.quantity,  
            });  
        });  
    };  

    const handleChange = (e) => {  
        const { value, name } = e.target;  
        setUser({ ...user, [name]: value });  
    };  

    if (login) {  
        return <h2>Cargando....</h2>;  
    }  

    return (  
        <div>  
            {orderId ? (  
                <h1>Gracias por tu compra, el número de orden es: {orderId}</h1>  
            ) : (  
                <form onSubmit={submit}>  
                    <input  
                        type="text"  
                        placeholder="Nombre"  
                        onChange={handleChange}  
                        name="name"  
                        value={user.name} // Controlar el input  
                    />  
                    <span>{error.name}</span>  
                    <input  
                        type="text"  
                        placeholder="Teléfono"  
                        onChange={handleChange}  
                        name="phone"  
                        value={user.phone} // Controlar el input  
                    />  
                    <span>{error.phone}</span>  
                    <input  
                        type="text"  
                        placeholder="Email"  
                        onChange={handleChange}  
                        name="email"  
                        value={user.email} // Controlar el input  
                    />  
                    <span>{error.email}</span>  
                    <button>Comprar</button>  
                </form>  
            )}  
        </div>  
    );  
};  

export default Checkout;
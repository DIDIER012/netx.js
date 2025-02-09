import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Swal from "sweetalert2";

const Cart = ({ shop, clearCart, deleteProductById, total }) => {
const limpiarConAlert = () => {
Swal.fire({
    title: "seguro quieres limpiar?",
    showConfirmButton: true,
    showDenyButton: true,
    confirmButtonText: "Si, limpiar",
    denyButtonText: `No, dejar como estaba`,
}).then((result) => {
    if (result.isConfirmed) {
    clearCart();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "!los productps fueron eliminados!",
    });
    } else if (result.isDenied) {
    Swal.fire({
        position: "center",
        icon: "info",
        title: "!Puedes seguir con tu compra!",
    });
    }
});
};



return (
<div className='flex flex-col justify-center items-center p-52'>
    {shop.length === 0 ? (
    <h2 className='flex justify-center items-center font text-5xl font-bold'>No hay productos en el carrito todavía!</h2>
    ) : (
    shop.map((products) => (
        <div key={products.id} className='flex flex-col justify-center items-center gap-4 text-2xl font-bold'>
        <Image 
        src={products.imageUrl} 
        alt={products.title} 
        width={500}  
        height={300}
        />
        <h2>{products.title}</h2>
        <h3>${products.price}</h3>
        <h3>Cantidad: {products.quantity}</h3>
        <h3>Total a pagar: {products.price * products.quantity}</h3>
        <Button
            variant="contained"
            
            onClick={() => deleteProductById(products.id)}
        >
            Eliminar
        </Button>
        </div>
    ))
    )}

{total > 0 && (
    <div>
        <Button
        sx={{ marginTop: 20,  marginRight: 2 }}
        variant="contained"
        onClick={limpiarConAlert}
        >
        Limpiar carrito
        </Button>
        <Link href="/Comprobante"> 
        <Button sx={{ marginTop: 20 }} variant="contained">
            Finalizar compra
        </Button>
        </Link>
        </div>
    )}

    {total > 0 && <h2>El total a pagar es : $ {total}</h2>}
</div>
);
};

export default Cart;

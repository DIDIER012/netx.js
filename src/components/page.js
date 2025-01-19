// pages/index.js  
import CartsContainers from '../components/CartsContainers'; // Asegúrate de que esta ruta sea correcta  

export default function Home() {  
    return (  
        <div>  
            <h1>Bienvenido a la Página Principal</h1>  
            <CartsContainers /> {/* Llama a tu componente de Carts Containers */}  
        </div>  
    );  
}
import { useContext } from "react";  
import { ShopContext } from "../../../context/shopContext";  
import { Link, useLocation } from "react-router-dom";  

const Model = ({ isOpen }) => {  
    const { shop } = useContext(ShopContext);  
    const location = useLocation();

    const shouldRenderModal = isOpen && location.pathname !== "/Carrito";

    return (  
        <div 
            className={`absolute top-full right-9 mt-2 w-80 max-h-[450px] p-4 bg-gray-800 shadow-2xl rounded-lg overflow-y-auto transform ${shouldRenderModal ? "scale-100" : "scale-0"} transition-transform duration-300`} 
            style={{ zIndex: 1000 }}
        > 
            {shop.length > 0 ? (  
                <ul className="w-full space-y-4">  
                    {shop.map((product) => (  
                        <li key={product.id} className="flex items-center w-full py-2 px-3 bg-gray-700 rounded-md shadow-md">
                            <span className="text-yellow-400 text-xl font-bold">{product.quantity}x</span>  
                            <span className="ml-4 flex-grow text-white font-semibold">{product.title}</span>  
                            <span className="text-green-400 text-lg font-semibold">${product.price}</span>
                        </li>
                    ))}  
                    <li className="text-lg font-semibold mt-6 text-center text-white">Total: ${shop.reduce((total, product) => total + product.price * product.quantity, 0)}</li>
                </ul>  
            ) : (  
                <p className="font-bold mt-7 text-xl text-center text-red-500">No hay productos en el carrito.</p>   
            )}  

            <Link to={"/Carrito"} className="w-full">
                <button 
                    className={`w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition ${shop.length === 0 ? 'hidden' : 'block'}`}
                >
                    Finalizar compra
                </button>  
            </Link>  
        </div>  
    );  
}  

export default Model;

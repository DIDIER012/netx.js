import { Link } from "react-router-dom";

const Error = () => {  
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl font-semibold mt-4">Página No Encontrada</p>
            <p className="text-lg mt-2 text-gray-700">Parece que la página que buscas no existe.</p>
            
            <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Volver al Inicio
            </Link>
        </div>
    );
}  

export default Error;
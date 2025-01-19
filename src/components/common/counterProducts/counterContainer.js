import { useState } from "react";  
import Swal from "sweetalert2"; 
import Counter from "./counter";

const CounterContainer = ({ add, stock, totalItems }) => {  
    const [contador, setContador] = useState(totalItems);  

    const suma = () => {  
        if (contador < stock) {  
            setContador(contador + 1);  
        } else {  
            Swal.fire({  
                icon: "error",  
                title: "Oops...",  
                text: "Ya no puedes seguir agregando productos!",  
            });  
        }  
    };  

    const resta = () => {  
        if (contador > 1) { 
            setContador(contador - 1);  
        } else {  
            Swal.fire({  
                icon: "error",  
                title: "Oops...",  
                text: "No puedes agregar menos de 1!",  
            });  
        }  
    };  

    let ChildProps = {  
        contador,  
        suma,  
        resta,  
        add,  
    };  

    return <Counter {...ChildProps} />;  
};  

export default CounterContainer;
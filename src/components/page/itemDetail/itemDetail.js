import Image from 'next/image';  
import CounterContainer from "../../common/counterProducts/counterContainer";  

const ItemDetail = ({ items, add, totalItems}) => {  
    return (  
        <div className="flex flex-col items-center justify-center gap-5 text-center">  
            <Image   
                src={items.imageUrl}   
                alt={items.title}   
                className="mb-3"  
                width={500} 
                height={500}   
                layout="responsive"  
            />  

            <h1 className="text-4xl">{items.title}</h1>  
            <p>{items.description}</p>  
            <span>{items.price}</span>  
    
            <CounterContainer add={add} stock={items.stock} totalItems={totalItems} />  
        </div>  
    );  
};  

export default ItemDetail;
import {  
    Button,  
    Card,  
    CardActions,  
    CardContent,  
    CardMedia,  
    Typography,  
} from "@mui/material";  
import Link from 'next/link'; // Importa Link de Next.js  

const ProductCard = ({ title, price, imageUrl, description, id }) => {  
    return (  
        <Card sx={{ width: 350, height: 420 }}>  
            <CardMedia sx={{ height: 240 }} image={imageUrl} title={title} />  
            <CardContent className="flex flex-col justify-center items-center">  
                <Typography gutterBottom variant="h5" component="div">  
                    {title}  
                </Typography>  
                <Typography variant="body2" sx={{ color: "text.secondary" }}>  
                    {description}  
                </Typography>  
                <Typography variant="body2" sx={{ color: "text.secondary" }}>  
                    ${price.toFixed(2)} {/* Asegúrate de formatear el precio si es necesario */}  
                </Typography>  
            </CardContent>  
            <CardActions className="flex justify-center items-center">  
                <Link href={`/Detalle/${id}`} passHref>  
                    <Button variant="outlined" size="small">  
                        Ver detalle  
                    </Button>  
                </Link>  
            </CardActions>  
        </Card>  
    );  
};  

export default ProductCard;


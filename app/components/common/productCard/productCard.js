import{
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import { Link } from "react-router-dom"


const ProductCard = ({ title, price, imageUrl, description, id }) => {
    return (
    <Card sx={{ width: 350, height: 420 }}>
        <CardMedia sx={{ height: 240 }} image={imageUrl} title="green iguana" />
        <CardContent className="flex flex-col justify-center items-center">
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
        </Typography>
        
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price}
        </Typography>
        </CardContent>
        <CardActions className="flex justify-center items-center">
        <Link to={`/Detalle/${id}`}>
            <Button variant="outlined" size="small">
            Ver detalle
            </Button>
        </Link>
        </CardActions>
    </Card>
    );
};


export default ProductCard;
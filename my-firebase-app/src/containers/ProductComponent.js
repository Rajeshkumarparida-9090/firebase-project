import React from "react";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductComponent = () =>{
    const products = useSelector((state)=>state?.allproducts?.products)
    const fetchAllProducts = products.map((product)=>{
        const {id, image, title, category} = product;
        return(
            // <div key={id}>
            //     <div className="cards">
            //         <div className="links">
            //             <div className="card">
            //                 <div className="image">
            //                     <img src={image} alt={title} />
            //                 </div>
            //                 <div className="headings">{title}</div>
            //                 <div className="content">{category}</div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div>
            <Card sx={{ maxWidth: 345 }}  key={id} className="imagecard">
                <CardMedia
                sx={{ height: 140 }}
                image={image}
                className="cardImg"
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                   {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {category}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>
        )
    })
    console.log("products", products)
    // const {id, title} = products[0];
    return(
        <div className="listedCard">{fetchAllProducts}</div>
    )
}

export default ProductComponent;
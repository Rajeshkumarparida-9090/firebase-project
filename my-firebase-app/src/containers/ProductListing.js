import React, { useEffect } from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Container from '@mui/material/Container';

const ProductListing = () =>{
    const products = useSelector((state)=>state)
    // console.log("products", products)
    const dispatch = useDispatch()
    const fetchProducts = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>console.log("err", err))
        console.log("response", response)
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log("products===", products)
    return(
        <div>
            <h1>ProductListing</h1>
            <Container maxWidth="xl">
            <ProductComponent />
            </Container>
        </div>
    )
}

export default ProductListing;
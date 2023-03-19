import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../Redux/productReducer/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList=()=>{
    const [searchParamas,setSearchParams]=useSearchParams();
    const dispatch=useDispatch();
    const location=useLocation();    
    const {products}=useSelector((store)=>store.productReducer);
   
    let obj={
        params:{
            gender:searchParamas.getAll("category")
    
        }
    }
    useEffect(()=>{
        dispatch(getProducts(obj))
    },[location.search])
    
    return <div>
        <h3>Product List</h3>
        <DIV>
        {products.length>0&&products.map((ele)=>
        <ProductCard key={ele.id}{...ele}/>
        )}
        </DIV>        
    </div>
}


const  DIV=styled.div`
    display : grid ;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    margin: 40px auto;
    margin-left: 20px;
`;
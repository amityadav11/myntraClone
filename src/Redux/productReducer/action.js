import axios from "axios";
import {PRODUCT_REQUEST,PATCH_PRODUCT_SUCCESS,ADD_PRODUCT_SUCCESS,PRODUCT_FAILURE, GET_PRODUCT_SUCCESS} from "./actionType"

export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post("http://localhost:8080/products",data).then((res)=>{   
    dispatch({type:ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const getProducts=(paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products",paramobj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data});
    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const editProduct=(dataobj,id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    return axios.patch(`http://localhost:8080/products/${id}`,dataobj)
    .then(()=>{
        dispatch({type:PATCH_PRODUCT_SUCCESS});
    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}
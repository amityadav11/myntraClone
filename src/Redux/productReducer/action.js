import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .post("http://localhost:8080/products", data)
    .then(() => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};


export const getProducts =  (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
  
    axios
      .get("http://localhost:8080/products")
      .then(() => {
        dispatch({ type: GET_PRODUCT_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };

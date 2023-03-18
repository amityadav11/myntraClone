import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {auth} = useSelector((store)=> store.authReducer);
    return auth ? children : <Navigate to={"/login"}/>
}
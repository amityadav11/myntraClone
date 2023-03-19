import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar=()=>{
    return <DIV>
        <h3>Shopping App</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/auth"}>Admin</Link>
    </DIV>
}

const DIV=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid gray;
    padding:0px 10px  ;
`;
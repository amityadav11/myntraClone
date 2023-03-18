import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <DIV>
        <h3>Shopping App</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Log in</Link>
        <Link to={"/admin"}>Admin Page</Link>
    </DIV>
  )
}

const DIV = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    border-bottom:1px solid gray;
`
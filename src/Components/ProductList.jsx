import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/productReducer/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [searchParamas, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const location = useLocation();
  const { products } = useSelector((store) => store.productReducer);

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  let obj = {
    params: {
      gender: searchParamas.getAll("category"),
      _sort: searchParamas.get("order") && "price",
      _order: searchParamas.get("order"),
      q: searchParamas.get("q"),
    },
  };

  useEffect(() => {
    
    // search && (params.q = search);
    //setSearchParams(params);
    dispatch(getProducts(obj));
  }, [location.search, search]);

  return (
    <div>
      <h3>Product List</h3>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      <DIV>
        {products.length > 0 &&
          products.map((ele) => <ProductCard key={ele.id} {...ele} />)}
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px auto;
  padding: 10px 20px;
`;

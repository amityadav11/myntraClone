import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/productReducer/action";
const initialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};
export const Admin = () => {
  const [product, setProduct] = React.useState(initialState);
  const dispatch = useDispatch();
  const state = useSelector((store) => store.productReducer);
  console.log(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name,value)
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(product);
    dispatch(addProduct(product));
    setProduct(initialState);
  };

  return (
    <DIV>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={product.image}
          name="image"
          placeholder="Image"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={product.title}
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={product.price}
          name="price"
          placeholder="Price"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="brand"
          value={product.brand}
          name="brand"
          placeholder="Brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={product.discount}
          name="discount"
          placeholder="Discount"
          onChange={(e) => handleChange(e)}
        />
        <select name="gender" onChange={(e) => handleChange(e)}>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid gray;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input {
    width: 80%;
    height: 40px;
    font-size: large;
  }
  button {
    width: 20%;
    height: 35px;
  }
  select {
    width: 50%;
    height: 30px;
    font-size: 15px;
  }
`;

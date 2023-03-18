import React,{useState} from "react";
import styled from "styled-components";
import { addProduct } from "../Redux/productReducer/action";
import { useDispatch } from 'react-redux'

const initialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};

const Admin = () => {
  const [products, setProducts] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducts((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(products));
    console.log(products);
    setProducts("");
  };

  return (
    <DIV>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          name="image"
          type="url"
          placeholder="Image"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="title"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="price"
          type="text"
          placeholder="Price"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="discount"
          type="text"
          placeholder="Discount"
        />
        <select onChange={(e) => handleChange(e)} name='gender' id="">
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
  margin: 40px;
  border: 1px solid gray;
  padding: 20px;

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

  select {
    width: 80%;
    height: 40px;
    font-size: large;
  }
  button {
    width: 100px;
    height: 40px;
  }
`;
export default Admin;

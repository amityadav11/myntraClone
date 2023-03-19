import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../Redux/productReducer/action";
import { ProductCard } from "../Components/ProductCard";

export const EditProduct = () => {
  const { id } = useParams();
  const product = useSelector((store) => store.productReducer.products);

  const [data, setData] = React.useState(product.find((el) => el.id == +id));
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editProduct(data, id)).then(() => {
      setSuccess(true);
    });
  };
  React.useEffect(() => {
    const data = product.find((el) => el.id == +id);
    setData(data);
    if (success) {
      alert("Product updated successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [success]);

  return (
    <div style={{ display: "flex" }}>
      <DIV>
        <h3>Edit Product: {id}</h3>

        <form onSubmit={handleEdit}>
          <input
            type="text"
            name={"image"}
            value={data.image}
            onChange={handleChange}
          />
          <input
            type="text"
            name={"title"}
            value={data.title}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="brand"
            value={data.brand}
            onChange={handleChange}
          />
          <input
            type="number"
            name="discount"
            value={data.discount}
            onChange={handleChange}
          />
          <select name="gender" value={data.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </select>
          <button type="submit">Edit</button>
        </form>
      </DIV>
      <div style={{ width: "20%", margin: "auto 5%" }}>
        <ProductCard {...data} />
      </div>
    </div>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px 15%;
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

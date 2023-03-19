import React from "react";
import { useSearchParams } from "react-router-dom";
export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = React.useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = React.useState(initialOrder || "");

  console.log(category);
  const handleChange = (e) => {
    let newCategory = [...category];
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => ele !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  React.useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
    // console.log(searchParams.getAll("category"))
  }, [category, order]);

  const handleSort = (e) => {
    setOrder(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleChange}
          checked={category.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleChange}
          checked={category.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleChange}
          checked={category.includes("kids")}
        />
        <label>Kids</label>
      </div>
      <br />
      <br />
      <h3>Sort Based on Price</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
         
        />
        <label>Ascending</label>
        <br />
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
     
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

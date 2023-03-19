import React from "react";
import { useSearchParams } from "react-router-dom";
export const Sidebar=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const initialCategory=searchParams.getAll("category");
    const [category,setCategory]=React.useState(initialCategory || []);
    console.log(initialCategory);
    const handleChange=(e)=>{
        let newCategory=[...category];
        const value=e.target.value;
        if(newCategory.includes(value)){

            newCategory=newCategory.filter((ele)=>ele!=value);
        }
        else {
            newCategory.push(value);
        }
        setCategory(newCategory);
    }

    React.useEffect(()=>{
        let params={
            category
        }
        setSearchParams(params)
        // console.log(searchParams.getAll("category"))
    },[category])

    return <div>
        <h3>Filter By</h3>
        <div>
            <input type="checkbox" value={"male"} onChange={handleChange} checked={category.includes("male")} />
            <label >Men</label>
        </div>
        <div>
            <input type="checkbox" value={"female"} onChange={handleChange} checked={category.includes("female")}/>
            <label >Women</label>
        </div>
        <div>
            <input type="checkbox" value={"kids"} onChange={handleChange} checked={category.includes("kids")}/>
            <label >Kids</label>
        </div>
    </div>
}
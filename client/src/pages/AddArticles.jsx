import React, { useState } from "react";
import Layout from "../Components/Layout";
import API from "../services/API";
import { useNavigate } from "react-router-dom";

const AddArticles = () => {
  const categories = ["Technology", "Travel", "Food"];
  const [title, setTitle]= useState("")
  const [category, setCategory]= useState("")
  const [image, setImage]= useState("")
  const [description, setDescription]= useState("")
  const navigate= useNavigate()
  const handleImageChange= (e)=>{
    const selectedFiles= e.target.files[0]
    if(selectedFiles){
      const reader= new FileReader()
      reader.onload=(e)=>{
        const base64String= e.target.result
        // console.log("onload",base64String)
        setImage(base64String)
      }
      reader.readAsDataURL(selectedFiles)
    }
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    // console.log("title",title)
    // console.log("category", category)
    // console.log("description", description)
    
    
    // const formData= new FormData()
    // formData.append("title", title)
    // formData.append("category", category)
    // formData.append("description", description)
    // formData.append("uploadImage", base64Image)
    // // console.log(formData.getAll())
    // for (const entry of formData.entries()) {
    //   console.log(entry);
    // }

    try {
      const {data}= await API.post("/inventory/add-article",{title,category,description,image})
      if(data?.success){
        console.log(data)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className="container">
      <form className="w-75 mx-auto card p-3 my-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={e=>setTitle(e.target.value)}
        />
        <div className="d-flex mb-3">
          {categories.map((category, index) => (
            <div className="form-check me-3" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={category}
                value={category}
                onChange={e=>setCategory(category)}
              />
              <label className="form-check-label" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="uploadImage" className="form-label">Upload Image</label>
          <input type="file" accept="image/*" name="uploadImage" id="uploadImage"  className="form-control mb-3" onChange={handleImageChange}/>
        </div>
        <textarea name="" id="" cols="30" rows="5" className="form-control mb-3" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
        <button type="submit" className="btn btn-info bg-gradient btn-sm text-light">Add</button>
      </form>
      </div>
    </Layout>
  );
};

export default AddArticles;

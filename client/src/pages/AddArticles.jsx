import React, { useState } from "react";
import Layout from "../Components/Layout";
import API from "../services/API";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddArticles = () => {
  const categories = ["Technology", "Travel", "Food"];
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  
  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
  };
  const handleImageUpload = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "csmm5ecn");
      if (image) {
        const { data } = await axios.post(
          "https://api.cloudinary.com/v1_1/dqrtyunuk/image/upload",
          formData
        );
        console.log(data?.secure_url);
        setImageUrl(data?.secure_url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // formData.append("public_id", `${}`);
    try {
      if (imageUrl) {
        const { data } = await API.post("/inventory/add-article", {
          title,
          description,
          imageUrl,
          category,
        });
        navigate("/");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            onChange={(e) => setTitle(e.target.value)}
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
                  onChange={(e) => setCategory(category)}
                />
                <label className="form-check-label" htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}
          </div>
          <div className="mb-3">
              <div className="input-group mb-1">
              <input
              type="file"
              accept="image/*"
              name="uploadImage"
              id="uploadImage"
              className="form-control"
              onChange={handleImageChange}
            />
            <button className="btn btn-primary" onClick={handleImageUpload}>Upload Image</button>
              </div>
            {imageUrl && (
              <div className="text-success fw-bold  rounded" >Image Uploaded successfully!</div>
            )}
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="form-control mb-3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="btn btn-info bg-gradient btn-sm text-light"
          >
            Add
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddArticles;

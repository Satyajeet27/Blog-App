import { useEffect, useState } from "react"
import Articles from "../Components/Articles"
import Layout from "../Components/Layout"
import API from "../services/API"

const MyBlogs = () => {
  const [data, setData]= useState("")
  const fetchData=async()=>{
    try {
      const {data}= await API.get("/inventory/current-user-articles")
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{fetchData()},[])
  return (
    <Layout>
        <div className="container d-flex justify-content-between flex-wrap my-3">
          {data && data?.data.map(info=>{
            const {_id, title, category, description, imageUrl, userId}= info
            return(
              <Articles key={info._id} _id={_id} author={userId.userName} title={title} category={category} description= {description} image={imageUrl}/>
            )
          })}
            
        </div>  
    </Layout>
  )
}

export default MyBlogs
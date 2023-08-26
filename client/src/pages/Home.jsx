import { useEffect, useState } from "react"
import Articles from "../Components/Articles"
import Layout from "../Components/Layout"
import API from "../services/API"

const Home = () => {
  const [data, setData]= useState("")
  const fetchData=async()=>{
    try {
      const {data}= await API.get("/inventory/get-articles")
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
            const {title, category, description, image, userId}= info
            return(
              <Articles author={userId.userName} title={title} category={category} description= {description} image={image}/>
            )
          })}
            
        </div>
    </Layout>
  )
}

export default Home
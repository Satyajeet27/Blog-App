import { useEffect, useState } from "react"
import Articles from "../Components/Articles"
import Layout from "../Components/Layout"
import API from "../services/API"

const Home = () => {
  const [data, setData]= useState()
  const [categoryData, setCategoryData]= useState(null)
  const fetchData=async()=>{
    try {
      const {data}= await API.get("/inventory/get-articles")
     
      setData(data?.data)
      setCategoryData(data?.data)
    } catch (error) {
      console.log(error)
    }
  }
  // if(data){
  //   setCategoryData(data)
  // }
  // console.log(categoryData)
  useEffect(()=>{fetchData()},[])

  const handleCategory= (catgry)=>{
    if(catgry=="all"){
      console.log(data)
      setCategoryData(data)
      console.log(categoryData)
      return
    }
    const filterData= data?.filter(item=>item.category===catgry)
    setCategoryData(filterData)
    console.log(filterData)
  }

  return (
    <Layout>
        <div className="container my-3">
          <div className="row category-tab">
            <button className="col-md-3 bg-light border p-2 text-center rounded-start" onClick={()=>handleCategory("all")}>All</button>
            <button className="col-md-3 bg-light border p-2 text-center" onClick={()=>handleCategory("food")}>Food</button>
            <button className="col-md-3 bg-light border p-2 text-center " onClick={()=>handleCategory("Technology")}>Technology</button>
            <button className="col-md-3 bg-light border p-2 text-center rounded-end" onClick={()=>handleCategory("Travel")}>Travel</button>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
          {categoryData && categoryData?.map(info=>{
            const {_id, title, category, description, imageUrl, userId}= info
            return(
              <Articles key={info._id} _id={_id} author={userId.userName} title={title} category={category} description= {description} image={imageUrl}/>
            )
          })}
          </div>
            
        </div>
    </Layout>
  )
}

export default Home
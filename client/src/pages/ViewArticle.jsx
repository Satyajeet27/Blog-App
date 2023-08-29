import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import API from "../services/API";
import { useEffect, useState } from "react";

const ViewArticle = () => {
  const params = useParams();
  const [data, setData] = useState("");
  console.log("params", params);
  const getDetails = async () => {
    try {
      const { data } = await API.post(`/inventory/get-single-article`, {
        _id: params.id,
      });
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Layout>
      {data && (
        <div className=" p-3 m-2 bg-transparent text-light">
            <div className="text-center  fs-1" style={{fontFamily: "'Gluten', cursive"}}> {data?.title}</div>
            <p className="text-center">~ {data?.userId?.userName}</p>
          <div className="w-100 text-center ">
          <img
            src={data?.imageUrl}
            className=" rounded shadow"
            alt="..."
            style={{ height: "24rem", objectFit:"contain" }}
          />
          </div>

          <div className="mt-2">
            
            <p className="text-break">{data?.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ViewArticle;

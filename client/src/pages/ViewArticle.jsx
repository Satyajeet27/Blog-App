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
        <div className="card p-3 m-2 shadow">
            <div className="card-title">Title: {data?.title}</div>
            <p>Author: {data?.userId?.userName}</p>
          <div className="w-100 text-center">
          <img
            src={data?.imageUrl}
            className=""
            alt="..."
            style={{ height: "24rem" }}
          />
          </div>

          <div className="card-body">
            
            <p className="card-text overflow-hidden">{data?.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ViewArticle;

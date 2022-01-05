import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const Productdetails = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetchData(id);
  }, [id]);
  const fetchData = (id) => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((e) => e.json())
      .then((e) => setData(e));
  };
  console.log(data);
  return (
    <>
      <div>
        <h1>Productdetails</h1>
        <div style={{ marginBottom: "40px" }}>
          <img src={data.image} alt="displayimg"></img>
          <h3>{data.name}</h3>
          <h3>Price : {data.price}</h3>
        </div>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Allproducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://localhost:3001/products")
      .then((e) => e.json())
      .then((e) => setData(e));
  };
  return (
    <>
      <div>
        {data.map((e) => (
          <Link key={e.id} to={`/products/${e.id}`}>
            <div style={{ marginBottom: "40px" }}>
              <img src={e.image} alt="displayimg"></img>
              <h3>{e.name}</h3>
              <h3>Price : {e.price}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

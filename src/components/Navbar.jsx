import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Link to="/" style={{ margin: "10px" }}>
          Home
        </Link>
        <Link to="/products">Products</Link>
      </div>
    </>
  );
};

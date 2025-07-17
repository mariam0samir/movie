import img from "../../Images/header.02acca9b1c7ba9e26c92.png";
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="header text-white position-relative">
      <img src={img} alt={title} />
      <h1 className="d-flex align-items-center justify-content-center ">{title}</h1>
    </div>
  );
};

export default Header;

import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">N{price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Product;

import { Card } from "react-bootstrap";
// import Rating from "./Rating";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Product({ product }) {
  const [product, setProduct] = useState([]);
const {id: productId} = useParams();
useEffect(() => {
const fetchedProduct = async () => {
  const {data} = await axios.get(`/api/products/${productId}`);
  setProduct(data);
  fetchedProduct();
}
},[])
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text> */}

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedproducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(fetchedproducts);
    };
    fetchedproducts();
  }, []);

  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;

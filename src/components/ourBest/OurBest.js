import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { Container, Col } from "react-bootstrap";
import "./OurBest.scss";

const OurBest = ({ products }) => {
  const ourBestProducts = products.map((product) => {
    if (product.best) {
      return (
        <Link
          to={`/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={`key-${product.id}`}
        >
          <ProductCard
            id={product.id}
            title={product.name}
            price={product.price}
            country={product.country}
            imgSrc={`/images/products/${product.img}`}
          />
        </Link>
      );
    } else {
      return null;
    }
  });

  return (
    <section className="our-best">
      <Container>
        <div className="our-best__wrapper">
          <h2 className="our-best__title title">Our best</h2>
        </div>
        <Col className="our-best__list products-list">{ourBestProducts}</Col>
      </Container>
    </section>
  );
};

export default OurBest;

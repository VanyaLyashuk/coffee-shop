import ProductCard from '../productCard/ProductCard';
import { Container, Col } from 'react-bootstrap';
import './OurBest.scss';

const OurBest = ({products, onProductView}) => {
  const ourBestProducts = products.map(product => {
    if (product.best) {
      return (
        <ProductCard
          id={product.id}
          onProductView={onProductView}
          title={product.name} 
          price={product.price} 
          key={`key-${product.id}`}
          country={product.country}
          imgSrc={`/images/products/${product.img}`} />
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
        <Col className='our-best__list products-list' >
          {ourBestProducts}
        </Col>
      </Container>
    </section>
  );
};

export default OurBest;
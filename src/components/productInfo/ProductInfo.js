import Stripes from '../stripes/Stripes';
import { Container } from 'react-bootstrap';
import './ProductInfo.scss';

const ProductInfo = ({id, products}) => {
  const currentItem = products.filter(product => product.id === id)[0];

  return (
    <article className="product-info">
      <Container>
        <div className="product-info__wrapper">
          <div className="product-info__box">
            <picture>
              <source 
                srcSet={`/images/products/${currentItem.img}.webp`} 
                type="image/webp"/>
              <img 
                src={`images/products/${currentItem.img}.jpg`} 
                alt={currentItem.img} 
                className="product-info__img" />
            </picture>
          </div>
          <div className="product-info__inner">
            <h3 className="product-info__title title">About it</h3>
            <Stripes />
            <p 
              className="product-info__text product-info__text--country">
              <span className="product-info__text-label">Country:</span> {currentItem.country}
            </p>
            <p className="product-info__text product-info__text--descr">
              <span className='product-info__text-label'>Description: </span>
              {currentItem.description}
            </p>
            <p className="product-info__price">
              <span className="product-info__text-label">Price: </span> 
              <span className="product-info__value">{currentItem.price}$</span>
            </p>
          </div>
        </div>
      </Container>
    </article>
  );
};

export default ProductInfo;
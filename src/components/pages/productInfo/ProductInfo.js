import Page404 from "../../pages/404";
import { useParams } from "react-router-dom";
import Stripes from "../../stripes/Stripes";
import { Container } from "react-bootstrap";
import "./ProductInfo.scss";

const ProductInfo = ({ products }) => {
  const { prodId } = useParams();
  const currentItem = products.filter((product) => product.id === +prodId)[0];

  return (
    <>
      {currentItem ? (
        <article className="product-info">
          <Container>
            <div className="product-info__wrapper">
              <div className="product-info__box">
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL +
                      `/images/products/${currentItem.img}.webp`
                    }
                    type="image/webp"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `images/products/${currentItem.img}.jpg`
                    }
                    alt={currentItem.img}
                    className="product-info__img"
                  />
                </picture>
              </div>
              <div className="product-info__inner">
                <h3 className="product-info__title title">About it</h3>
                <Stripes />
                <p className="product-info__text product-info__text--country">
                  <span className="product-info__text-label">Country:</span>{" "}
                  {currentItem.country}
                </p>
                <p className="product-info__text product-info__text--descr">
                  <span className="product-info__text-label">
                    Description:{" "}
                  </span>
                  {currentItem.description}
                </p>
                <p className="product-info__price">
                  <span className="product-info__text-label">Price: </span>
                  <span className="product-info__value">
                    {currentItem.price}$
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </article>
      ) : (
        <Page404 />
      )}
    </>
  );
};

export default ProductInfo;

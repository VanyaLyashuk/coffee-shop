import { Card } from 'react-bootstrap';
import './ProductCard.scss';

const ProductCard = ({id, imgSrc, price, title, country, onProductView}) => {
  return (
    <Card 
      id={id}
      onClick={() => onProductView(id)} >
      <div 
        className="card-box">
        <picture>
          <source srcSet={imgSrc+'.webp'} type="image/webp"/>
          <Card.Img variant="top" src={imgSrc+'.jpg'} />
        </picture>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {country}
        </Card.Text>
        <Card.Text>
          {price}$
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
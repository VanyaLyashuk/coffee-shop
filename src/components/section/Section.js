import ProductCard from "../productCard/ProductCard";
import Toolbar from '../toolbar/Toolbar';
import Info from '../info/Info';
import { Container } from 'react-bootstrap';
import './Section.scss';
import { Link } from "react-router-dom";

const Section = ({page, products, onFilterChange, onUpdateSearch, searchTerm}) => {
  const productsList = products.map(product => (
    <Link 
      to={`/${page}/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      key={`key-${product.id}`}>
      <ProductCard 
        id={product.id}
        imgSrc={`/images/products/${product.img}`}
        title={product.name}
        price={product.price}
        country={product.country}
      />
    </Link>
  ));

  return (
    <section className={`section ${page}-section`}>
      <Container>
        <Info page={page}/>
        <div className="delimiter"></div>
        {page === 'our-coffee' ? <Toolbar 
                                  onFilterChange={onFilterChange}
                                  onUpdateSearch={onUpdateSearch}
                                  searchTerm={searchTerm} /> : null}
        <div className="section__list products-list">
          {productsList}
        </div>
      </Container>
    </section>
  );
};

export default Section;
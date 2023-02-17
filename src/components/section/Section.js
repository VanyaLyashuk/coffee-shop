import ProductCard from "../productCard/ProductCard";
import Toolbar from '../toolbar/Toolbar';
import Info from '../info/Info';
import { Container } from 'react-bootstrap';
import './Section.scss';

const Section = ({page, products, onProductView, onFilterChange, onUpdateSearch, searchTerm}) => {
  const productsList = products.map(product => (
    <ProductCard 
      id={product.id}
      imgSrc={`/images/products/${product.img}`}
      title={product.name}
      price={product.price}
      country={product.country}
      key={`key-${product.id}`}
      onProductView={onProductView} />
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
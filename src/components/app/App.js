import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Promo from '../promo/Promo';
import About from '../about/About';
import OurBest from '../ourBest/OurBest';
import Footer from '../footer/Footer';
import Section from '../section/Section';
import ProductInfo from '../productInfo/ProductInfo';


function App({products}) {
  const [page, setPage] = useState('our-coffee');
  const [prodFilter, setProdFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [openedItem, setOpenedItem] = useState('');

  const onProductView = id => {
    setOpenedItem(id);
  }

  const showCurrentPage = (e) => {
    setPage(e.target.getAttribute('data-page'));
    setOpenedItem('');
  };

  const onUpdateSearch = term => {
    setSearchTerm(term);
  }

  const onSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  const onFilterChange = (e) => {
    setProdFilter(e.target.textContent);
  };

  const filteredProducts = (items, filter) => {
    return prodFilter !== '' ? 
      items.filter(item => {
        return item.country === filter
      }) : items;
  };
  

  const homeContent = page === 'home' ? 
                      <><About/> <OurBest 
                                  products={products}
                                  onProductView={onProductView} /></> : null;
  const mainContent = (page === 'our-coffee' || page === 'your-pleasure') ? 
                      <Section 
                        page={page} 
                        onProductView={onProductView}
                        products={filteredProducts(onSearch(products, searchTerm), prodFilter)} 
                        onFilterChange={onFilterChange}
                        onUpdateSearch={onUpdateSearch}
                        searchTerm={searchTerm} /> : null;
  return (
    <>
      <Promo
        page={page} 
        showCurrentPage={showCurrentPage} />
      <main className="main">
        {openedItem !== '' ? 
          <ProductInfo id={openedItem} products={products} /> : homeContent || mainContent}
      </main>
      <Footer showCurrentPage={showCurrentPage} />
    </>
  );
}

export default App;

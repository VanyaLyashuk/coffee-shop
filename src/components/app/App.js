import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, OurCoffee, YourPleasure, Page404, ProductInfo} from "../pages";
import Promo from "../promo/Promo";
import Footer from "../footer/Footer";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ products }) => {
  const [prodFilter, setProdFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onUpdateSearch = (term) => {
    setSearchTerm(term);
  };

  const onSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const onFilterChange = (e) => {
    setProdFilter(e.target.textContent);
  };

  const filteredProducts = (items, filter) => {
    return prodFilter !== ""
      ? items.filter((item) => {
          return item.country === filter;
        })
      : items;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage products={products} />} />
          <Route
            path="/:prodId"
            element={
              <>
                <Promo page="home"/>
                <ProductInfo products={products}/>
              </>
            }
          />
          {/* <Route path="/" element={<MainPage products={products} />}>
            <Route
              path=":prodId"
              element={
                <>
                  <Promo page="home"/>
                  <ProductInfo products={products}/>
                </>
              }
            />
          </Route> */}
          <Route
            path="/our-coffee"
            element={
              <OurCoffee
                page="our-coffee"
                products={filteredProducts(
                  onSearch(products, searchTerm),
                  prodFilter
                )}
                onFilterChange={onFilterChange}
                onUpdateSearch={onUpdateSearch}
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path="/our-coffee/:prodId"
            element={
              <>
                <Promo page="our-coffee"/>
                <ProductInfo id={1} products={products}/>
              </>
            }
          />
          <Route
            path="/your-pleasure"
            element={
              <YourPleasure
                page="your-pleasure"
                products={filteredProducts(
                  onSearch(products, searchTerm),
                  prodFilter
                )}
                onFilterChange={onFilterChange}
                onUpdateSearch={onUpdateSearch}
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path="/your-pleasure/:prodId"
            element={
              <>
                <Promo page="our-coffee"/>
                <ProductInfo id={1} products={products}/>
              </>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

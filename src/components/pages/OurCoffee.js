import Promo from "../promo/Promo";
import Section from "../section/Section";

const OurCoffee = ({
  products,
  searchTerm,
  onFilterChange,
  onUpdateSearch,
  page
}) => {
  return (
    <>
      <Promo page={page} />
      <Section
        page={page}
        products={products}
        onFilterChange={onFilterChange}
        onUpdateSearch={onUpdateSearch}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default OurCoffee;

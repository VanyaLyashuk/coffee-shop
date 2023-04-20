import Promo from "../promo/Promo";
import Section from "../section/Section";

const YourPleasure = ({
  onProductView,
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
        onProductView={onProductView}
        products={products}
        onFilterChange={onFilterChange}
        onUpdateSearch={onUpdateSearch}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default YourPleasure;

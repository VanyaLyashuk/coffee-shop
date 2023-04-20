import Promo from '../promo/Promo';
import About from '../about/About';
import OurBest from '../ourBest/OurBest';

const MainPage = ({products, onProductView}) => {
  return (
    <>
      <Promo page="home"/>
      <About />
      <OurBest products={products} onProductView={onProductView}/>
    </>
  )
}

export default MainPage

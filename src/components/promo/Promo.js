import Navigation from '../navigation/Navigation';
import Stripes from '../stripes/Stripes';
import './Promo.scss';

const Promo = ({ page, showCurrentPage }) => {
  const promoHomeContent = (
    <>
      <Stripes
        lightness="light"
        blockClassPrefix="promo" />
      <h2 className="promo__subtitle subtitle">We makes every day full of energy and taste</h2>
      <h2 className="promo__subtitle subtitle">Want to try our beans?</h2>
      <a className="promo__btn btn btn--white" href="#about-us">More</a>
    </>
  );
  const promoContent = page === 'home' ? promoHomeContent : null;
  const promoTitle = page === 'home' ? 
                    'Everything You Love About Coffee' : 
                     page === 'our-coffee' ? 
                    'Our Coffee' : 'For your Pleasure';

  return (
    <section className={"promo " + page}>
      <div className="container">
        <Navigation
          showCurrentPage={showCurrentPage} />
        <div className="promo__wrapper">
          <h1 className="promo__title title">{promoTitle}</h1>
          {promoContent}
        </div>
      </div>
    </section>
  );
};

export default Promo;
import Stripes from '../stripes/Stripes';
import './Info.scss';

const Info = ({page}) => {
  const infoTitle = page === 'our-coffee' ? 
                  "About our beans" : page === 'your-pleasure' ? 
                  "About our goods" : null;
  const infoImg = page === 'our-coffee' ? "info01" : 
                  page === 'your-pleasure' ? "info02" : null;
  return (
    <div className="info">
      <picture>
        <source srcSet={`/images/${infoImg}.webp`} type="image/webp"/>
        <img src={`/images/${infoImg}.jpg`} alt="girl with cup of coffee" className="info__img" />
      </picture>
      <div className="info__inner">
        <h2 className="info__title title">{infoTitle}</h2>
        <Stripes
          lightness="dark"
          blockClassPrefix="info" />
        <p className="info__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
        <p className="info__text">
        Afraid at highly months do things on at. Situation recommend objection do intention so&nbsp;questions.
        </p>
        <p className="info__text">As greatly removed calling pleased improve an. Last ask him cold feel</p>
        <p className="info__text">met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
      </div>
    </div>
  );
};

export default Info;
import './Stripes.scss';

const Stripes = ({lightness, blockClassPrefix}) => {
  const lightnessClass = lightness === 'light' ? 
                     "stripes--light" : "stripes--dark";
  const iconName = lightness === "light" ? 
                   "light-beans" : "dark-beans";
  return (
    <div className={`stripes ${lightnessClass}`} >
      <img 
        className={`${blockClassPrefix}__beans beans`}
        src={`/images/icons/${iconName}.svg`} 
        alt="coffee beans" />
    </div>
  );
};

export default Stripes;
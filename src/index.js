import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/App';

const DATA = [
  {id: 1,
   img: 'solimo-beans',
   name: "Solimo Coffee Beans 2 kg", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   price: 10.73,
   country: 'Brazil',
   best: true,
  },
  {id: 2,
    img: 'presto-beans',
    name: "Presto Coffee Beans 1 kg", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 15.99,
    country: 'Columbia',
    best: true,
  },
  {id: 3,
    img: 'aromistico-beans',
    name: "AROMISTICO Coffee 1 kg", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 6.99,
    country: 'Brazil',
    best: false,
  },
  {id: 4,
    img: 'stumptown-whole-bean-coffee',
    name: "Stumptown Whole Bean Coffee 12 oz", 
    description: "From all over the world, the beans come to us. A cup of Stumnptown Holler Mountain combines chocolatey Latin American textures with the brightness of fine east African beans. A full-bodied blend, Holler Mountain doses out a bright burst of citrus that pairs perfectly with creamy notes of caramel and hazelnut. Nearly 20 years ago, Stumptown Coffee Roasters began roasting exemplary coffee. Headquartered in Portland, Oregon, Stumptown is committed to sourcing, roasting and serving some of the best coffee in the world. Achieving B Corp status in 2018, Stumptown strives to be a leader in sustainability and is focused on making sincere and lasting contributions to the environment as well as to their employees and community.",
    price: 14.99,
    country: 'Kenya',
    best: true,
  },
  {id: 5,
    img: 'stumptown-ground-coffee',
    name: "Stumptown Ground Coffee 12 oz", 
    description: "From all over the world, the beans come to us. A cup of Stumnptown Holler Mountain combines chocolatey Latin American textures with the brightness of fine east African beans. A full-bodied blend, Holler Mountain doses out a bright burst of citrus that pairs perfectly with creamy notes of caramel and hazelnut. Nearly 20 years ago, Stumptown Coffee Roasters began roasting exemplary coffee. Headquartered in Portland, Oregon, Stumptown is committed to sourcing, roasting and serving some of the best coffee in the world. Achieving B Corp status in 2018, Stumptown strives to be a leader in sustainability and is focused on making sincere and lasting contributions to the environment as well as to their employees and community.",
    price: 12.99,
    best: false,
    country: 'Columbia',
  },
  {id: 6,
    img: 'real-good-coffee',
    name: "RGC Whole Bean Coffee 2 lbs", 
    description: "If you're looking to start your morning with an enticing and exotic cup of coffee, Real Good Coffee Co USDA Certified Organic whole bean coffee will hit all the right notes. This dark roast, bold single origin organic Sumatran whole bean coffee brings together flavors of bell pepper, cedar, and a lemony acidity that'll delight any coffee drinker. With a full body that's ripe with Sumatra's South Asian spice and pronounced roasted notes, but not overpowering, this is an invigorating cup of coffee.",
    price: 21.99,
    country: 'Brazil',
   best: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App products={DATA}/>
  </React.StrictMode>
);

import React from 'react';
import Card from '../../schemas/card.jsx';


const cardDataArray = [
  {
    image:'./assets/card1.png',
    heading: 'Discovering Hidden Germs In Europe Lesser Known Beautiful Cities',
    author: 'Author 1',
    date: 'January 1, 2024',
  },
  {
    image: './assets/card3.png',
    heading: 'Discovering Hidden Germs In Europe Lesser Known Beautiful Cities',
    author: 'Author 2',
    date: 'January 2, 2024',
  },
  {
    image: './assets/card3.png',
    heading: 'Discovering Hidden Germs In Europe Lesser Known Beautiful Cities',
    author: 'Author 3',
    date: 'January 3, 2024',
  },
];

const Homecard = () => {
  return (
  
 
    <div className="flex">
      {cardDataArray.map((cardData, index) => (
        <Card key={index} cardData={cardData} />
      ))}
    </div>

  );
};

export default Homecard;


 
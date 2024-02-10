import React from 'react';
import Card from './card.jsx';


const cardDataArray = [
  {
    image:'https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'Discovering Hidden Germs In Europe Lesser Known Beautiful Cities',
    author: 'Author 1',
    date: 'January 1, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'Discovering Hidden Germs In Europe Lesser Known Beautiful Cities',
    author: 'Author 2',
    date: 'January 2, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'Discovering Hidden Germs In Europe Lesser Known Beautiful Cities',
    author: 'Author 3',
    date: 'January 3, 2024',
  },
];

const Homecard = () => {
  return ( 
    <div className="grid grid-cols-3 mt-[120px]">
      {cardDataArray.map((cardData, index) => (
        <Card key={index} cardData={cardData} />
      ))}
    </div>

  );
};

export default Homecard;


 
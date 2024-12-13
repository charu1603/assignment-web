import React from 'react';
import './Cards.css';
import Image from 'next/image';

function Cards() {
  const card = [
    {
      id: "1",
     date:"30 Sep 2014",
      name: "Vinay",
    },
    {
      id: "2",
      date:"30 Sep 2014",
      name: "Vinay",
    },
    {
      id: "3",
      date:"30 Sep 2014",
      name: "Vinay",
    },
  ];

  return (
    <div className="cardsSection">
      <h2 className="cardsTitle">Real Moments</h2>
      <div className="flexCards">
        {card.map((item) => (
          <div className="card" key={item.id}>
            <Image src="/images/cards.png" alt={`Card ${item.name}`} width={240} height={400} />
            <div className="cardContent">
            <p>{item.name}</p>
            <p>{item.date}</p>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

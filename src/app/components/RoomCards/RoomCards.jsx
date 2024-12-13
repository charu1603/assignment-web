import React from 'react';
import './RoomCards.css';
import Image from 'next/image';

const RoomCards = () => {
  const roomCard = [
    {
      id: "1",
      date: "30 Sep 2014",
      paragraph: "Tucked away cosily in the lap of nature, this is the perfect destination getaway",
    },
    {
      id: "2",
      date: "30 Sep 2014",
      paragraph: "Tucked away cosily in the lap of nature, this is the perfect destination getaway",
    },
    {
      id: "3",
      date: "30 Sep 2014",
      paragraph: "The tourist-favourite Bhimtal Lake is only a stone's throw away.",
    },
  ];

  return (
    <div className="RoomcardsSection">
      <h2 className="RoomcardsTitle">Real Moments</h2>
      <div className="RoomflexCards">
        {roomCard.map((item) => (
          <div className="roomcard" key={item.id}>
     
      
              <Image
                src="/images/roomcard.png"
                alt="rromimg"
                width={260}
                height={160}
                objectFit="cover"
              />
        
            <div className="RoomcardContent">
              <span>{item.paragraph}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCards;

// Assurez-vous que cette ligne est présente et qu'elle n'apparaît qu'une seule fois dans votre fichier
import React, { useState } from 'react';


const Card = ({ id, onClick, imageSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    onClick(id);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={`card-face ${isFlipped? 'flipped' : ''}`}>
        <div className="card-front">
          <img src="/img/icon-amalya.png" />
        </div>
        <div className="card-back">
          <img src="/img/imagedos.jpg" alt="Dos de carte" />  
        </div>
      </div>
    </div>
  );
};

export default Card;
import React from "react";

import cardStar from "../media/star.svg";

const Card = function ({ data }) {
  return (
    <main className="cards-container">
      {data.map(function (cardItem) {
        return (
          <div className="card" key={cardItem.id}>
            <div className="card-img">
              <img src={cardItem.coverImg} alt="card profile" />
              {cardItem.location === "Online" && (
                <div className="available-item">
                  {cardItem.openSpots === 0 ? "Sold Out" : "Online"}
                </div>
              )}
            </div>

            <div className="card-ratings">
              <img src={cardStar} alt="card ratings" />
              <ul>
                <li>{cardItem.stats.rating}</li>
                <li>({cardItem.stats.reviewCount})</li>
                <li>·</li>
                <li>{cardItem.location}</li>
              </ul>
            </div>

            <p className="card-title">{cardItem.title}</p>

            <p className="card-price">
              From ${cardItem.price} <span>/ person</span>
            </p>
          </div>
        );
      })}
    </main>
  );
};

export default Card;

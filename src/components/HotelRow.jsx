import React from "react";
import PropTypes from "prop-types";

const HotelRow = ({ hotel }) => (
  <div className="hotel card">
    <div className="hotel-icon">
      <div className="image-bg">
        <img src={hotel.thumbUrl} alt={hotel.name} />
      </div>
    </div>
    <div className="hotel-info">
      <div className="hotel-name">
        <a href={hotel.url}>{hotel.name}</a>
      </div>
      <div className="hotel-price">
        {hotel.price ? `${hotel.price}円` : "空室なし"}
      </div>
      <div className="hotel-info-detail">
        <div className="detail hotel-star">
          <i className="far fa-star" />{hotel.reviewAverage ? hotel.reviewAverage : "なし"}
        </div>
        <div className="detail hotel-review">
          <i className="far fa-comment" />{hotel.reviewCount ? `${hotel.reviewCount}件` : "0件"}
        </div>
        <div className="detail hotel-distance">
          <i className="fa fa-road" />{`${hotel.distance}m`}
        </div>
      </div>
    </div>
  </div>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    place: PropTypes.number,
    reviewAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    distance: PropTypes.number
  }).isRequired
};

export default HotelRow;

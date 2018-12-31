import geolib from "geolib";

import Rakuten from "../utils/Rakuten";
require("dotenv").config();

export const searchHotelByLocation = location => {
  const params = {
    format: "json",
    applicationId: process.env.REACT_APP_RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng
  };
  return Rakuten.Travel.simpleHotelSearch(params).then(result =>
    result.data.hotels.map(hotel => {
      const basicInfo = hotel.hotel[0].hotelBasicInfo;
      const distance = geolib.getDistance(
        { latitude: location.lat, longitude: location.lng },
        { latitude: basicInfo.latitude, longitude: basicInfo.longitude }
      );

      return {
        id: basicInfo.hotelNo,
        name: basicInfo.hotelName,
        url: basicInfo.hotelInformationUrl,
        thumbUrl: basicInfo.hotelThumbnailUrl,
        price: basicInfo.hotelMinCharge,
        reviewAverage: basicInfo.reviewAverage,
        reviewCount: basicInfo.reviewCount,
        distance
      };
    })
  );
};
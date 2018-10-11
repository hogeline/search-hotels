import Rakuten from "../utils/Rakuten";
require("dotenv").config();

export const searchHotelByLocation = location => {
  const params = {
    applicationId: process.env.REACT_APP_RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng
  };
  return Rakuten.Travel.simpleHotelSearch(params).then(result =>
    result.data.hotels.map(hotel => {
      const basicInfo = hotel.hotel[0].hotelBasicInfo;
      return {
        id: basicInfo.hotelNo,
        name: basicInfo.hotelName,
        url: basicInfo.hotelInformationUrl
      };
    })
  );
};

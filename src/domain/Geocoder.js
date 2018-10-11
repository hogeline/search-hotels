import axios from "axios";
require("dotenv").config();

const GEOCODE_ENDPOINT = "https://maps.googleapis.com/maps/api/geocode/json";

export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, {
      params: {
        key: process.env.REACT_APP_GOOGLEMAP_API_KEY,
        address: place
      }
    })
    .then(results => {
      const data = results.data;
      const status = data.status;
      const result = data.results[0];
      if (typeof result === "undefined") {
        return { status };
      }
      const address = result.formatted_address;
      const location = result.geometry.location;
      return { status, address, location };
    });

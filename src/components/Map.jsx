import React from "react";
import PropTypes from "prop-types";

import ReactGoogleMapLoader from "react-google-maps-loader";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
require("dotenv").config();

const InnerMap = withGoogleMap(({ location, marker }) => (
  <GoogleMap defaultZoom={12} defaultCenter={location} center={location}>
    <Marker {...marker} />
  </GoogleMap>
));

const Map = ({ location }) => (
  <ReactGoogleMapLoader
    params={{
      key: process.env.REACT_APP_GOOGLEMAP_API_KEY,
      libraries: "places,geometry"
    }}
    render={(googleMaps, error) =>
      googleMaps ? (
        <div>
          <InnerMap
            containerElement={<div />}
            mapElement={<div className="map" />}
            location={location}
            marker={{ position: location }}
          />
          {error ? error : "Google Maps is loaded !"}
        </div>
      ) : (
        <div>
          {/*Check for network error so loading state ends if user lost connection.*/}
          {error === "Network Error" ? <p>{error}</p> : <p>isLoading...</p>}
        </div>
      )
    }
  />
);

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number.isRequired)
};

export default Map;

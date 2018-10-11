import React from "react";
import PropTypes from "prop-types";

import ReactGoogleMapLoader from "react-google-maps-loader";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
require("dotenv").config();

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.position}
    center={props.position}
  >
    <Marker {...props.marker} />
  </GoogleMap>
));

const Map = ({ lat, lng }) => {
  const position = { lat, lng };
  return (
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
              position={position}
              marker={{ position }}
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
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
};

Map.defaultProps = {
  lat: 35.6585805,
  lng: 139.7454329
};

export default Map;

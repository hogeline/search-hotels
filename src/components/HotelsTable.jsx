import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import HotelRow from "./HotelRow";
import HotelsClickableTh from "./HotelsClickableTh";
import Loading from "./Loading";

const HotelsTable = ({ hotels, isLoading }) => (
  <div className="hotels-table">
    <div className="hotels-table-navi">
      <HotelsClickableTh label={"値段"} sortKey={"price"} />
      <HotelsClickableTh label={"レビュー"} sortKey={"reviewAverage"} />
      <HotelsClickableTh label={"レビュー件数"} sortKey={"reviewCount"} />
      <HotelsClickableTh label={"距離"} sortKey={"distance"} />
    </div>
    {isLoading ? <div className="Loading"><Loading isLoading={isLoading} /></div> : hotels.map(hotel => (
      <HotelRow key={hotel.id} hotel={hotel} />
    ))}
  </div>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  isLoading: PropTypes.bool.isRequired
};

HotelsTable.defaultProps = {
  hotels: []
};

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

export default connect(state => ({
  hotels: sortedHotels(state.hotels, state.sortKey),
  isLoading: state.loadHotels
}))(HotelsTable);

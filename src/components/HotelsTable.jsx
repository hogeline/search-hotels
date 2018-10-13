import React from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import HotelRow from "./HotelRow";
import HotelsClickableTh from "./HotelsClickableTh";

const HotelsTable = ({ hotels, isLoading }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh label={"値段"} sortKey={"price"} />
        <HotelsClickableTh label={"レビュー"} sortKey={"reviewAverage"} />
        <HotelsClickableTh label={"レビュー件数"} sortKey={"reviewCount"} />
        <HotelsClickableTh label={"距離"} sortKey={"distance"} />
      </tr>
      {isLoading ? (
        <ReactLoading
          type={"spokes"}
          color={"#0000ff"}
          height={"70%"}
          width={"70%"}
        />
      ) : (
        hotels.map(hotel => <HotelRow key={hotel.id} hotel={hotel} />)
      )}
    </tbody>
  </table>
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

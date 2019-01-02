import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setSortKey } from "../actions";

const HotelsClickableTh = props => (
  <div
    className="HotelsClickableTh"
    onClick={() => props.setSortKey(props.sortKey)}
  >
    {props.label}
    {props.isSelected ? "▲" : ""}
  </div>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => ({
    isSelected: ownProps.sortKey === state.sortKey
  }),
  { setSortKey }
)(HotelsClickableTh);

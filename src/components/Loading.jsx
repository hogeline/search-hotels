import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";

const Loading = ({ isLoading }) =>
  isLoading ? <ReactLoading type={"spokes"} color={"#0000ff"} /> : null;

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loading;

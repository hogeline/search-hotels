import React from "react";
import PropTypes from "prop-types";

const SearchForm = props => (
  <form className="SearchForm" onSubmit={e => props.onSubmit(e)}>
    <input
      className="SearchForm-input"
      type="text"
      size="30"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <input className="SearchForm-submit" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;

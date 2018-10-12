import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setPlace, startSearch } from "../actions";

const SearchForm = props => (
  <form
    className="SearchForm"
    onSubmit={e => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch(props.place);
    }}
  >
    <input
      className="SearchForm-input"
      type="text"
      size="30"
      value={props.place}
      onChange={e => {
        e.preventDefault();
        props.setPlace(e.target.value);
      }}
    />
    <input className="SearchForm-submit" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired
};

export default connect(
  state => ({
    place: state.place
  }),
  { setPlace, startSearch }
)(SearchForm);

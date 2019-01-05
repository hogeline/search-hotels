import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setPlace, startSearch } from "../actions";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';

const SearchForm = props => (
  <form
    className="SearchForm"
    onSubmit={e => {
      e.preventDefault();
      props.history.push(`?place=${props.place}`);
      props.startSearch(props.place);
    }}
  >
    <MuiThemeProvider>
      <div className="choseDate">
        宿泊日：<i className="fa fa-calendar-alt" /><DatePicker hintText="日付を選択" mode="landscape" className="calender" />
      </div>
    </MuiThemeProvider>
    <div>
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
    </div>
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

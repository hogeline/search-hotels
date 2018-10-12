import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ErrorBoundary from "../components/ErrorBoundary";

import SearchForm from "../containers/SearchForm";
import GeocodeResult from "./GeocodeResult";
import Map from "./Map";
import HotelsTable from "./HotelsTable";
import { startSearch } from "../actions";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }
  render() {
    return (
      <div className="SearchPage">
        <h1 className="SearchPage-title">ホテル検索</h1>
        <SearchForm history={this.props.history} />
        <div className="SearchPage-result-left">
          <ErrorBoundary>
            <Map location={this.props.geocodeResult.location} />
          </ErrorBoundary>
          <div className="SearchPage-result-right">
            <GeocodeResult
              address={this.props.geocodeResult.address}
              location={this.props.geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable />
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult
});

export default connect(mapStateToProps)(SearchPage);

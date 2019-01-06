import React from "react";
// import PropTypes from 'prop-types';

import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

moment.locale('ja');

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <div className="choseDate">
        宿泊日：
        <i className="fa fa-calendar-alt" />
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="start-date" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="end-date" // PropTypes.string.isRequired,
          displayFormat='YYYY-MM-DD'
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        {console.log(this.state.focusedInput)}
      </div>
    );
  }
}
/*
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';

const Calendar = () => (
  <MuiThemeProvider>
    <div className="chosenDate">
      宿泊日：<i className="fa fa-calendar-alt" /><DatePicker hintText="日付を選択" mode="landscape" className="calender" />
    </div>
  </MuiThemeProvider>
);
*/
export default Calendar;
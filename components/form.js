import React from 'react'

class form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containerElement: this.props.containerElement,
      startDateLabel: "Start Date",
      endDateLabel: "End Date",
      primaryColor: "#f2d7eeff",
      secondaryColor: "#d3bcc0ff",
      selectionColor: "#a5668bff",
      shadowColor: "#0e103dff",
      troubleColor: "#69306dff",
      accentColor: "#69306dff",
    };

    this.handleSingleDateChange = this.handleSingleDateChange.bind(this);
    this.handlePresetMenuChange = this.handlePresetMenuChange.bind(this);
    this.handleAutoCloseChange = this.handleAutoCloseChange.bind(this);
    this.handleMilitaryTimeChange = this.handleMilitaryTimeChange.bind(this);
    this.handleTimePickerChange = this.handleTimePickerChange.bind(this);
    this.handleleadingTrailingDates =
      this.handleleadingTrailingDates.bind(this);
    this.handleclearDatesChange = this.handleclearDatesChange.bind(this);
    this.handleDefaultsChange = this.handleDefaultsChange.bind(this);
    this.handleStartDateLabelChange =
      this.handleStartDateLabelChange.bind(this);
    this.handleEndDateLabelChange = this.handleEndDateLabelChange.bind(this);
    this.handlePrimaryColorChange = this.handlePrimaryColorChange.bind(this);
    this.handleSecondaryColorChange =
      this.handleSecondaryColorChange.bind(this);
    this.handleShadowColorChange = this.handleShadowColorChange.bind(this);
    this.handleSelectionColorChange =
      this.handleSelectionColorChange.bind(this);
    this.handleAccentColorChange = this.handleAccentColorChange.bind(this);
    this.handleTroubleColorChange = this.handleTroubleColorChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateDatepicker(this.state);
    console.log(this.state);
  }
  handleSingleDateChange(event) {
    this.setState({ singleDate: event.target.checked });
  }
  handlePresetMenuChange(event) {
    this.setState({ presetMenu: event.target.checked });
  }
  handleAutoCloseChange(event) {
    // console.table(this.state)
    this.setState({ autoClose: event.target.checked });
  }
  handleMilitaryTimeChange(event) {
    this.setState({ militaryTime: event.target.checked });
  }
  handleTimePickerChange(event) {
    this.setState({ timePicker: event.target.checked });
  }
  handleStartDateLabelChange(event) {
    this.setState({ startDateLabel: event.target.value });
  }
  handleEndDateLabelChange(event) {
    this.setState({ endDateLabel: event.target.value });
  }
  handleclearDatesChange(event) {
    this.setState({ clearDates: event.target.checked });
  }
  handleleadingTrailingDates(event) {
    this.setState({ leadingTrailingDates: event.target.checked });
  }
  handleDefaultsChange(event) {
    this.setState({ defaults: event.target.checked });
  }
  handlePrimaryColorChange(event) {
    this.setState({ primaryColor: event.target.value });
  }
  handleShadowColorChange(event) {
    this.setState({ shadowColor: event.target.value });
  }
  handleSelectionColorChange(event) {
    this.setState({ selectionColor: event.target.value });
  }
  handleAccentColorChange(event) {
    this.setState({ accentColor: event.target.value });
  }
  handleTroubleColorChange(event) {
    this.setState({ troubleColor: event.target.value });
  }
  handleSecondaryColorChange(event) {
    this.setState({ secondaryColor: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <p>
          Choose options to configure the moment-datepicker with, and click
          submit to configure.
        </p>
        <hr />
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={this.state.singleDate}
            value={this.state.singleDate}
            onChange={this.handleSingleDateChange}
          />
          <span> singleDate - <code>true</code> if you want the datepicker to pick only one date.</span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={this.state.presetMenu}
            value={this.state.presetMenu}
            onChange={this.handlePresetMenuChange}
          />
          <span> presetMenu - <code>true</code> if you want to allow a hamburger menu of preset dates or date ranges.</span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            value={this.state.autoClose}
            checked={this.state.autoClose}
            onChange={this.handleAutoCloseChange}
          />
          <span> autoClose - <code>true</code> if you want the datepicker to close after selections are made. </span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            value={this.state.militaryTime}
            checked={this.state.militaryTime}
            onChange={this.handleMilitaryTimeChange}
          />
          <span> militaryTime - <code>true</code> if you want the datepicker to display 24hr time - <code>HH:MM</code>.</span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            value={this.state.timePicker}
            checked={this.state.timePicker}
            onChange={this.handleTimePickerChange}
          />
          <span> timePicker - <code>true</code> if you want to allow users to also choose a time range.</span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            value={this.state.leadingTrailingDates}
            checked={this.state.leadingTrailingDates}
            onChange={this.handleleadingTrailingDates}
          />
          <span> leadingTrailingDates - <code>true</code> if you want to show next/previous months dates on the first/last week of the current month.</span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            value={this.state.clearDates}
            checked={this.state.clearDates}
            onChange={this.handleclearDatesChange}
          />
          <span> clearDates - <code>true</code> if you want the "X" button to reset the calendar dates instead of close the calendar UI. </span>
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            value={this.state.defaults}
            checked={this.state.defaults}
            onChange={this.handleDefaultsChange}
          />
          <span> defaults  - <code>true</code> if you want to prefill Date(s) if none chosen.</span>
        </label>
        <hr />
        <label>
        <span> startDateLabel: </span>
          <input
            type="text"
            className="formText"
            value={this.state.startDateLabel}
            onChange={this.handleStartDateLabelChange}
          />
        </label>
        <label>
          <span> endDateLabel: </span>
          <input
            className="formText"
            type="text"
            value={this.state.endDateLabel}
            onChange={this.handleEndDateLabelChange}
          />
        </label>
        <hr />
        <label className="colorPicker">
          <span> Primary Color </span>
          <input
            type="color"
            value={this.state.primaryColor}
            onChange={this.handlePrimaryColorChange}
          />
        </label>
        <label className="colorPicker">
          <span> Secondary Color </span>
          <input
            type="color"
            value={this.state.secondaryColor}
            onChange={this.handleSecondaryColorChange}
          />
        </label>
        <label className="colorPicker">
          <span> Shadow Color</span>
          <input
            type="color"
            value={this.state.shadowColor}
            onChange={this.handleShadowColorChange}
          />
        </label>
        <label className="colorPicker">
          <span> Selection Color </span>
          <input
            type="color"
            value={this.state.selectionColor}
            onChange={this.handleSelectionColorChange}
          />
        </label>
        <label className="colorPicker">
          <span> Accent Color </span>
          <input
            type="color"
            value={this.state.accentColor}
            onChange={this.handleAccentColorChange}
          />
        </label>
        <label className="colorPicker">
          <span> Trouble Color </span>
          <input
            type="color"
            value={this.state.troubleColor}
            onChange={this.handleTroubleColorChange}
          />
        </label>
        <hr />
        <input id="submitOptions" className="submit" type="submit" />
      </form>
    );
  }
}
export default form;

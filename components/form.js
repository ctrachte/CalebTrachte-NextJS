import React from 'react'

class form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { singleDate: false, presetMenu: true, autoClose: false, militaryTime: false, timePicker:true, startDateLabel: "Start Date", endDateLabel: "End Date" }

    this.handleSingleDateChange = this.handleSingleDateChange.bind(this)
    this.handlePresetMenuChange = this.handlePresetMenuChange.bind(this)
    this.handleAutoCloseChange = this.handleAutoCloseChange.bind(this)
    this.handleMilitaryTimeChange = this.handleMilitaryTimeChange.bind(this)
    this.handleTimePickerChange = this.handleTimePickerChange.bind(this)
    this.handleStartDateLabelChange = this.handleStartDateLabelChange.bind(this)
    this.handleEndDateLabelChange = this.handleEndDateLabelChange.bind(this)
  }

  handleSingleDateChange(event) {
    this.setState({ singleDate: event.target.value })
  }
  handlePresetMenuChange(event) {
    this.setState({ presetMenu: event.target.value })
  }
  handleAutoCloseChange(event) {
    // console.table(this.state)
    this.setState({ autoClose: event.target.value })
  }
  handleMilitaryTimeChange(event) {
    this.setState({ militaryTime: event.target.value })
  }
  handleTimePickerChange(event) {
    this.setState({ timePicker: event.target.value })
  }
  handleStartDateLabelChange(event) {
    this.setState({ startDateLabel: event.target.value })
  }
  handleEndDateLabelChange(event) {
    this.setState({ endDateLabel: event.target.value })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Datepicker Options:</h3>
        <label>
          singleDate:
          <input
            type="checkbox"
            value={this.state.singleDate}
            onChange={this.handleSingleDateChange}
          />
        </label>
        <label>
          presetMenu:
          <input
            type="checkbox"
            value={this.state.presetMenu}
            onChange={this.handlePresetMenuChange}
          />
        </label>
        <label>
          autoClose:
          <input
            type="checkbox"
            value={this.state.autoClose}
            onChange={this.handleAutoCloseChange}
          />
        </label>
        <label>
          militaryTime:
          <input
            type="checkbox"
            value={this.state.militaryTime}
            onChange={this.handleMilitaryTimeChange}
          />
        </label>
        <label>
          timePicker:
          <input
            type="checkbox"
            value={this.state.timePicker}
            onChange={this.handleTimePickerChange}
          />
        </label>
        <label>
          startDateLabel:
          <input
            type="text"
            value={this.state.startDateLabel}
            onChange={this.handleStartDateLabelChange}
          />
        </label>
        <label>
          endDateLabel:
          <input
            type="text"
            value={this.state.endDateLabel}
            onChange={this.handleEndDateLabelChange}
          />
        </label>
      </form>
    )
  }
}
export default form

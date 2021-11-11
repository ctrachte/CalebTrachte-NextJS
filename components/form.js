import React from 'react'

class form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      singleDate: false,
      presetMenu: true,
      autoClose: false,
      militaryTime: false,
      timePicker: true,
      startDateLabel: 'Start Date',
      endDateLabel: 'End Date',
    }

    this.handleSingleDateChange = this.handleSingleDateChange.bind(this)
    this.handlePresetMenuChange = this.handlePresetMenuChange.bind(this)
    this.handleAutoCloseChange = this.handleAutoCloseChange.bind(this)
    this.handleMilitaryTimeChange = this.handleMilitaryTimeChange.bind(this)
    this.handleTimePickerChange = this.handleTimePickerChange.bind(this)
    this.handleStartDateLabelChange = this.handleStartDateLabelChange.bind(this)
    this.handleEndDateLabelChange = this.handleEndDateLabelChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.table(this.state)
  }
  handleSingleDateChange(event) {
    this.setState({ singleDate: event.target.checked })
    console.table(event.target.checked)
    console.table(this.state)
  }
  handlePresetMenuChange(event) {
    this.setState({ presetMenu: event.target.checked })
    console.table(this.state)
  }
  handleAutoCloseChange(event) {
    // console.table(this.state)
    this.setState({ autoClose: event.target.checked })
    console.table(this.state)
  }
  handleMilitaryTimeChange(event) {
    this.setState({ militaryTime: event.target.checked })
    console.table(this.state)
  }
  handleTimePickerChange(event) {
    this.setState({ timePicker: event.target.checked })
    this.setState({ timePicker: event.target.checked })

    console.table(this.state)
  }
  handleStartDateLabelChange(event) {
    this.setState({ startDateLabel: event.target.value })
    console.table(this.state)
  }
  handleEndDateLabelChange(event) {
    this.setState({ endDateLabel: event.target.value })
    console.table(this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Datepicker Options:</h3>
        <label>
          singleDate:
          <input
            type="checkbox"
            checked={this.state.singleDate}
            value={this.state.singleDate}
            onChange={this.handleSingleDateChange}
          />
        </label>
        <label>
          presetMenu:
          <input
            type="checkbox"
            checked={this.state.presetMenu}
            value={this.state.presetMenu}
            onChange={this.handlePresetMenuChange}
          />
        </label>
        <label>
          autoClose:
          <input
            type="checkbox"
            value={this.state.autoClose}
            checked={this.state.autoClose}
            onChange={this.handleAutoCloseChange}
          />
        </label>
        <label>
          militaryTime:
          <input
            type="checkbox"
            value={this.state.militaryTime}
            checked={this.state.militaryTime}
            onChange={this.handleMilitaryTimeChange}
          />
        </label>
        <label>
          timePicker:
          <input
            type="checkbox"
            value={this.state.timePicker}
            checked={this.state.timePicker}
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
        <input type="submit" />
      </form>
    )
  }
}
export default form

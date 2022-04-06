import Markdown from "markdown-to-jsx";

export default function Value() {
    const valueExample = `
    // get values from datepicker: Datepicker.value() // returns [startDate, endDate] 
    // set values in datepicker:
    Datepicker.value([new Date(), new Date()]) // returns null, sets date range.`
    const startDateExample = `
    // get start date  from datepicker:
     Datepicker.startDate()
    // set start date  in datepicker:
    Datepicker.startDate(new Date())`
    const endDateExample =  `
    // get end date  from datepicker:
     Datepicker.endDate()
    // set end date  in datepicker:
    Datepicker.endDate(new Date())`
    const closeCalendarExample = `Datepicker.closeCalendar()`
    const openCalendarExample = `Datepicker.openCalendar()`
    const resetCalendarExample = `Datepicker.resetCalendar()`

  return (
    <div className="scrollable">
      <h3 id="methods">Methods</h3>
      <table>
        <thead>
          <tr>
            <th>Method Name</th>
            <th>Method Description</th>
            <th>First Param</th>
            <th>Second Param</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>.value()</code>
            </td>
            <td>
              Invoke at any time with no parameters to return an array of dates
              containing start and end date. Invoke with params to set a date
              range.{" "}
            </td>
            <td>
              <div>Array of Date or Moment objects</div>
              <code>[new Date(), Moment()]</code>
            </td>
            <td>
              <div>(String) Moment format</div>
              <code>"MM/DD/YYYY hh:mm:ss"</code>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {valueExample}
              </Markdown>
            </td>
          </tr>
          <tr>
            <td>
              <code>.startDate()</code>
            </td>
            <td>
            Invoke at any time with no parameters to return single start date.
               Invoke with a single Moment or js Date object to set start date.
            </td>
            <td>
              <div>JS Date object</div>
              <code>new Date()</code>
              <div>Moment object</div>
              <code>Moment()</code>
            </td>
            <td>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {startDateExample}
              </Markdown>
            </td>
          </tr>
          <tr>
            <td>
              <code>.endDate()</code>
            </td>
            <td>
               Invoke at any time with no parameters to return single end date.
               Invoke with a single Moment or js Date object to set end date.
            </td>
            <td>
              <div>JS Date object</div>
              <code>new Date()</code>
              <div>Moment object</div>
              <code>Moment()</code>
            </td>
            <td>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {endDateExample}
              </Markdown>
            </td>
          </tr>
          <tr>
            <td>
              <code>.closeCalendar()</code>
            </td>
            <td>
               Invoke at any time to close the calendar UI (pop-up element).
            </td>
            <td>
            </td>
            <td>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {closeCalendarExample}
              </Markdown>
            </td>
          </tr>
          <tr>
            <td>
              <code>.openCalendar()</code>
            </td>
            <td>
              Invoke at any time to open the calendar UI (pop-up element).
            </td>
            <td>
            </td>
            <td>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {openCalendarExample}
              </Markdown>
            </td>
          </tr>
          <tr>
            <td>
              <code>.resetCalendar()</code>
            </td>
            <td>
              Invoke at any time to reset the calendar to its default state (determined by initial options).
            </td>
            <td>
            </td>
            <td>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {resetCalendarExample}
              </Markdown>
            </td>
          </tr>
          <tr>
            <td>
            <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {`.snapTo(Date(), isVisible)`}
              </Markdown>
            </td>
            <td>
              Invoke at any time to snap the calendar pop-up UI to a specific date.
            </td>


            <td>
            <div>JS Date object</div>
              <code>new Date()</code>
              <div>Moment object</div>
              <code>Moment()</code>
            </td>
            <td>
            <div><code>isVisble</code> - set to
              - <code>false</code> -
              if calendar is not visible, or should not be visible currently. 
            </div>
            </td>
            <td className={"exampleImplementation"}>
              <Markdown options={{ wrapper: "pre", forceWrapper: true }}>
                {resetCalendarExample}
              </Markdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

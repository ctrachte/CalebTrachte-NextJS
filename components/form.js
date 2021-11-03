import Form, { Field } from "rc-field-form";
import React from "react";

class form extends React.Component {

  setRef = (form) => {
    // Form instance here
  };

  render() {
    return (
      <Form
        onFinish={(values) => {
          console.log("Finish:", values);
        }}
      >
        <Field name="username">
          <input placeholder="Username" />
        </Field>
        <Field name="password">
          <input placeholder="Password" />
        </Field>

        <button>Submit</button>
      </Form>
    );
  }
}

export default form;

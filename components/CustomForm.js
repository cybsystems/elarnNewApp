import React, { Component } from "react";
import { Form, Input, Label, Item } from "native-base";
export default class CustomForm extends Component {
  render() {
    const { formItems = {}, style = {} } = this.props;

    return (
      <Form style={{ width: 300 }}>
        {Object.keys(formItems).map(formItem => {
          const { label, keyboardType = "default" } = formItems[formItem];
          return (
            <Item key={formItem} style={style.input} floatingLabel>
              <Label style={style.label}>
                {label}
              </Label>
              <Input keyboardType={keyboardType} style={style.input} />
            </Item>
          );
        })}
      </Form>
    );
  }
}

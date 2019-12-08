import React, { Component } from "react";
import { Form, Input, Label, Item, Icon } from "native-base";
export default class CustomForm extends Component {
  render() {
    const { formItems = {}, style = {} } = this.props;

    return (
      <Form style={{ width: 300 }}>
        {Object.keys(formItems).map(formItem => {
          const { label, keyboardType = "default", icon } = formItems[formItem];
          return (
            <Item key={formItem} style={style.input} floatingLabel>
              <Icon name={icon} />
              <Label style={style.label}>
                {label}
              </Label>
              <Input
                onChangeText={txt => this.props.onFormChange(txt, formItem)}
                keyboardType={keyboardType}
                style={style.input}
              />
            </Item>
          );
        })}
      </Form>
    );
  }
}

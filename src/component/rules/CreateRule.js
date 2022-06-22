import * as React from "react";
import {
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
} from "react-admin";

export const CreateRule = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

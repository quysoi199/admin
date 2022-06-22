import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const AlbumEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput disabled source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

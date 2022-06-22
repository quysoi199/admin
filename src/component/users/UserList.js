import {
  Datagrid,
  EditButton,
  EmailField,
  List,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";
import MyUrlField from "../../MyUrlField";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const UserList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
      <EditButton />
    </Datagrid>
  </List>
);

import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const AlbumList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

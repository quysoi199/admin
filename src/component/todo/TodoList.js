import {
  BooleanField,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const TodoList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="completed" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

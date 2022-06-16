import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
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

export const AlbumCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

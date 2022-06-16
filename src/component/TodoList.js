import {
  BooleanField,
  BooleanInput,
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

export const TodoEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <BooleanInput source="completed" />
    </SimpleForm>
  </Edit>
);

export const CreateTodo = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <BooleanInput source="completed" />
    </SimpleForm>
  </Create>
);

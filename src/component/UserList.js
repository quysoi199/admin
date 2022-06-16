import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  EmailField,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";
import MyUrlField from "../MyUrlField";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

// export const UserList = ({ record }) => {
//   const { isLoading, error } = useGetOne("users", { id: record.id });
//   if (isLoading) {
//     return <Loading />;
//   }
//   if (error) {
//     return <p>ERROR</p>;
//   }
//   return (
//     <List filters={postFilters}>
//       <Datagrid rowClick="edit">
//         <TextField source="id" />
//         <TextField source="name" />
//         <EmailField source="email" />
//         <TextField source="phone" />
//         <MyUrlField source="website" />
//         <TextField source="company.name" />
//         <EditButton />
//       </Datagrid>
//     </List>
//   );
// };

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

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const UseEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);

export const CreateUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Create>
);

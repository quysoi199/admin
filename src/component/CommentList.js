import {
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  EmailField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";

// const PostTitle = () => {
//   const record = useRecordContext();
//   return <span>Post {record ? `"${record.title}"` : ""}</span>;
// };

export const CommentList = () => (
  <>
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="postId" reference="posts">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="body" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  </>
);

// export const CommentEdit = () => (
//   <Edit>
//     <Edit title={<PostTitle />}>
//       <SimpleForm>
//         <TextInput source="id" />
//         <TextInput sx={{ width: "30%" }} source="name" />
//         <TextInput source="email" />
//         <TextInput sx={{ width: "100%" }} source="body" />
//       </SimpleForm>
//     </Edit>
//   </Edit>
// );

export const CommentEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="postId" reference="posts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput sx={{ width: "30%" }} source="name" />
      <TextInput source="email" />
      <TextInput sx={{ width: "100%" }} source="body" />
    </SimpleForm>
  </Edit>
);

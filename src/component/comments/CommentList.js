import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

// const PostTitle = () => {
//   const record = useRecordContext();
//   return <span>Post {record ? `"${record.title}"` : ""}</span>;
// };

export const CommentList = () => (
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
);

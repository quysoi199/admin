import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

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

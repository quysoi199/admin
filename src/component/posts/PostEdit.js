import * as React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  useRecordContext,
  TopToolbar,
  ListButton,
} from "react-admin";
// Chinh tieu de trang trung vs title
const PostTitle = () => {
  const record = useRecordContext();
  return <span> Post {record ? `"${record.title}"` : ""}</span>;
};

const PostEditActions = () => (
  <TopToolbar>
    <ListButton />
  </TopToolbar>
);

export const PostEdit = () => (
  <Edit>
    <Edit title={<PostTitle />} actions={<PostEditActions />}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  </Edit>
);

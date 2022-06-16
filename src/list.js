import * as React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  useRecordContext,
  SimpleList,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
  TabbedShowLayout,
  Tab,
  TopToolbar,
  Button,
  useShowContext,
  ShowButton,
} from "react-admin";
// Chinh tieu de trang trung vs title
const PostTitle = () => {
  const record = useRecordContext();
  return <span> Post {record ? `"${record.title}"` : ""}</span>;
};

const PostTitleShow = () => {
  const record = useRecordContext();
  const { isLoading } = useShowContext();
  if (!isLoading) return null;
  return <span>{record.title}</span>;
};

const ShowWrapper = ({ children }) => (
  <Box sx={{ margin: 2, border: "solid 1px grey" }}>{children}</Box>
);

const customAction = () => {};

const PostShowActions = () => (
  <TopToolbar>
    <EditButton />
    {/* Add your custom actions */}
    <Button color="primary" onClick={customAction}>
      Custom Action
    </Button>
  </TopToolbar>
);

export const PostList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid rowClick="edit">
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
          <ShowButton />
          <DeleteButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PostEdit = () => (
  <Edit>
    <Edit title={<PostTitle />}>
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

export const CreatePost = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostShow = () => (
  <Show
    title={
      //"Post view"
      PostTitleShow
    }
    actions={<PostShowActions />}
    component={ShowWrapper}
  >
    {/* <Card>
      <div>
        Title: <PostTitle />
      </div>
    </Card> */}
    <TabbedShowLayout>
      <Tab label="Main">
        {/* <SimpleShowLayout> */}
        <TextField source="title" />
        <TextField source="teaser" />
        <RichTextField source="body" />
        <DateField label="Publication date" source="published_at" />
        {/* </SimpleShowLayout> */}
      </Tab>
    </TabbedShowLayout>
  </Show>
);

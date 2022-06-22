import * as React from "react";
import { Box } from "@mui/material";
import {
  TextField,
  EditButton,
  useRecordContext,
  Show,
  RichTextField,
  DateField,
  TabbedShowLayout,
  Tab,
  TopToolbar,
  Button,
  useShowContext,
} from "react-admin";

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

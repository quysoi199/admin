import * as React from "react";
import { useMediaQuery } from "@mui/material";
import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
  SimpleList,
  ShowButton,
} from "react-admin";

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

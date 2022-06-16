import {
  Datagrid,
  DeleteButton,
  ImageField,
  List,
  ReferenceField,
  TextField,
  UrlField,
} from "react-admin";
import TestTheme from "./TestTheme";

export const PhotoList = () => (
  <TestTheme>
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="albumId" reference="albums">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <UrlField source="url" />
        <ImageField source="thumbnailUrl" />
        <DeleteButton />
      </Datagrid>
    </List>
  </TestTheme>
);

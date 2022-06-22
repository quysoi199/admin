import * as React from "react";
import { Admin, Resource } from "react-admin";

import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import NotFound from "./NotFound";
import { defaultTheme } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { TodoCreate, TodoList, TodoEdit } from "./component";
import { AlbumCreate, AlbumList } from "./component";
import { PostList, PostEdit, CreatePost, PostShow } from "./component";
import { UseEdit, UserList, CreateUser } from "./component";
import { CommentList, CommentEdit } from "./component";
import { PhotoList } from "./component";
import { Layouts } from "./layout/Layout";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  const theme = {
    ...defaultTheme,
    palette: {
      mode: "light",
    },
  };

  return (
    <div>
      <Admin
        layout={Layouts}
        catchAll={NotFound}
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
        disableTelemetry
        theme={theme}
      >
        <Resource
          options={{ label: "Users" }}
          name="users"
          list={UserList}
          edit={UseEdit}
          create={CreateUser}
        />
        <Resource
          options={{ label: "Posts" }}
          name="posts"
          list={PostList}
          create={CreatePost}
          edit={PostEdit}
          show={PostShow}
        />
        <Resource
          options={{ label: "Todo" }}
          name="todos"
          list={TodoList}
          create={TodoCreate}
          edit={TodoEdit}
        />

        <Resource options={{ label: "Photo" }} name="photos" list={PhotoList} />
        <Resource
          options={{ label: "Comment" }}
          name="comments"
          list={CommentList}
          edit={CommentEdit}
        />
        <Resource
          options={{ label: "Albums" }}
          name="albums"
          list={AlbumList}
          create={AlbumCreate}
        />
      </Admin>
    </div>
  );
};

export default App;

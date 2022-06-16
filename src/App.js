import * as React from "react";
import {
  Admin,
  EditGuesser,
  Loading,
  Resource,
  useResourceContext,
} from "react-admin";
import { createBrowserHistory as createHistory } from "history";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import RedditIcon from "@mui/icons-material/Reddit";
import SavingsIcon from "@mui/icons-material/Savings";
import FortIcon from "@mui/icons-material/Fort";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
// import dataProvider from "./dataProvider";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import NotFound from "./NotFound";
import { defaultTheme } from "react-admin";

import {
  TodoList,
  AlbumList,
  CommentList,
  PhotoList,
  UserList,
  UseEdit,
  CreateUser,
  CommentEdit,
  TodoEdit,
  CreateTodo,
  AlbumEdit,
  AlbumCreate,
  MyLayout,
} from "./component/index";
import { PostList, PostEdit, CreatePost, PostShow } from "./list";

// const label = { inputProps: { "aria-label": "Switch demo" } };
// // const dataProvider = simpleRestProvider(
// //   "https://62a00920a9866630f8059f68.mockapi.io/todos"
// // );
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  const ResourceName = () => {
    const resource = useResourceContext();
    return <>{resource}</>;
  };

  // const [loading, setLoading] = React.useState(false);
  // const [data, setData] = React.useState([]);
  // React.useEffect(async () => {
  //   setLoading(true);
  //   const res = await dataProvider;
  //   await setData(res);
  //   setLoading(false);
  // }, [dataProvider]);

  // const authProvider = {
  //   // send username and password to the auth server and get back credentials
  //   login: (params) => Promise.resolve(),
  //   // when the dataProvider returns an error, check if this is an authentication error
  //   checkError: (error) => Promise.resolve(),
  //   // when the user navigates, make sure that their credentials are still valid
  //   checkAuth: (params) => Promise.resolve(),
  //   // remove local credentials and notify the auth server that the user logged out
  //   logout: () => Promise.resolve(),
  //   // get the user's profile
  //   getIdentity: () => Promise.resolve(),
  //   // get the user permissions (optional)
  //   getPermissions: () => Promise.resolve(),
  // };

  const theme = {
    ...defaultTheme,
    palette: {
      mode: "light", // Switching the dark mode on is a single property value change.
    },
  };

  const history = createHistory();

  return (
    <>
      {/* <Loading loadingPrimary={Loading} /> */}
      <Admin
        catchAll={NotFound}
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
        disableTelemetry
        theme={theme}
        history={history}
        // layout={MyLayout}
        // loginPage={MyLoginPage}
      >
        <Resource
          options={{ label: "Users" }}
          name="users"
          list={UserList}
          icon={UserIcon}
          edit={UseEdit}
          create={CreateUser}
        />
        <Resource
          options={{ label: "Posts" }}
          name="posts"
          list={PostList}
          create={CreatePost}
          edit={PostEdit}
          icon={PostIcon}
          show={PostShow}
        />
        <Resource
          options={{ label: "Todo" }}
          name="todos"
          list={TodoList}
          icon={RedditIcon}
          edit={TodoEdit}
          create={CreateTodo}
        />

        <Resource
          options={{ label: "Photo" }}
          name="photos"
          list={PhotoList}
          icon={SavingsIcon}
        />
        <Resource
          options={{ label: "Comment" }}
          name="comments"
          list={CommentList}
          icon={FortIcon}
          edit={CommentEdit}
        />
        <Resource
          options={{ label: "Albums" }}
          name="albums"
          list={AlbumList}
          icon={ParaglidingIcon}
          edit={AlbumEdit}
          create={AlbumCreate}
        />
      </Admin>
      {/* )} */}
    </>
  );
};

export default App;

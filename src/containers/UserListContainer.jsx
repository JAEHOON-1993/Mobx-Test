import { inject, observer } from "mobx-react";
import { useCallback } from "react";
import UserList from "../components/UserList";
import axios from "axios";

const UserListContainer = ({ userStore }) => {
  //   const getUsers = useCallback(async () => {
  //     try {
  //       userStore.pending();
  //       const response = await axios.get("https://api.github.com/users");
  //       userStore.success(response.data);
  //     } catch (e) {
  //       userStore.fail(e);
  //     }
  //   }, [userStore]);

  const getUsers = useCallback(() => {
    // userStore.getUsers();
    userStore.getUsersFlow();
  }, [userStore]);
  const users = userStore.state.users;

  return <UserList getUsers={getUsers} users={users} />;
};

export default inject("userStore")(observer(UserListContainer));

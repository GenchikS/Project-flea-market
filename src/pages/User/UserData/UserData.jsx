import AddUserPages from "../../../components/User/FormUserDate/AddUserPages/AddUserPages.jsx";
import DeleteUserPages from "../../../components/User/FormUserDate/DeleteUserPages/DeleteUserPages.jsx";
import UpdateUserPages from "../../../components/User/FormUserDate/UpdateUserPages/UpdateUserPages.jsx";
import IsClick from "../../../components/IsClick/IsClick.jsx";

export default function UserDate({
  setIsClick,
  constants,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
}) {
  return (
    <div>
      {constants.userAdd && (
        <AddUserPages
          textTitle="Form Add user"
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
          setUserUpdate={setUserUpdate}
          setDeleteUser={setDeleteUser}
        />
      )}
      {constants.userUpdate && (
        <UpdateUserPages
          textTitle="Form update user"
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
          setUserUpdate={setUserUpdate}
          setDeleteUser={setDeleteUser}
        />
      )}
      {constants.deleteUser && (
        <DeleteUserPages
          textTitle="Form delete user"
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
          setUserUpdate={setUserUpdate}
          setDeleteUser={setDeleteUser}
        />
      )}
      {!constants.userAdd && !constants.userUpdate && !constants.deleteUser && (
        <IsClick setIsClick={setIsClick} />
      )}
    </div>
  );
}

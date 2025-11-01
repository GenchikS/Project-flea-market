import { useEffect, useState } from "react";
import css from "./App.module.css";
import AddUserPages from "./components/FormUserDate/AddUserPages/AddUserPages.jsx";
import IsClick from "./components/IsClick/IsClick.jsx";
import UserPages from "./pages/User/UserPages/UserPages.jsx";
// import UpdateUserPages from "./pages/User/UpdateUserPages/UpdateUserPages.jsx";
import UserDate from "./pages/User/UserDate/UserDate.jsx";

function App() {
  const [isClick, setIsClick] = useState(true);
  const [userAdd, setUserAdd] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {}, [isClick, userAdd, userUpdate, deleteUser]);

  return (
    <div className={css.containerApp}>
      {isClick && (
        <UserPages
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
          setUserUpdate={setUserUpdate}
          setDeleteUser={setDeleteUser}
        />
      )}
      {!isClick && (
        <UserDate
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
          setUserUpdate={setUserUpdate}
          setDeleteUser={setDeleteUser}
          constants={{ userAdd, userUpdate, deleteUser, isClick, color }}
        />
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import css from "./App.module.css";
import UserPages from "./pages/User/UserPages/UserPages.jsx";
import UserDate from "./pages/User/UserDate/UserDate.jsx";
import axios from "axios";

function App() {
  const [isClick, setIsClick] = useState(true);
  const [userAdd, setUserAdd] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://project-flea-market-bd.onrender.com/users`
      );
      console.log('response', response);
    }
    fetchUser();
  }, [isClick, userAdd, userUpdate, deleteUser]);

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

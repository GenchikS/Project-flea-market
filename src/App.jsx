import { useEffect, useState } from "react";
import css from "./App.module.css";
import UserPages from "./pages/User/UserPages/UserPages.jsx";
import UserDate from "./pages/User/UserDate/UserDate.jsx";
import axios from "axios";

// http://localhost:3000/users
function App() {
  const [isClick, setIsClick] = useState(true);
  const [userAdd, setUserAdd] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [color, setColor] = useState("");
  const [loadig, setLoading]= useState(false)
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
try {
        setLoading(true);
      const response = await axios.get(
        "https://project-flea-market-bd.onrender.com/users"
      );
      setResponse(response.data.data);
      // console.log('response', response.data.data);
} catch (error) {
  setError(true);
}
finally {
  setLoading(false);
}
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
          response={response}
          loadig={loadig}
          error={error}
        />
      )}
      {!isClick && (
        <UserDate
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
          setUserUpdate={setUserUpdate}
          setDeleteUser={setDeleteUser}
          constants={{ userAdd, userUpdate, deleteUser, isClick, color, response }}
        />
      )}
    </div>
  );
}

export default App;

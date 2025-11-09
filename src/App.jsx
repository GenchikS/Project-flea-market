import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import css from "./App.module.css";
import UserPages from "./pages/User/UserPages/UserPages.jsx";
import {fetchArticleUserAll} from "./articles-api.js";
import Done from "./components/Done/Done.jsx";
import DeleteUser from "./components/User/FormUserDate/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserDate/AddUserPages/AddUser.jsx";
import UpdataUser from "./components/User/FormUserDate/UpdateUser/UpdataUser.jsx";

// http://localhost:3000/users
function App() {
  const [item, setItems] = useState([]);
  const [loadig, setLoading] = useState(false);
 
  {useEffect(() => {
    async function fetchUser() {
      setItems([]);
      setLoading(true);
      try {
        const response = await fetchArticleUserAll();
        setItems(response);
      } catch (error) {
        // setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);
  }
// console.log(`items1`, items);
  return (
    <div className={css.containerApp}>
      <Routes>
        <Route
          path="/"
          element={<UserPages item={item} component={{ loadig }} />}
        />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updata" element={<UpdataUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/done" element={<Done />} />
        {/* </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import {Routes, Route} from "react-router-dom"
import css from "./App.module.css";
import UserPages from "./pages/User/UserPages/UserPages.jsx";
import Done from "./components/Done/Done.jsx";
import DeleteUser from "./components/User/FormUserDate/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserDate/AddUserPages/AddUser.jsx";
import UpdataUser from "./components/User/FormUserDate/UpdateUser/UpdataUser.jsx";

// http://localhost:3000/users
function App() {

  return (
    <div className={css.containerApp}>
      <Routes>
        <Route path="/" element={<UserPages />}/>
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updata" element={<UpdataUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/done" element={<Done />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

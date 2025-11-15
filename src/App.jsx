import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import UserPages from "./pages/User/UserPages.jsx";
import Done from "./components/Done/Done.jsx";
import DeleteUser from "./components/User/FormUserData/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserData/AddUser/AddUser.jsx";
import UpdataUser from "./components/User/FormUserData/UpdateUser/UpdataUser.jsx";
import AnnouncementPages from "./pages/AnnouncementPages/AnnouncementPages.jsx";
import AddAnnouncement from "./components/Announcement/FormAnnouncementData/AddAnnouncement/AddAnnouncement.jsx";
import DoneAnnouncement from "./components/Announcement/FormAnnouncementData/DoneAnnouncement/DoneAnnouncement.jsx";
import LoginPages from "./pages/LoginPages/LoginPages.jsx";

// http://localhost:3000/users
// http://localhost:3000/announcements
function App() {
  return (
    <div className={css.containerApp}>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/users" element={<UserPages />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/updata" element={<UpdataUser />} />
        <Route path="/user/delete" element={<DeleteUser />} />
        <Route path="/user/done" element={<Done />} />
        <Route path="/announcements" element={<AnnouncementPages />} />
        <Route path="/announcement/add" element={<AddAnnouncement />} />
        {/* <Route path="/updata/announcement" element={<UpdataUser />} /> */}
        {/* <Route path="/delete/announcement" element={<DeleteUser />} /> */}
        <Route path="/announcement/done" element={<DoneAnnouncement />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

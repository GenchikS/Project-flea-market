import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import UserPages from "./pages/UserPages/UserPages.jsx";
import Done from "./components/Done/Done.jsx";
import {DeleteUser} from "./components/User/FormUserData/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserData/AddUser/AddUser.jsx";
import UpdataUser from "./components/User/FormUserData/UpdateUser/UpdataUser.jsx";
import AnnouncementPages from "./pages/AnnouncementPages/AnnouncementPages.jsx";
import AddAnnouncement from "./components/Announcement/FormAnnouncementData/AddAnnouncement/AddAnnouncement.jsx";
import DoneAnnouncement from "./components/Announcement/FormAnnouncementData/DoneAnnouncement/DoneAnnouncement.jsx";
import LoginPages from "./pages/LoginPages/LoginPages.jsx";
import UpdataAnnouncement from "./components/Announcement/FormAnnouncementData/UpdataAnnouncement/UpdataAnnouncement.jsx";
import { useState } from "react";
import { DeleteAnnouncement } from "./components/Announcement/FormAnnouncementData/DeleteAnnouncement/DeleteAnnouncement.jsx";
import { HomePages } from "./pages/HomePages/HomePages.jsx";

// http://localhost:3000/users
// http://localhost:3000/announcements
function App() {
  const [marker, setMarker] = useState(false);

  return (
    <div className={css.containerApp}>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/user/login" element={<LoginPages />} />

        
        <Route path="/users" element={<UserPages />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/updata" element={<UpdataUser />} />
        <Route path="/user/delete" element={<DeleteUser />} />
        <Route path="/user/done" element={<Done />} />
        <Route
          path="/announcements"
          element={<AnnouncementPages setMarker={setMarker} />}
        />
        <Route
          path="/announcement/add"
          element={<AddAnnouncement marker={marker} />}
        />
        <Route
          path="/announcement/updata"
          element={<UpdataAnnouncement marker={marker} />}
        />
        <Route path="/announcement/delete" element={<DeleteAnnouncement />} />
        <Route path="/announcement/done" element={<DoneAnnouncement />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

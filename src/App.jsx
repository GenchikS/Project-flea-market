import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
// import UserPages from "./pages/UserPages/UserPages.jsx";
// import DoneUser from "./components/DoneUser/DoneUser.jsx";
import {DeleteUser} from "./components/User/FormUserData/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserData/AddUser/AddUser.jsx";
import UpdataUser from "./components/User/FormUserData/UpdateUser/UpdataUser.jsx";
// import AnnouncementPages from "./pages/AnnouncementPages/AnnouncementPages.jsx";
import AddAnnouncement from "./components/Announcement/FormAnnouncementData/AddAnnouncement/AddAnnouncement.jsx";
import DoneAnnouncement from "./components/Announcement/FormAnnouncementData/DoneAnnouncement/DoneAnnouncement.jsx";
// import LoginPages from "./components/Auth/LoginComponent/LoginComponent.jsx";
import UpdataAnnouncement from "./components/Announcement/FormAnnouncementData/UpdataAnnouncement/UpdataAnnouncement.jsx";
import { useState } from "react";
import { DeleteAnnouncement } from "./components/Announcement/FormAnnouncementData/DeleteAnnouncement/DeleteAnnouncement.jsx";
import { HomePages } from "./pages/HomePages/HomePages.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";  
import { ProductAnnouncementPages } from "./pages/ProductAnnouncementPages/ProductAnnouncementPages.jsx";
import AutoComponent from "./components/ProductAnnouncement/AutoComponent/AutoComponent.jsx";
import WorkComponent from "./components/ProductAnnouncement/WorkComponent/WorkComponent.jsx";
import HousingComponent from "./components/ProductAnnouncement/HousingComponent/HousingComponent.jsx";
import ServicesComponent from "./components/ProductAnnouncement/ServicesComponent/ServicesComponent.jsx";
import AnimalsComponent from "./components/ProductAnnouncement/AnimalsComponent/AnimalsComponent.jsx";
import DifferentsComponent from "./components/ProductAnnouncement/DifferentsComponent/DifferentsComponent.jsx";
import GiftsComponent from "./components/ProductAnnouncement/GiftsComponent/GiftsComponent.jsx";  
import { AuthPages } from "./pages/AuthPages/AuthPages.jsx";
import LoginComponent from "./components/Auth/LoginComponent/LoginComponent.jsx";
import RegisterComponent from "./components/Auth/RegisterComponent/RegisterComponent.jsx";
import DoneAuth from "./components/Auth/DoneAuth/DoneAuth.jsx";
import { AdminPages } from "./pages/AdminPages/AdminPages.jsx";
import { AdminUserPages } from "./pages/AdminUserPages/AdminUserPages.jsx";
import DoneUser from "./components/DoneUser/DoneUser.jsx";

// http://localhost:3000/users
// http://localhost:3000/announcements
function App() {
  const [marker, setMarker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.containerApp}>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/announcement" element={<ProductAnnouncementPages />}>
          <Route path="auto" element={<AutoComponent />} />
          <Route path="work" element={<WorkComponent />} />
          <Route path="housing" element={<HousingComponent />} />
          <Route path="animals" element={<AnimalsComponent />} />
          <Route path="services" element={<ServicesComponent />} />
          <Route path="differents" element={<DifferentsComponent />} />
          <Route path="gifts" element={<GiftsComponent />} />
        </Route>
        <Route path="/auth" element={<AuthPages />}>
          <Route path="login" element={<LoginComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="done" element={<DoneAuth />} />
        </Route>
        <Route
          path="/admin"
          element={
            <AdminPages
              setMarker={setMarker}
              pathTo={"/admin"}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          }
        >
          <Route
            path="announcement/add"
            element={
              <AddAnnouncement
                marker={marker}
                pathTo={"/admin"}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="announcement/updata"
            element={
              <UpdataAnnouncement
                marker={marker}
                pathTo={"/admin"}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="announcement/delete"
            element={
              <DeleteAnnouncement
                pathTo={"/admin"}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="announcement/done"
            element={<DoneAnnouncement setIsModalOpen={setIsModalOpen} />}
          />
        </Route>
        <Route
          path="/admin/users"
          element={
            <AdminUserPages
              setMarker={setMarker}
              pathTo={"/admin/users"}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          }
        >
          <Route
            path="add"
            element={
              <AddUser
                marker={marker}
                pathTo={"/admin/users"}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="updata"
            element={
              <UpdataUser
                marker={marker}
                pathTo={"/admin/users"}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="delete"
            element={
              <DeleteUser
                pathTo={"/admin/users"}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="done"
            element={<DoneUser setIsModalOpen={setIsModalOpen} />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

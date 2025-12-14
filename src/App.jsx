import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import {DeleteUser} from "./components/User/FormUserData/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserData/AddUser/AddUser.jsx";
import UpdataUser from "./components/User/FormUserData/UpdateUser/UpdataUser.jsx";
import AddAnnouncement from "./components/Announcement/FormAnnouncementData/AddAnnouncement/AddAnnouncement.jsx";
import DoneAnnouncement from "./components/Announcement/FormAnnouncementData/DoneAnnouncement/DoneAnnouncement.jsx";
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
import DoneAuth from "./components/Auth/DoneAuth/DoneAuth.jsx";
import { AdminPages } from "./pages/AdminPages/AdminPages.jsx";
import { AdminUserPages } from "./pages/AdminUserPages/AdminUserPages.jsx";
import DoneUser from "./components/DoneUser/DoneUser.jsx";
import GardenComponent from "./components/ProductAnnouncement/GardenComponent/GardenComponent.jsx";
import ErrorUser from "./components/User/FormUserData/ErrorUser/ErrorUser.jsx";
import ErrorAnnouncement from "./components/Announcement/FormAnnouncementData/ErrorAnnouncement/ErrorAnnouncement.jsx";
import ErrorAuth from "./components/Auth/ErrorAuth/ErrorAuth.jsx";
import RegisterAddUser from "./components/Auth/RegisterAddUser/RegisterAddUser.jsx";
import LoginUser from "./components/Auth/LoginUser/LoginUser.jsx";
import { LogoutUser } from "./components/Auth/LogoutUser/LogoutUser.jsx";
// import axios from "axios";

// http://localhost:3000/users
// http://localhost:3000/announcements

function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false)
  const [marker, setMarker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(``)

  return (
    <div className={css.containerApp}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePages
              user={user}
              isLogin={isLogin}
              setUser={setUser}
              setIsLogin={setIsLogin}
              token={token}
            />
          }
        />
        <Route
          path="/announcement"
          element={<ProductAnnouncementPages user={user} isLogin={isLogin} />}
        >
          <Route path="auto" element={<AutoComponent />} />
          <Route path="work" element={<WorkComponent />} />
          <Route path="housing" element={<HousingComponent />} />
          <Route path="garden" element={<GardenComponent />} />
          <Route path="services" element={<ServicesComponent />} />
          <Route path="animals" element={<AnimalsComponent />} />
          <Route path="differents" element={<DifferentsComponent />} />
          <Route path="gifts" element={<GiftsComponent />} />
        </Route>

        <Route path="/auth" element={<AuthPages user={user} />}>
          <Route
            path="login"
            element={
              <LoginUser
                setUser={setUser}
                setIsLogin={setIsLogin}
                setToken={setToken}
              />
            }
          />
          <Route
            path="register"
            element={<RegisterAddUser setError={setError} />}
          />
          <Route
            path="logout"
            element={
              <LogoutUser
                // user={user}
                token={token}
                setUser={setUser}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route path="done" element={<DoneAuth />} />
          <Route
            path="error"
            element={
              <ErrorAuth error={error} setIsModalOpen={setIsModalOpen} />
            }
          />
        </Route>
        <Route
          path="/admin"
          element={
            <AdminPages
              setMarker={setMarker}
              pathTo={"/admin"}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              user={user}
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
                setError={setError}
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
                setError={setError}
              />
            }
          />
          <Route
            path="announcement/delete"
            element={
              <DeleteAnnouncement
                pathTo={"/admin"}
                setIsModalOpen={setIsModalOpen}
                setError={setError}
              />
            }
          />
          <Route
            path="announcement/done"
            element={<DoneAnnouncement setIsModalOpen={setIsModalOpen} />}
          />
          <Route
            path="announcement/error"
            element={
              <ErrorAnnouncement
                error={error}
                setIsModalOpen={setIsModalOpen}
              />
            }
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
              user={user}
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
                setError={setError}
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
                setError={setError}
              />
            }
          />
          <Route
            path="delete"
            element={
              <DeleteUser
                pathTo={"/admin/users"}
                setIsModalOpen={setIsModalOpen}
                setError={setError}
              />
            }
          />
          <Route
            path="done"
            element={<DoneUser setIsModalOpen={setIsModalOpen} />}
          />
          <Route
            path="error"
            element={
              <ErrorUser error={error} setIsModalOpen={setIsModalOpen} />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

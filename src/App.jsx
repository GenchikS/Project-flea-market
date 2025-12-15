import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import {DeleteUser} from "./components/User/FormUserData/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserData/AddUser/AddUser.jsx";
import UpdataUser from "./components/User/FormUserData/UpdateUser/UpdataUser.jsx";
import AddAnnouncement from "./components/Announcement/FormAnnouncementData/AddAnnouncement/AddAnnouncement.jsx";
import DoneAnnouncement from "./components/Announcement/FormAnnouncementData/DoneAnnouncement/DoneAnnouncement.jsx";
import UpdataAnnouncement from "./components/Announcement/FormAnnouncementData/UpdataAnnouncement/UpdataAnnouncement.jsx";
import { Suspense, useState } from "react";
import { DeleteAnnouncement } from "./components/Announcement/FormAnnouncementData/DeleteAnnouncement/DeleteAnnouncement.jsx";
import { HomePages } from "./pages/HomePages/HomePages.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";  
import AutoComponent from "./components/ProductAnnouncement/AutoComponent/AutoComponent.jsx";
import WorkComponent from "./components/ProductAnnouncement/WorkComponent/WorkComponent.jsx";
import HousingComponent from "./components/ProductAnnouncement/HousingComponent/HousingComponent.jsx";
import ServicesComponent from "./components/ProductAnnouncement/ServicesComponent/ServicesComponent.jsx";
import AnimalsComponent from "./components/ProductAnnouncement/AnimalsComponent/AnimalsComponent.jsx";
import DifferentsComponent from "./components/ProductAnnouncement/DifferentsComponent/DifferentsComponent.jsx";
import GiftsComponent from "./components/ProductAnnouncement/GiftsComponent/GiftsComponent.jsx";  
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
import Layout from "./components/Layout/Layout.jsx";
// import axios from "axios";

// http://localhost:3000/users
// http://localhost:3000/announcements

function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false)
  const [marker, setMarker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [token, setToken] = useState(null);
  const [error, setError] = useState(``)

  return (
    <div className={css.containerApp}>
      <Layout user={user}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/announcement/auto" element={<AutoComponent />} />
            <Route path="/announcement/work" element={<WorkComponent />} />
            <Route
              path="/announcement/housing"
              element={<HousingComponent />}
            />
            <Route path="/announcement/garden" element={<GardenComponent />} />
            <Route
              path="/announcement/services"
              element={<ServicesComponent />}
            />
            <Route
              path="/announcement/animals"
              element={<AnimalsComponent />}
            />
            <Route
              path="/announcement/differents"
              element={<DifferentsComponent />}
            />
            <Route path="/announcement/gifts" element={<GiftsComponent />} />
            <Route
              path="/auth/login"
              element={<LoginUser setUser={setUser} setIsLogin={setIsLogin} />}
            />
            <Route
              path="/auth/register"
              element={<RegisterAddUser setError={setError} />}
            />
            <Route
              path="/auth/logout"
              element={<LogoutUser setUser={setUser} setIsLogin={setIsLogin} />}
            />
            <Route path="/auth/done" element={<DoneAuth />} />
            <Route
              path="/auth/error"
              element={
                <ErrorAuth error={error} setIsModalOpen={setIsModalOpen} />
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPages
                  setMarker={setMarker}
                  pathTo={"/admin"}
                  setIsModalOpen={setIsModalOpen}
                />
              }
            />
            <Route
              path="/admin/announcement/add"
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
              path="/admin/announcement/updata"
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
              path="/admin/announcement/delete"
              element={
                <DeleteAnnouncement
                  pathTo={"/admin"}
                  setIsModalOpen={setIsModalOpen}
                  setError={setError}
                />
              }
            />
            <Route
              path="/admin/announcement/done"
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
            {/* </Route> */}
            <Route
              path="/admin/users"
              element={
                <AdminUserPages
                  setMarker={setMarker}
                  pathTo={"/admin/users"}
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
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;

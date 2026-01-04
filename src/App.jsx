import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { DeleteUser } from "./components/User/FormUserData/DeleteUser/DeleteUser.jsx";
import AddUser from "./components/User/FormUserData/AddUser/AddUser.jsx";
import UpdataUser from "./components/User/FormUserData/UpdateUser/UpdataUser.jsx";
import AddAnnouncement from "./components/Announcement/FormAnnouncementData/AddAnnouncement/AddAnnouncement.jsx";
import DoneAnnouncement from "./components/Announcement/FormAnnouncementData/DoneAnnouncement/DoneAnnouncement.jsx";
import UpdataAnnouncement from "./components/Announcement/FormAnnouncementData/UpdataAnnouncement/UpdataAnnouncement.jsx";
import { Suspense, useEffect, useState } from "react";
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
import GardenComponent from "./components/ProductAnnouncement/GardenComponent/GardenComponent.jsx";
import TechnicsComponent from "./components/ProductAnnouncement/TechnicsComponent/TechnicsComponent.jsx";
import DoneAuth from "./components/Auth/DoneAuth/DoneAuth.jsx";
import { AdminPages } from "./pages/AdminPages/AdminPages.jsx";
import { AdminUserPages } from "./pages/AdminUserPages/AdminUserPages.jsx";
import DoneUser from "./components/DoneUser/DoneUser.jsx";
import ErrorUser from "./components/User/FormUserData/ErrorUser/ErrorUser.jsx";
import ErrorAnnouncement from "./components/Announcement/FormAnnouncementData/ErrorAnnouncement/ErrorAnnouncement.jsx";
import ErrorAuth from "./components/Auth/ErrorAuth/ErrorAuth.jsx";
import RegisterAddUser from "./components/Auth/RegisterAddUser/RegisterAddUser.jsx";
import LoginUser from "./components/Auth/LoginUser/LoginUser.jsx";
import { LogoutUser } from "./components/Auth/LogoutUser/LogoutUser.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { fetchArticleRefreshUser } from "./api/articles-api.js";
import { UserHome } from "./pages/UserHome/UserHome.jsx";
import UserLoading from "./components/UserHomeComponent/UserLoading.jsx";
import AddAnnouncementUser from "./components/User/AnnouncementUser/AddAnnouncementUser/AddAnnouncementUser.jsx";
import UpdataAnnouncementUser from "./components/User/AnnouncementUser/UpdataAnnouncementUser/UpdataAnnouncementUser.jsx";
import DoneAnnouncementUser from "./components/User/AnnouncementUser/DoneAnnouncementUser/DoneAnnouncementUser.jsx";
import ErrorAnnouncementUser from "./components/User/AnnouncementUser/ErrorAnnouncementUser/ErrorAnnouncementUser.jsx";
import AllAnnouncementComponent from "./components/ProductAnnouncement/AllAnnouncementComponent/AllAnnouncementComponent.jsx";
import { UserDeleteAnnouncement } from "./components/User/UserDeleteAnnouncement/UserDeleteAnnouncement.jsx";


// http://localhost:3000/users
// http://localhost:3000/announcements

function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [marker, setMarker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [idAnnouncement, setIdAnnouncement] = useState(null);
  const [error, setError] = useState(``);

  const token = JSON.parse(localStorage.getItem("Project-flea-market"));
  // console.log(`token`, token);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchArticleRefreshUser(token.token);
        // console.log(`response`, response);
        setUser(response);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  // console.log(`user Home`, user);

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
            <Route
              path="/announcement/technics"
              element={<TechnicsComponent />}
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
            <Route path="/announcement/gifts" element={<GiftsComponent />} />
            <Route
              path="/announcement/differents"
              element={<DifferentsComponent />}
            />
            <Route
              path="/announcement/all"
              element={<AllAnnouncementComponent />}
            />
            <Route
              path="/auth/login"
              element={
                <LoginUser
                  setUser={setUser}
                  setIsLogin={setIsLogin}
                  setError={setError}
                />
              }
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
              path="/user/home"
              element={
                user._id ? (
                  <UserHome
                    user={user}
                    setMarker={setMarker}
                    setIsModalOpen={setIsModalOpen}
                    setIdAnnouncement={setIdAnnouncement}
                  />
                ) : (
                  <UserLoading />
                )
              }
            />
            <Route
              path="/user/announcement/add"
              element={
                <AddAnnouncementUser
                  marker={false}
                  pathTo={"/user/home"}
                  setIsModalOpen={setIsModalOpen}
                  setError={setError}
                  user={user}
                  setResponseMessage={setResponseMessage}
                />
              }
            />
            <Route
              path="/user/announcement/updata"
              element={
                <UpdataAnnouncementUser
                  marker={true}
                  pathTo={"/user/home"}
                  setIsModalOpen={setIsModalOpen}
                  setError={setError}
                  user={user}
                  idAnnouncement={idAnnouncement}
                  setResponseMessage={setResponseMessage}
                />
              }
            />

            <Route
              path="/user/announcement/delete"
              element={
                <UserDeleteAnnouncement
                  pathTo={"/user/home"}
                  setIsModalOpen={setIsModalOpen}
                  setError={setError}
                  idAnnouncement={idAnnouncement}
                  setResponseMessage={setResponseMessage}
                />
              }
            />
            <Route
              path="/user/announcement/done"
              element={
                <DoneAnnouncementUser
                  setIsModalOpen={setIsModalOpen}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route
              path="/user/announcement/error"
              element={
                <ErrorAnnouncementUser
                  error={error}
                  setIsModalOpen={setIsModalOpen}
                />
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
                  setResponseMessage={setResponseMessage}
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
                  setResponseMessage={setResponseMessage}
                />
              }
            />
            <Route
              path="/admin/announcement/delete"
              element={
                <DeleteAnnouncement
                  pathTo={"/admin"}
                  setIsModalOpen={setIsModalOpen}
                  setResponseMessage={setResponseMessage}
                  setError={setError}
                />
              }
            />
            <Route
              path="/admin/announcement/done"
              element={
                <DoneAnnouncement
                  setIsModalOpen={setIsModalOpen}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route
              path="/admin/announcement/error"
              element={
                <ErrorAnnouncement
                  error={error}
                  setIsModalOpen={setIsModalOpen}
                />
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminUserPages
                  setMarker={setMarker}
                  pathTo={"/admin/users"}
                  setIsModalOpen={setIsModalOpen}
                />
              }
            />
            <Route
              path="/admin/users/add"
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
              path="/admin/users/updata"
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
              path="/admin/users/delete"
              element={
                <DeleteUser
                  pathTo={"/admin/users"}
                  setIsModalOpen={setIsModalOpen}
                  setError={setError}
                />
              }
            />
            <Route
              path="admin/users/done"
              element={<DoneUser setIsModalOpen={setIsModalOpen} />}
            />
            <Route
              path="admin/users/error"
              element={
                <ErrorUser error={error} setIsModalOpen={setIsModalOpen} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;

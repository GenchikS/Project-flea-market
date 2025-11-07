import css from "./UserPages.module.css";
import UserInfoCard from "../../../components/User/UserInfoTable/UserInfoCard.jsx";
import MyComponent from "../../../components/Loader/Loader.jsx";
import UserChange from "../../../components/User/FormUserDate/UserChange/UserChange.jsx";
import UserFormSearch from "../../../components/User/UserFormSearch/UserFormSearch.jsx";
import { NavLink } from "react-router-dom";
// import MyComponent from "../../../components/Loader/MyComponent.jsx";

export default function UserPages({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
  response,
  loadig,
  error,
  handleSearchId,
  handleSearchName,
  handleSearchEmail,
  userData,
}) {
  const handleClick = (evn) => {
    setIsClick(false);
    switch (evn) {
      case `addUser`:
        // console.log(`evn addUser`, evn);
        setUserAdd(true);
        break;
      case `updateUser`:
        // console.log(`evn updateUser`, evn);
        setUserUpdate(true);
        break;
      case `deleteUser`:
        // console.log(`evn deleteUser`, evn);
        setDeleteUser(true);
        break;
      default:
        // console.log(`evn userPage`, evn);
        break;
    }
    return;
  };

  return (
    <div className={css.containerUserPages}>
      <h4>UserPages</h4>
      <div className={css.containerUserFilterListButtonUserPages}>
        <div className={css.containerUserPageTitleSearch}>
          <div className={css.containerUserSearch}>
            <UserFormSearch
              placeholder="Search name"
              name="name"
              handleSearch={handleSearchName}
            />
            <UserFormSearch
              placeholder="Search email"
              name="name"
              handleSearch={handleSearchEmail}
            />
            <UserFormSearch
              placeholder="Search id"
              name={"name"}
              handleSearch={handleSearchId}
            />
          </div>
        </div>
        <nav>
          <NavLink to="/update">
            <UserChange handleClick={handleClick} />
          </NavLink>
        </nav>
      </div>

      <div className={css.containerUserInfo}>
        <h4 className={css.userCollectionsTitle}>User collections:</h4>
        {loadig && (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Loding data ...</p>
            <MyComponent />
          </div>
        )}
        {response.length > 0 && (
          <UserInfoCard userData={userData} response={response} />
        )}
        {error && <p>Server error!</p>}
      </div>
    </div>
  );
}

import css from "./UserPages.module.css";
import UserInfoCard from "../../../components/User/UserInfoTable/UserInfoCard.jsx";
import MyComponent from "../../../components/Loader/Loader.jsx";
import UserChange from "../../../components/User/FormUserDate/UserChange/UserChange.jsx";
import UserFormSearch from "../../../components/User/UserFormSearch/UserFormSearch.jsx";
import {
  fetchArticleUserName,
  fetchArticleUserEmail,
  fetchArticleUserId,
} from "../../../articles-api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPages({
  item,
  component}) {
  // console.log(`items2`, items.length);
 const navigate = useNavigate();
  const [itemsSourch, setItemsSourch] = useState(null);
  const [error, setError] = useState(false);
  const { loadig } = component;

 const handleSearchName = async (name) => {
    // console.log(`name`, name);
    try {
    const response = await fetchArticleUserName(name);
      // console.log(`response`, response);
      setItemsSourch(response);
     if (!response) {
      setItemsSourch([]);
       (true);
      return;
      }
    } catch (error) {
      setError(true);
    } finally {
      // setLoading(false);
    }
  };

  const handleSearchEmail = async (name) => {
    //  console.log(`name`, name);
    try {
      const response = await fetchArticleUserEmail(name);
      setItemsSourch(response);
      
      if (!response) {
        setItemsSourch([]);
        setError(true);
      return;
      }
  } catch (error) {
      setError(true);
    } finally {
      // setLoading(false);
    }
  };

  const handleSearchId = async (name) => {
    console.log(`name`, name);

    try {
    const response = await fetchArticleUserId(name);
      // console.log(`response`, response);

      setItemsSourch(response);
      if (!response) {
        setItemsSourch([]);
        setError(true);
        return;
      }
    } catch (error) {
      setError(true);
    } finally {
      // setLoading(false);
    }
  };

  const handleClick = (evn) => {
    // console.log(`evn`, evn);
    switch (evn) {
      case `addUser`:
        navigate(`/adduser`);
        // console.log(`evn addUser`, evn);
        break;
      // case `updateUser`:
    //     // console.log(`evn updateUser`, evn);
    //     setUserUpdate(true);
    //     break;
      case `deleteUser`:
        navigate(`/delete`);
        console.log(`evn deleteUser`, evn);
      break;
    //   default:
    //     // console.log(`evn userPage`, evn);
    //     break;
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
            <UserChange handleClick={handleClick} />
        </div>
        <div className={css.containerUserInfo}>
        <h4 className={css.userCollectionsTitle}>User collections:</h4>

        {item &&
          (!itemsSourch ? (
            <UserInfoCard item={item} />
          ) : (
            <UserInfoCard itemsArrey={itemsSourch} />
          ))}
        {loadig && (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Loding data ...</p>
            <MyComponent />
          </div>
        )}
        {error && <p>User not found!</p>}
      </div>
    </div>
  );
}

import css from "./UserPages.module.css";
import { useEffect, useState } from "react";
import UserInfoCard from "../../../components/User/UserInfoTable/UserInfoCard.jsx";
import MyComponent from "../../../components/Loader/Loader.jsx";
import UserChange from "../../../components/User/FormUserDate/UserChange/UserChange.jsx";
import UserFormSearch from "../../../components/User/UserFormSearch/UserFormSearch.jsx";
import {
  fetchArticleUserName,
  fetchArticleUserEmail,
  fetchArticleUserId,
  fetchArticleUserAll,
} from "../../../api/articles-api.js";
import AnnouncementToNavLink from "../../../components/User/AnnouncementToNavLink/AnnouncementToNavLink.jsx";

export default function UserPages() {
  const [itemsSourch, setItemsSourch] = useState(null);
  const [error, setError] = useState(false);
  const [item, setItems] = useState([]);
  const [loadig, setLoading] = useState(false);

  {
    useEffect(() => {
      async function fetchUser() {
        setItems([]);
        setLoading(true);
        try {
          const response = await fetchArticleUserAll();
          setItems(response);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchUser();
    }, []);
  }

  const handleSearchName = async (name) => {
    // console.log(`name`, name);
    try {
      setError(false);
      const response = await fetchArticleUserName(name);
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

  const handleSearchEmail = async (name) => {
    //  console.log(`name`, name);
    try {
      setError(false);
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
    // console.log(`name`, name);
    try {
      setError(false);
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

  return (
    <div className={css.containerUserPages}>
      <h4 className={css.title}>Admin pages users</h4>
      <div className={css.containerUserFilterListButtonUserPages}>
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
        <div className={css.containerUserUpdataAnnouncement}>
          <UserChange />
          <AnnouncementToNavLink />
        </div>
      </div>
      <div className={css.containerUserInfo}>
        <h4 className={css.userCollectionsTitle}>Users collections:</h4>

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

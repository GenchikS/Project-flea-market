import css from "./AnnouncementPages.module.css"
import AnnouncementChange from "../../components/Announcement/AnnouncementChange/AnnouncementChange.jsx";
import UserFormSearch from "../../components/User/UserFormSearch/UserFormSearch.jsx";
import { useEffect, useState } from "react";
import MyComponent from "../../components/Loader/Loader.jsx";
import { fetchArticleAnnouncementsAll } from "../../api/articlesAnnouncements-api.js";
import UsersToNavLink from "../../components/Announcement/UsersToNavLink/UsersToNavLink.jsx";
import AnnouncementInfoCard from "../../components/Announcement/AnnouncementInfoTable/AnnouncementInfoCard.jsx";
import AnnouncementFilterChapter from "../../components/Announcement/AnnouncementSourchFilter/AnnouncementFilterChapter.jsx/AnnouncementFilterChapter.jsx";

export default function AnnouncementPages({ setMarker }) {
  const [itemsSourch, setItemsSourch] = useState(null);
  const [error, setError] = useState(false);
  const [item, setItems] = useState([]);
  const [loadig, setLoading] = useState(false);
  const [chapter, setChapter] = useState("");

  {
    useEffect(() => {
      async function fetchAnnouncement() {
        setItems([]);
        setLoading(true);
      try {
          const response = await fetchArticleAnnouncementsAll();
          // console.log(`response`, response);
          setItems(response);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchAnnouncement();
    }, []);
  }

  const handleSearchName = async (name) => {
    console.log(`handleSearchName`, name);
    try {
      // setError(false);
      // const response = await fetchArticleUserName(name);
      // console.log(`response`, response);
      // setItemsSourch(response);
      //  if (!response) {
      //   setItemsSourch([]);
      //   setError(true);
      //   return;
      //   }
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  };

  const handleSearchEmail = async (name) => {
    console.log(`handleSearchEmail`, name);
    try {
      // setError(false);
      // const response = await fetchArticleUserEmail(name);
      // setItemsSourch(response);
      // if (!response) {
      // setItemsSourch([]);
      // setError(true);
      // return;
      // }
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  };

  const handleSearchId = async (name) => {
    console.log(`handleSearchId`, name);
    try {
      // setError(false);
      // const response = await fetchArticleUserId(name);
      // console.log(`response`, response);
      // setItemsSourch(response);
      // if (!response) {
      //   setItemsSourch([]);
      //   setError(true);
      //   return;
      // }
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div className={css.containerAnnouncementPages}>
      <h4 className={css.title}>Announcement users pages</h4>
      <div className={css.containerUserFilterListButtonUserPages}>
        <div className={css.containerUserSearch}>
          <AnnouncementFilterChapter
            chapter={chapter}
            setChapter={setChapter}
          />
          {/* { */}
            {/* // chapter === "all" && ( */}
            {/* <UserFormSearch */}
              {/* placeholder="Search id" */}
              {/* // name={"name"} */}
              {/* // handleSearch={handleSearchId} */}
            {/* /> */}
          {/* // ) */}
          {/* } */}
        </div>
        <div className={css.containerUserUpdataUsers}>
          <AnnouncementChange setMarker={setMarker} />
          <UsersToNavLink />
        </div>
      </div>
      <div className={css.containerUserInfo}>
        {item &&
          (!itemsSourch ? (
            <AnnouncementInfoCard item={item} />
          ) : (
            <AnnouncementInfoCard itemsArrey={itemsSourch} />
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
import css from "./AnnouncementPages.module.css"
import AnnouncementChange from "../../components/Announcement/AnnouncementChange/AnnouncementChange.jsx";
import { useEffect, useState } from "react";
import MyComponent from "../../components/Loader/Loader.jsx";
import { fetchArticleAnnouncementId, fetchArticleAnnouncementsAll } from "../../api/articlesAnnouncements-api.js";
import UsersToNavLink from "../../components/Announcement/UsersToNavLink/UsersToNavLink.jsx";
import AnnouncementInfoCard from "../../components/Announcement/AnnouncementInfoTable/AnnouncementInfoCard.jsx";
import AnnouncementFilterChapter from "../../components/Announcement/AnnouncementSourchFilter/AnnouncementFilterChapter.jsx/AnnouncementFilterChapter.jsx";
import AnnouncementFormSearchId from "../../components/Announcement/AnnouncementSourchFilter/AnnouncementFormSearchId/AnnouncementFormSearchId.jsx";

export default function AnnouncementPages({ setMarker }) {
  const [itemsSourch, setItemsSourch] = useState(null);
  const [error, setError] = useState(false);
  const [item, setItems] = useState([]);
  const [loadig, setLoading] = useState(false);
  const [chapter, setChapter] = useState("");

  // console.log(`chapter`, chapter.length);

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

  const handleSearchId = async (id) => {
    try {
      setError(false);
      const response = await fetchArticleAnnouncementId(id);
      if (!response.length) {
        setItemsSourch([response]);
      }

      setItems(response);

      if (!response) {
          setError(true);
          return;
        }
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
            setItems={setItems}
            setItemsSourch={setItemsSourch}
          />
          {chapter.length === 0 && (
            <AnnouncementFormSearchId
              placeholder="id user/ammoun..."
              name={"name"}
              handleSearch={handleSearchId}
            />
          )}
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
            <AnnouncementInfoCard item={itemsSourch} />
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
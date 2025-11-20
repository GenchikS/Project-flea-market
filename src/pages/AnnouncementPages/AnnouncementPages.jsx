import css from "./AnnouncementPages.module.css"
import AnnouncementChange from "../../components/Announcement/AnnouncementChange/AnnouncementChange.jsx";
import { useEffect, useState } from "react";
import MyComponent from "../../components/Loader/Loader.jsx";
import { fetchArticleAnnouncementId, fetchArticleAnnouncementsAll } from "../../api/articlesAnnouncements-api.js";
import UsersToNavLink from "../../components/Announcement/UsersToNavLink/UsersToNavLink.jsx";
import AnnouncementInfoCard from "../../components/Announcement/AnnouncementInfoTable/AnnouncementInfoCard.jsx";
import AnnouncementFilterChapter from "../../components/Announcement/AnnouncementSourchFilter/AnnouncementFilterChapter.jsx/AnnouncementFilterChapter.jsx";
import AnnouncementFormSearchId from "../../components/Announcement/AnnouncementSourchFilter/AnnouncementFormSearchId/AnnouncementFormSearchId.jsx";

export default function AnnouncementPages({ setMarker, pathTo, setIsModalOpen }) {
  // const [itemsSourch, setItemsSourch] = useState(null);
  const [error, setError] = useState(false);
  const [item, setItems] = useState([]);
  const [itemArray, setItemArray] = useState(null);
  const [loadig, setLoading] = useState(false);
  const [chapter, setChapter] = useState("");

  // console.log(`chapter`, chapter.length);

  {
    useEffect(() => {
      async function fetchAnnouncement() {
        setIsModalOpen(false);
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
      setItems([]);
      setItemArray(null);
      setError(false);
      const response = await fetchArticleAnnouncementId(id);

      if (!response.length) {
        setItemArray([response]);
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
      <h4 className={css.title}>Admin announcement pages</h4>
      <div className={css.containerUserFilterListButtonUserPages}>
        <div className={css.containerUserSearch}>
          <AnnouncementFilterChapter
            chapter={chapter}
            setChapter={setChapter}
            setItems={setItems}
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
          <AnnouncementChange
            setMarker={setMarker}
            pathTo={pathTo}
            setIsModalOpen={setIsModalOpen}
          />
          <UsersToNavLink />
        </div>
      </div>
      <div className={css.containerUserInfo}>
        {item && (!itemArray ? (
          <AnnouncementInfoCard item={item} />
        ) : (
          <AnnouncementInfoCard item={itemArray} />
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
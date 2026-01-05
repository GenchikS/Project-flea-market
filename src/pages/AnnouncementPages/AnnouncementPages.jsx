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
  // const [sourse, setSoursce] = useState(false);

  // console.log(`chapter`, chapter.length);

  {
    useEffect(() => {
      async function fetchAnnouncement() {
        setIsModalOpen(false);
        setLoading(true);
        try {
          const response = await fetchArticleAnnouncementsAll();
          // console.log(`response eff`, response);
          setItems(response.data);
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
    // console.log(`id`, id);
    try {
      setItems([]);
      setItemArray(null);
      setError(false);
      const response = await fetchArticleAnnouncementId(id);
      // console.log(`response Id`, response.data.data);
      setItems(response.data.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={css.containerAnnouncementPages}>
      <h4 className={css.title}>Админ панель оголошень</h4>
      <div className={css.containerUserFilterListButtonUserPages}>
        <div className={css.containerUserSearch}>
          <AnnouncementFilterChapter
            chapter={chapter}
            setChapter={setChapter}
            setItems={setItems}
            sourse={false}
          />
          {chapter.length === 0 && (
            <AnnouncementFormSearchId
              placeholder="id корист/оголош..."
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
        {item &&
          (!itemArray ? (
            <AnnouncementInfoCard item={item} />
          ) : (
            <AnnouncementInfoCard item={itemArray} />
          ))}

        {loadig && (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Завантажуємо оголошення ...</p>
            <MyComponent />
          </div>
        )}
        {error && <p>Оголошення не знайдено!</p>}
      </div>
    </div>
  );
}
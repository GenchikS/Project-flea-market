import { useEffect, useState } from "react";
import css from "./WorkComponent.module.css";
import { fetchAnnouncementFilterChapter } from "../../../api/articlesAnnouncements-api.js";
import MyComponent from "../../Loader/Loader.jsx";

export default function WorkComponent() {
const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loadig, setLoading] = useState(false);

  {
    useEffect(() => {
      async function fetchDataChapter() {
        try {
          setLoading(true);
          setError(false);
          const response = await fetchAnnouncementFilterChapter({
            chapter: "робота",
            category: "",
            purchaseSale: "",
          });
          // console.log(`retponse`, response);
          setItems(response);
        } catch (error) {
          setError(true);
        }
        finally {
          setLoading(false);
        }
      }
      fetchDataChapter();
    },
    []);
  }
  return (
    <div className={css.containerWorkComponent}>
      <h4>Пошук роботи</h4>
      <div>
        <h5>Фільтр</h5>
      </div>
      <div>
        {items.length > 0 &&
          items.map((item) => (
            <ul key={item.id} className={css.tableContainerAutoComponent}>
              <li className={css.listCard}>
                <p className={css.chapter}>Категорія: {item.chapter}</p>
              </li>
              <li className={css.listCard}>
                <p className={css.category}>{item.category}</p>
              </li>
              <li className={css.listTextAnnouncement}>
                <p className={css.textAnnouncemnt}>{item.text}</p>
              </li>
            </ul>
          ))}
      </div>
      <div>
        {loadig && (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Пошук роботи ...</p>
            <MyComponent />
          </div>
        )}
      </div>
    </div>
  );
}

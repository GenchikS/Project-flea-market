import { useEffect, useState } from "react";
import css from "./TechnicsComponent.module.css";
import { fetchAnnouncementFilterChapter } from "../../../api/articlesAnnouncements-api.js";
import MyComponent from "../../Loader/Loader.jsx";

export default function TechnicsComponent() {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [error, setError] = useState(false);
  const [loadig, setLoading] = useState(false);

  {
    useEffect(() => {
      async function fetchDataChapter() {
        try {
          setLoading(true);
          setError(false);
          const response = await fetchAnnouncementFilterChapter({
            chapter: "техніка",
            category: "",
            purchaseSale: "",
          });
          // console.log(`retponse`, response);
          setItems(response.data);
          setPagination({
            perPage: response.perPage,
            page: response.page,
            totalPages: response.totalPages,
            totalAnnouncement: response.totalAnnouncement,
            nextPage: response.nextPage,
            previousPage: response.previousPage,
          });
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
    <div className={css.containerTechnicsComponent}>
      <div className={css.containerTitle}>
        <h4 className={css.titleHousingComponent}>Побутова техніка:</h4>
        {!loadig && (
          <h4 className={css.titlePagination}>
            Знайдено оголошень: {pagination.totalAnnouncement}
          </h4>
        )}
      </div>
      <div>
        <h5>Фільтр</h5>
      </div>
      <div>
        {items.length > 0 &&
          items.map((item) => (
            <ul key={item._id} className={css.tableContainerHousingComponent}>
              <li className={css.listCard}>
                <p className={css.chapter}>Категорія: {item.chapter}</p>
              </li>
              <li className={css.listCard}>
                <p className={css.listPurchaseSale}>{item.purchaseSale}</p>
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
            <p className={css.textLoadingData}>Пошук оголошень ...</p>
            <MyComponent />
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import css from "./AllAnnouncementComponent.module.css";
import { fetchArticleAnnouncementsAll } from "../../../api/articlesAnnouncements-api.js";
import MyComponent from "../../Loader/Loader.jsx";
import PaginationComponent from "../../PaginationComponent/PaginationComponent.jsx";

export default function AllAnnouncementComponent() {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loadig, setLoading] = useState(false);

  {
    useEffect(() => {
      async function fetchDataChapter() {
        try {
          setLoading(true);
          setError(false);
          const response = await fetchArticleAnnouncementsAll({ page: page });
          // console.log(`retponse all`, response);
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
        } finally {
          setLoading(false);
        }
      }
      fetchDataChapter();
    }, [page]);
  }
  return (
    <div className={css.containerAllAnnouncementComponent}>
      <div className={css.containerTitle}>
        <h4 className={css.titleHousingComponent}>Всі оголошення:</h4>
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
             <li className={css.listTextAnnouncement}>
                <p className={css.textDate}>
                  Дата публікації: {item.createdAt.slice(0, 10)}
                </p>
              </li>
            </ul>
          ))}
      </div>
      {!loadig && (
        <PaginationComponent
          pagination={pagination}
          setPage={setPage}
        />
      )}
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

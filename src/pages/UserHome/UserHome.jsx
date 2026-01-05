import { useEffect, useState } from "react";
import css from "./UserHome.module.css";
import { fetchArticleAnnouncementId } from "../../api/articlesAnnouncements-api.js";
import MyComponent from "../../components/Loader/Loader.jsx";
import { NavLink } from "react-router-dom";
import UserAnnouncementChange from "../../components/User/UserAnnouncementChange/UserAnnouncementChange.jsx";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent.jsx";

export const UserHome = ({ user, setMarker, setIsModalOpen, setIdAnnouncement }) => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loadig, setLoading] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchArticleAnnouncementId({
          id: user._id,
          page: page,
        });
        // console.log(`response`, response);
        setItems(response.data.data);
        setMessage(response.message);
        setPagination({
          perPage: response.data.perPage,
          page: response.data.page,
          totalPages: response.data.totalPages,
          totalAnnouncement: response.data.totalAnnouncement,
          nextPage: response.data.nextPage,
          previousPage: response.data.previousPage,
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  // console.log(`items`, items);
  // console.log(`items id`, (items.map((item )=> item._id)));

  // console.log(`message`, message);
  // console.log(`pagination`, pagination);

  return (
    <div className={css.containerUserHome}>
      <div className={css.containerTitle}>
        <h4 className={css.titleAnnouncement}>
          {message} {pagination.totalAnnouncement}
        </h4>
        <NavLink className={css.addAnnouncement} to="/user/announcement/add">
          Додати оголошення
        </NavLink>
      </div>
      <div className={css.listAnnouncements}>
        {items.length > 0 ? (
          items.map((item) => (
            <ul key={item._id} className={css.tableContainerComponent}>
              <li className={css.containerDescriptionImage}>
                <ul className={css.listDescriptionTitle}>
                  <li className={css.listCard}>
                    <p className={css.listPurchaseSale}>{item.purchaseSale}</p>
                  </li>
                  <li className={css.listCard}>
                    <p className={css.chapter}>Категорія: {item.chapter}</p>
                  </li>
                  {item.category && (
                    <li className={css.listCard}>
                      <p className={css.listCategory}>Тип: {item.category}</p>
                    </li>
                  )}
                  {item.yar && (
                    <li className={css.listCard}>
                      <p className={css.listYar}>Рік випуску: {item.yar}</p>
                    </li>
                  )}
                  {item.price && (
                    <li className={css.listCard}>
                      <p className={css.listPrice}>Ціна: {item.price} $</p>
                    </li>
                  )}
                </ul>
                {item.photo && <div className={css.image}></div>}
              </li>
              <li className={css.listTextAnnouncement}>
                <p className={css.textAnnouncemnt}>{item.text}</p>
              </li>
              <li className={css.containerButton}>
                <UserAnnouncementChange
                  setMarker={setMarker}
                  setIsModalOpen={setIsModalOpen}
                  idAnnouncement={item._id}
                  setIdAnnouncement={setIdAnnouncement}
                />
              </li>
              <li>
                <p className={css.textDate}>
                  Дата публікації: {item.createdAt.slice(0, 10)}
                </p>
              </li>
            </ul>
          ))
        ) : (
          <p className={css.errorAnnouncement}>{items.data}</p>
        )}
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
};
import { useEffect, useState } from "react";
import css from "./UserHome.module.css";
import { fetchArticleAnnouncementId } from "../../api/articlesAnnouncements-api.js";
import MyComponent from "../../components/Loader/Loader.jsx";

export const UserHome = ({ user }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loadig, setLoading] = useState();


    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);
          setError(false);
          const response = await fetchArticleAnnouncementId(user._id);
          setItems(response);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
  }, []);
return (
  <div className={css.containerUserHome}>
    <h4 className={css.titleAnnouncement}>Ваші оголошення:</h4>
    {/* <div>
      <h5>Фільтр</h5>
    </div> */}
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
                  {item.category && <li className={css.listCard}>
                    <p className={css.listCategory}>Тип: {item.category}</p>
                  </li>}
                {item.yar && <li className={css.listCard}>
                  <p className={css.listYar}>Рік випуску: {item.yar}</p>
                </li>}
                  {item.price && <li className={css.listCard}>
                  <p className={css.listPrice}>Ціна: {item.price} $</p>
                  </li>}
                
              </ul>
              {item.photo && <div className={css.image}></div>}
            </li>
            <li className={css.listTextAnnouncement}>
              <p className={css.textAnnouncemnt}>{item.text}</p>
            </li>
            <li className={css.containerButton}>
              <button className={css.buttonUpdate}>редагувати</button>
              <button className={css.buttonDelete}>видалити</button>
            </li>
          </ul>
        ))
      ) : (
        <p className={css.errorAnnouncement}>{items.data}</p>
      )}
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
  // return (
  //   <div>

  // <div className={css.listAnnouncements}>

  // </div>
  //   </div>
  // );
};
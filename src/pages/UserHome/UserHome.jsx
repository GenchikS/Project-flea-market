import { useEffect, useState } from "react";
import css from "./UserHome.module.css";
import { fetchArticleAnnouncementId } from "../../api/articlesAnnouncements-api.js";
import MyComponent from "../../components/Loader/Loader.jsx";

export const UserHome = ({ user }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loadig, setLoading] = useState(false);
  
    console.log(`user UserHome1`, user);

  {
    useEffect(() => {
        async function fetchDataChapter() {
          try {
            setLoading(true);
              setError(false);
            // console.log(`user UserHome2`, user._id);
            const response = await fetchArticleAnnouncementId(user._id);
            // console.log(`response`, response.data);
            setItems(response);
          } catch (error) {
              setError(true);
         }
          finally {
            setLoading(false);
          }
        }
        fetchDataChapter();
    }, []);
  }
  return (
    <div>
      <h4 className={css.titleAnnouncement}>Ваші оголошення:</h4>
      <div>
        <h5>Фільтр</h5>
      </div>
      <div className={css.listAnnouncements}>
        {items.length > 0 ?
          items.map((item) => (
            <ul key={item._id} className={css.tableContainerAutoComponent}>
              <li className={css.containerDescriptionImage}>
                <ul className={css.listDescriptionTitle}>
                  <li className={css.listCard}>
                    <p className={css.listPurchaseSale}>{item.purchaseSale}</p>
                  </li>
                  <li className={css.listCard}>
                    <p className={css.listCategory}>Тип: {item.category}</p>
                  </li>
                  <li className={css.listCard}>
                    <p className={css.listYar}>Рік випуску: {item.yar}</p>
                  </li>
                  <li className={css.listCard}>
                    <p className={css.listPrice}>Ціна: {item.price} $</p>
                  </li>
                </ul>
                <div className={css.image}></div>
              </li>
              <li className={css.listTextAnnouncement}>
                <p className={css.textAnnouncemnt}>{item.text}</p>
              </li>
            </ul>
          )) : <p className={css.errorAnnouncement}>{items.data}</p>}
      </div>
      <div>
        {loadig && (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Пошук авто ...</p>
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
import { useEffect, useState } from "react";
import css from "./AutoComponent.module.css";
import { fetchAnnouncementFilterChapter } from "../../../api/articlesAnnouncements-api.js";
import MyComponent from "../../Loader/Loader.jsx";

export default function AutoComponent() {

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
            chapter: "автомобіль",
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
    <div className={css.containerAutoComponent}>
      <h4>Пошук автотранспорту</h4>
      <div>
        <h5>Фільтр</h5>
      </div>
      <div>
        {items.length > 0 &&
          items.map((item) => (
            <ul key={item.id} className={css.tableContainerAutoComponent}>
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
          ))}
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
}
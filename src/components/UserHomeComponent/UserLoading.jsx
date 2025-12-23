import MyComponent from "../Loader/Loader.jsx";
import css from "./UserLoading.module.css";

export default function UserLoading() {
    return (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Оновлення оголошень ...</p>
            <MyComponent />
          </div>
    )
}











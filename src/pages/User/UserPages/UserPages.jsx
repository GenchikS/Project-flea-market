import css from "./UserPages.module.css";
import { ButtonUserDate } from "../../../components/Button/ButtonUserDate.jsx";
import UserInfoCard from "../../../components/User/UserInfoTable/UserInfoCard.jsx";
import MyComponent from "../../../components/Loader/Loader.jsx";
// import MyComponent from "../../../components/Loader/MyComponent.jsx";

export default function UserPages({
  setIsClick,
  setUserAdd,
  setUserUpdate,
  setDeleteUser,
  response,
  loadig,
  error
}) {
  const handleClick = (evn) => {
    setIsClick(false);
    switch (evn) {
      case `addUser`:
        // console.log(`evn addUser`, evn);
        setUserAdd(true);
        break;
      case `updateUser`:
        // console.log(`evn updateUser`, evn);
        setUserUpdate(true);
        break;
      case `deleteUser`:
        // console.log(`evn deleteUser`, evn);
        setDeleteUser(true);
        break;
      default:
        // console.log(`evn userPage`, evn);
        break;
    }
    return;
  };

  return (
    <div className={css.containerUserPages}>
      <div className={css.containerUserFilterListButtonUserPages}>
        <div>
          <h4>UserPages</h4>
        </div>
        <div>
          <ul className={css.listButtonUserPages}>
            <li>
              <ButtonUserDate value="addUser" onClick={handleClick}>
                Add user
              </ButtonUserDate>
            </li>
            <li>
              <ButtonUserDate value="updateUser" onClick={handleClick}>
                update User
              </ButtonUserDate>
            </li>
            <li>
              <ButtonUserDate value="deleteUser" onClick={handleClick}>
                delete User
              </ButtonUserDate>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.containerUserInfo}>
        <h4 className={css.userCollectionsTitle}>User collections:</h4>
        {loadig && (
          <div className={css.containerLoadingData}>
            <p className={css.textLoadingData}>Loding data ...</p>
            <MyComponent />
          </div>
        )}
        {response.length > 0 && <UserInfoCard response={response} />}
        {error && <p>Server error!</p>}
      </div>
    </div>
  );
}

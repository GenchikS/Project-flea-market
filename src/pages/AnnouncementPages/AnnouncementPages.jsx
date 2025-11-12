import css from "./AnnouncementPages.module.css"
import Users from "../../components/User/Users/Users.jsx";
import AnnouncementChange from "../../components/Announcement/AnnouncementChange/AnnouncementChange.jsx";

export default function AnnouncementPages() {
    return (
      <div className={css.containerAnnouncementPages}>
        <h4 className={css.title}>Announcement users pages</h4>
        <div className={css.containerUserFilterListButtonUserPages}>
          {/* <div className={css.containerUserSearch}>
            <UserFormSearch
              placeholder="Search name"
              name="name"
              //    handleSearch={handleSearchName}
            />
            <UserFormSearch
              placeholder="Search email"
              name="name"
              //    handleSearch={handleSearchEmail}
            />
            <UserFormSearch
              placeholder="Search id"
              name={"name"}
              //    handleSearch={handleSearchId}
            />
          </div> */}
          <div className={css.containerUserUpdataUsers}>
             <AnnouncementChange/>
            <Users />
          </div>
        </div>
        <div className={css.containerUserInfo}>
          <h4 className={css.userCollectionsTitle}>
            Announcement collections:
          </h4>

          {/* {item &&
         (!itemsSourch ? (
           <UserInfoCard item={item} />
         ) : (
           <UserInfoCard itemsArrey={itemsSourch} />
         ))}
       {loadig && (
         <div className={css.containerLoadingData}>
           <p className={css.textLoadingData}>Loding data ...</p>
           <MyComponent />
         </div>
       )}
       {error && <p>User not found!</p>} */}
        </div>
      </div>
    );
}
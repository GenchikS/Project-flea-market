import css from "./AddAnnouncement.module.css";
import { FormAddId } from "../FormAddId/FormAddId.jsx";
import { useState } from "react";
import CategoryAuto from "../SelectCategory/CategoryAuto/CategoryAuto.jsx";
import Charter from "../SelectCharter/Charter.jsx";
import CategoryHousing from "../SelectCategory/CategoryHousing/CategoryHousing.jsx";
import AnnouncementText from "../AnnouncementText/AnnouncementText.jsx";
// import Announcement from "../../Announcement/Announcement.jsx";

export default function AddAnnouncement() {
  const [charter, setCharter] = useState("all");
  const [category, setCategory] = useState("all")
  

  return (
    <div className={css.containerAddAnnouncement}>
      <h3 className={css.title}>Form add announcement</h3>
      <FormAddId />
      <Charter setCharter={setCharter} charter={charter} />
      {console.log(`category`, category)}
      {charter === "auto" && (
        <CategoryAuto setCategory={setCategory} category={category} />
      )}
      {charter === "housing" && (
        <CategoryHousing setCategory={setCategory} category={category} />
      )}
      <AnnouncementText/>
      {console.log(`charter`, charter)}
      {console.log(`category`, category)}
    </div>
  );
}
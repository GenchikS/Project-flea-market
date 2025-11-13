import ButtonModalAnnouncement from "../ButtonModalAnnouncement/ButtonModalAnnouncement.jsx";
import css from "./FormAddPhoto.module.css";

export default function FormAddPhoto({ saveFiles }) {
  return (
    <div className={css.containerAddPhotoAnnouncement}>
      <h4 className={css.title}>Form add photo</h4>
      <div>
        <input
          className={css.inputPhotoFile}
          type="file"
          id="photoFile1"
          name="photoFile1"
          accept=".png, .jpg, .jpeg"
        />
        <input
          className={css.inputPhotoFile}
          type="file"
          id="photoFile2"
          name="photoFile2"
          accept=".png, .jpg, .jpeg"
        />
        <input
          className={css.inputPhotoFile}
          type="file"
          id="photoFile3"
          name="photoFile3"
          accept=".png, .jpg, .jpeg"
        />
              <ButtonModalAnnouncement type="submit" onClick={saveFiles} />
    </div>
    </div>
  );
}
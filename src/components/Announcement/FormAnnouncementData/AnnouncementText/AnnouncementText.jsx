import css from "./AnnouncementText.module.css"

export default function AnnouncementText({setText}) {
  return (
    <div>
      <p className={css.markerRed}>*</p>
      <textarea
        onBlur={(value) => setText(value.target.value)}
        className={css.containerText}
        name="AnnouncementText"
        cols="20"
        rows="5"
        placeholder="input text announcement ..."
      ></textarea>
    </div>
  );
}

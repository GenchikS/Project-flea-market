import css from "./AnnouncementText.module.css"

export default function AnnouncementText({setText, marker}) {
  return (
    <div>
      <p className={!marker ? css.markerRed : css.markerGreen}>*</p>
      <textarea
        onBlur={(value) => setText(value.target.value)}
        className={css.containerText}
        name="AnnouncementText"
        cols="20"
        rows="5"
        placeholder="додайте опис оголошення ..."
      ></textarea>
    </div>
  );
}

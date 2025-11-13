import css from "./AnnouncementText.module.css"

export default function AnnouncementText({setText}) {
  return (
    <div>
      <textarea
        onBlur={(value) => setText(value.target.value)}
        className={css.containerText}
        name="AnnouncementText"
        cols="20"
        rows="5"
        placeholder="input announcement text..."
      ></textarea>
    </div>
  );
}

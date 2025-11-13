import css from "./AnnouncementText.module.css"

export default function AnnouncementText() {
    return (
      <div>
        <textarea
          className={css.containerText}
          name="AnnouncementText"
          cols="20"
          rows="5"
          placeholder="input announcement text..."
        ></textarea>
      </div>
    );
}
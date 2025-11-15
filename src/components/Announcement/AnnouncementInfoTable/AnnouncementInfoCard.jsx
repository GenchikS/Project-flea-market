import css from "./AnnouncementInfoCard.module.css"
export default function AnnouncementInfoCard({ item, itemsArrey }) {
  return (
    <table>
      <caption className={css.announcementCollectionsTitle}>
        Announcement collection:
      </caption>
      <thead>
        <tr>
          <th className={css.nameTh}>chapter</th>
          <th className={css.emailTh}>category</th>
          <th className={css.idTh}>id user</th>
        </tr>
      </thead>
      {
        //   item ?
        item.map((list) => (
          <tbody key={list._id}>
            <tr>
              <td className={css.chapter}>{list.chapter}</td>
              <td className={css.category}>{list.category}</td>
              <td className={css.idUser}>{list.idUser}</td>
            </tr>
            <tr>
              <td scope="row" colSpan="3">
                {list.text}
              </td>
            </tr>
            {/* <tr>
              <td scope="row" colspan="3"></td>
            </tr> */}
          </tbody>
        ))
      }
    </table>
  );
}
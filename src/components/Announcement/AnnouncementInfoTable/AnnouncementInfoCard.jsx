import css from "./AnnouncementInfoCard.module.css"
export default function AnnouncementInfoCard({ item }) {
// console.log(`item`, item);
  return (
    <table>
      <caption className={css.announcementCollectionsTitle}>
        Колекція оголошень:
      </caption>
      <thead>
        <tr>
          <th className={css.nameTh}>розділ</th>
          <th className={css.emailTh}>категорія</th>
          <th className={css.idTh}>id</th>
        </tr>
      </thead>
      {
        //   item ?
        item.map((list) => (
          <tbody key={list._id}>
            <tr>
              <td className={css.chapter} rowSpan="2">
                {list.chapter}
              </td>
              <td className={css.category} rowSpan="2">
                {list.category}
              </td>
              <td className={css.idUser} colSpan="2">
                user: {list.idUser}
              </td>
            </tr>
            <tr>
              <td className={css.idUser}>оголош: {list._id }</td>
            </tr>
            <tr>
              <td scope="row" colSpan="3">
                {list.text}
              </td>
            </tr>
            </tbody>
        ))
      }
    </table>
  );
}
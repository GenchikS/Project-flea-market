import css from "./UserInfoCard.module.css";

export default function UserInfoCard({ response }) {
      console.log(`response`, response);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className={css.nameTh} scope="col">
              name
            </th>
            <th className={css.emailTh} scope="col">
              email
            </th>
            <th className={css.phoneTh} scope="col">
              phone
            </th>
            <th className={css.roleTh} scope="col">
              role
            </th>
            <th className={css.roleTh} scope="col">
              id
            </th>
          </tr>
        </thead>
        {response.map((user) => (
          <ul>
            <tbody>
              <tr className={css.userList}>
                <td >{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user._id}</td>
              </tr>
            </tbody>
          </ul>
        ))}
      </table>
    </div>
  );
}

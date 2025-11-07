import css from "./UserInfoCard.module.css";

export default function UserInfoCard({ response, userData }) {
  // console.log(`response`, response);
  // console.log(`userData`, userData);
  const responseEnd = [userData];
  // console.log(`responseEnd`, responseEnd);
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
            <th className={css.roleTh} scope="col">
              role
            </th>
            {/* <th className={css.phoneTh} scope="col">
              phone
            </th> */}
            <th className={css.roleTh} scope="col">
              id
            </th>
          </tr>
        </thead>
        {!userData
          ? response.map((user) => (
              <tbody key={user._id}>
                <tr className={css.userList}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {/* <td>{user.phone}</td> */}
                  <td>{user._id}</td>
                </tr>
              </tbody>
            ))
          : responseEnd.map((user) => (
              <tbody key={user._id}>
                <tr className={css.userList}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {/* <td>{user.phone}</td> */}
                  <td>{user._id}</td>
                </tr>
              </tbody>
            ))}
      </table>
    </div>
  );
}

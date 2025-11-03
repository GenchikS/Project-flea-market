import css from "./UserInfoTable.module.css";

export default function UserTableList (){
    return (
        <div> 
            <table >
                    <thead>
                        <tr>
                            <th className={css.nameTh} scope="col">name</th>
                            <th className={css.emailTh}scope="col">email</th>
                            <th className={css.phoneTh}scope="col">phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className={css.userList}>
                        <td >test</td>
                        <td >test@gmail.com</td>
                        <td >1111</td>
                    </tr>
                    <tr className={css.userList}>
                        <td >test_3</td>
                        <td >test_3@gmail.com</td>
                        <td >33333</td>
                    </tr>
                                        <tr className={css.userList}>
                        <td >test_4</td>
                        <td >test_4@gmail.com</td>
                        <td >44444</td>
                    </tr>
                                        <tr className={css.userList}>
                        <td >test_5</td>
                        <td >test_5@gmail.com</td>
                        <td >55555</td>
                    </tr>
                </tbody>
                

            </table>
        </div>
    )
}
import UserInfoCard from "./UserInfoCard/UserInfoCard.jsx";

export default function UserTableList({ response }) {
  return (
    <div>
      <UserInfoCard response={response} />
    </div>
  );
}
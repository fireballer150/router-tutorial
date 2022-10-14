import WithRouterSample from "./WithRouterSample";

const data = {
  codename: {
    name: "코드네임",
    description: "리액트 개발자",
  },
  cutterballer: {
    name: "커터볼러",
    description: "야구를 좋아하는 사람",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;

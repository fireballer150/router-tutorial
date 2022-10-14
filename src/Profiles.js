import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/codename">
            codename
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/cutterballer">
            cutterballer
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  );
};
export default Profiles;

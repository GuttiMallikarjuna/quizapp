import React from "react";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

  const history = useNavigate();

  const logoutClick = () => {
    history('/');
}
  return (
    <>
      <nav>
        <div>
          <h2 className="knl">
            <span>Quiz-App</span>
          </h2>
        </div>

        <div className="logoutsec">
          <h4>
            <i class="bi bi-person-circle" id="personicon"></i> &nbsp;
            {/* {props.uname} */}
            {/* {console.log(props)} */}
            {localStorage.getItem("email")}
          </h4>
          <button onClick={logoutClick} className="logout">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

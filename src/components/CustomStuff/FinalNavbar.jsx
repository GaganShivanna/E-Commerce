import icon1 from '../../assets/icon1.jpg';
import LoginButton from "../CustomButtons/LoginButton";
import LogoutButton from '../CustomButtons/LogoutButton';
import Profile from '../CustomButtons/Profile';
function FinalNavBar() {
  return (
    <>
      <nav className="navbar  shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
        <div>
          <a className="navbar-brand" href="#">
            <img src={icon1} class="rounded-pill" alt="Bootstrap" width="150" height="100" />
          </a>
        </div>
        <p className="text-center fw-bold fs-1">GAGKART</p>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active fs-3" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-3" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-3" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-3" href="#">Link</a>
          </li>
          <LoginButton></LoginButton>
          <LogoutButton></LogoutButton>
          <Profile></Profile>

        </ul>
      </nav>
    </>
  );
}

export default FinalNavBar;
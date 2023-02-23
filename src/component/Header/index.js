import style from "./Header.module.scss";
import DarkMode from "../ButtonDarkMode";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

function Header() {
  return (
    <div id={cx("header")}>
      <ul>
        <li className={cx("header_link")}>
          <a href="#">Home</a>
        </li>
        <li className={cx("header_link")}>
          <a href="#AboutMe_about_me__RJukO">About me</a>
        </li>
        <li className={cx("header_link")}>
          <a href="#ProjectLatest_project_latest__daXNI">Product</a>
        </li>
        <li className={cx("header_link")}>
          <a href="#Contact_contact__fdJDP">Contact</a>
        </li>
        <li className={cx("header_btn")}>
          <DarkMode></DarkMode>
        </li>
      </ul>
    </div>
  );
}

export default Header;

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
          <a href="#">About me</a>
        </li>
        <li className={cx("header_link")}>
          <a href="#">Product</a>
        </li>
        <li className={cx("header_link")}>
          <a href="#Technology_technology__U9r1I">Contact</a>
        </li>
        <li className={cx("header_btn")}>
          <DarkMode></DarkMode>
        </li>
      </ul>
    </div>
  );
}

export default Header;

import styles from "./DarkMode.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function DarkMode() {
  return (
    <label className={cx("switch")}>
      <input type="checkbox" />
      <span className={cx("slider")}></span>
    </label>
  );
}

export default DarkMode;

import style from "./Technology.module.scss";
import classNames from "classnames/bind";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";

let cx = classNames.bind(style);

function Technology() {
  return (
    <div id={cx("technology")}>
      {/* What i do */}
      <ul className={cx("te_ul")}>
        <li className={cx("te_li")}>
          <span className={cx("te_base1")}></span>
          <span className={cx("te_title")}>HTML5</span>
          <span className={cx("te_icon")}>
            <IoLogoHtml5></IoLogoHtml5>
          </span>
        </li>
        <li className={cx("te_li")}>
          <span className={cx("te_base2")}></span>
          <span className={cx("te_title")}>CSS 3</span>
          <span className={cx("te_icon")}>
            <IoLogoCss3></IoLogoCss3>
          </span>
        </li>
        <li className={cx("te_li")}>
          <span className={cx("te_base3")}></span>
          <span className={cx("te_title")}>JavaScript</span>
          <span className={cx("te_icon")}>
            <IoLogoJavascript></IoLogoJavascript>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Technology;

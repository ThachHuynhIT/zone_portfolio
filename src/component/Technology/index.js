import style from "./Technology.module.scss";
import classNames from "classnames/bind";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import TitleSection from "../TitleSection";

let cx = classNames.bind(style);

function Technology() {
  return (
    <div id={cx("technology")}>
      <TitleSection content="What i do"></TitleSection>
      <div className={cx("te_body")}>
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
          <li className={cx("te_li")}>
            <span className={cx("te_base2")}></span>
            <span className={cx("te_title")}>ReactJS</span>
            <span className={cx("te_icon")}>
              <FaReact></FaReact>
            </span>
          </li>
          <li className={cx("te_li")}>
            <span className={cx("te_base1")}></span>
            <span className={cx("te_title")}>NodeJS</span>
            <span className={cx("te_icon")}>
              <FaNodeJs></FaNodeJs>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Technology;

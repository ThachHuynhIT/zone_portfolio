import style from "./Sidebar.module.scss";
import HT from "../../assets/images/HTlogo.png";
import ME2 from "../../assets/images/me.png";
import classNames from "classnames/bind";
import IconCT from "../CTIcon";

let cx = classNames.bind(style);

function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("typed-animation")}>
        <div className={cx("sidebar_logo")}>
          <img src={HT} alt="Thach"></img>
        </div>
        <div className={cx("sb_text")}>My name is Thach</div>
        <div className={cx("typed-out")}>I'm web developer</div>
        <div className={cx("sb_icon")}>
          <IconCT></IconCT>
        </div>
      </div>
      <div className={cx("my_img")}>
        <img src={ME2} alt="Thach"></img>
      </div>
    </div>
  );
}

export default Sidebar;

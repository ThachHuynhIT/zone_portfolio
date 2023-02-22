import style from "./Sidebar.module.scss";
import HT from "../../assets/images/HTlogo.png";
import ME2 from "../../assets/images/me.png";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sb_t")}>
        <div className={cx("sidebar_text")}>My name is Thach</div>
        <div className={cx("sidebar_text")}>I'm web developer</div>
      </div>
      <div className={cx("sidebar_logo")}>
        <img src={HT} alt="Thach"></img>
      </div>
      <div className={cx("my_img")}>
        <img src={ME2} alt="Thach"></img>
      </div>
      <div className={cx("my_img")}></div>
    </div>
  );
}

export default Sidebar;

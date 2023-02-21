import style from "./Sidebar.module.scss";
import HT from "../../assets/images/HTlogo.png";
import ME2 from "../../assets/images/me.png";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_text}>
        <p>My name is Thach</p>
        <p>I'm web developer</p>
      </div>
      <div className={style.sidebar_logo}>
        <img src={HT} alt="Thach"></img>
      </div>
      <div className={style.my_img}>
        <img src={ME2} alt="Thach"></img>
      </div>
      <div className={style.my_img}></div>
    </div>
  );
}

export default Sidebar;

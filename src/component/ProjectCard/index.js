import classNames from "classnames/bind";
import styles from "./CardProject.module.scss";

let cx = classNames.bind(styles);

function CardProject(props) {
  return (
    <div id={cx("card_pj")}>
      <div className={cx("card_header")}>{props.name}</div>
      <div className={cx("card_content")}>{props.content}</div>
      <div className={cx("card_img")}>
        <img src={props.img} alt={props.name}></img>
        <div className={cx("card_github")}>
          <a target="_blank" href="https://github.com/VuongHuy2k1/HT-MP3">
            Visit github
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;

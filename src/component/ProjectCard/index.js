import classNames from "classnames/bind";
import styles from "./CardProject.module.scss";

let cx = classNames.bind(styles);

function CardProject(props) {
  return (
    <div id={cx("card_pj")}>
      <div className={cx("card_img")}>{props.imgUrl}</div>
      <div className={cx("card_header")}>{props.header}</div>
      <div className={cx("card_content")}>{props.content}</div>
    </div>
  );
}

export default CardProject;
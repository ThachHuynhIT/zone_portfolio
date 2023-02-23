import styles from "./TitleSection.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function TitleSection(props) {
  return <div id={cx("title_section")}>{props.content}</div>;
}

export default TitleSection;

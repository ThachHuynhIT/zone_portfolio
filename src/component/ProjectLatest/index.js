import styles from "./ProjectLatest.module.scss";
import classNames from "classnames/bind";
import CardProject from "../ProjectCard";
import TitleSection from "../TitleSection";

let cx = classNames.bind(styles);

function ProjectLatest() {
  return (
    <div id={cx("project_latest")}>
      <TitleSection content="Latest project"></TitleSection>
      <div className={cx("project_card")}>
        <CardProject img=""></CardProject>
        <CardProject></CardProject>
        <CardProject></CardProject>
        <CardProject></CardProject>
      </div>
    </div>
  );
}

export default ProjectLatest;

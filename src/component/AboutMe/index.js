import styles from "./AboutMe.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function AboutMe() {
  return (
    <div id={cx("about_me")}>
      <div className={cx("am_heading")}> About me </div>
      <div className={cx("am_content")}>
        I'm Thach. Currently a 4th year student majoring in information
        technology. Currently I'm a front-end developer, I'm aiming to become a
        full-stack developer and beyond. I have experience using JavaScript and
        its libraries like ReactJS, NodeJS. I have the spirit to learn so that I
        can be flexible in many positions in the group. If you want to see my cv
        you can download it below.
      </div>
      <button>Download CV</button>
    </div>
  );
}

export default AboutMe;

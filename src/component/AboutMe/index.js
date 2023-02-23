import styles from "./AboutMe.module.scss";
import classNames from "classnames/bind";
import TitleSection from "../TitleSection";

let cx = classNames.bind(styles);

function AboutMe() {
  return (
    <div id={cx("about_me")}>
      <TitleSection content="About me"></TitleSection>
      <div className={cx("am_body")}>
        <div className={cx("am_content")}>
          I'm Thach. Currently a 4th year student majoring in information
          technology. Currently, I'm a front-end developer, I'm aiming to become
          a full-stack developer and beyond. I have experience using JavaScript
          and its libraries like ReactJS, NodeJS. I have the spirit to learn so
          that I can be flexible in many positions in the group. If you want to
          see my cv you can download it below.
        </div>
        <button>
          <a href="https://cdn.discordapp.com/attachments/1014721583052496917/1078162091707465840/WebDev_Thach.pdf">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;

import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import FormContact from "../FormContact";

let cx = classNames.bind(styles);

function Contact() {
  return (
    <div id={cx("contact")}>
      <div className={cx("ct_icons")}>
        <a
          target="_blank"
          href="https://www.instagram.com/zone.nop/"
          className={cx("ct_icon", "icon_instagram")}
        >
          <div>
            <BsInstagram></BsInstagram>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/Thach.Huynh.ZoneNop/"
          className={cx("ct_icon", "icon_fb")}
        >
          <div>
            <BsFacebook></BsFacebook>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/huynh-thach-web-dev/"
          className={cx("ct_icon", "icon_linkedin")}
        >
          <div>
            <BsLinkedin></BsLinkedin>
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/ThachHuynhIT"
          className={cx("ct_icon", "icon_github")}
        >
          <div>
            <BsGithub></BsGithub>
          </div>
        </a>
      </div>
      <div className={cx("ct_form")}>
        <FormContact></FormContact>
      </div>
    </div>
  );
}

export default Contact;

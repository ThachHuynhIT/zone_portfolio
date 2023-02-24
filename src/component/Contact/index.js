import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import IconCT from "../CTIcon";
import FormContact from "../ContactForm";

let cx = classNames.bind(styles);

function Contact() {
  return (
    <div id={cx("contact")}>
      {/* <IconCT></IconCT> */}
      <div className={cx("ct_form")}>
        <FormContact></FormContact>
      </div>
    </div>
  );
}

export default Contact;

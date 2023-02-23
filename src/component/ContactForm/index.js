import classNames from "classnames/bind";
import styles from "./FormContact.module.scss";

let cx = classNames.bind(styles);

function FormContact() {
  return (
    <div id={cx("#form_contact")}>
      <h1>Contact me</h1>
      <form className={cx("cf")}>
        <div className={cx("half", "left", "cf")}>
          <input type="text" id={cx("input-name")} placeholder="Name" />
          <input
            type="email"
            id={cx("input-email")}
            placeholder="Email address"
          />
          <input type="text" id={cx("input-subject")} placeholder="Subject" />
        </div>
        <div className={cx("half", "right", "cf")}>
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
}

export default FormContact;

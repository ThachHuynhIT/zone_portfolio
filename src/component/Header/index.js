import style from "./Header.module.scss";

function Header() {
  return (
    <div className={style.header}>
      <a href="#">Home</a>
      <a href="#">About me</a>
      <a href="#">Product</a>
      <a href="#Technology_technology__U9r1I">Contact</a>
    </div>
  );
}

export default Header;

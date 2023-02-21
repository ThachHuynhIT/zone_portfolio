import Header from "../component/Header";
import Sidebar from "../component/SideBar";
import AboutMe from "../component/AboutMe";
import Technology from "../component/Technology";

function HomePage() {
  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>
      <AboutMe></AboutMe>
      <Technology></Technology>
    </div>
  );
}

export default HomePage;

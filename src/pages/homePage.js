import Header from "../component/Header";
import Sidebar from "../component/SideBar";
import AboutMe from "../component/AboutMe";
import Technology from "../component/Technology";
import Contact from "../component/Contact";

function HomePage() {
  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>
      <AboutMe></AboutMe>
      <Technology></Technology>
      <Contact></Contact>
    </div>
  );
}

export default HomePage;

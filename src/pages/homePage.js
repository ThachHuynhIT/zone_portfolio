import Header from "../component/Header";
import Sidebar from "../component/SideBar";
import AboutMe from "../component/AboutMe";
import Technology from "../component/Technology";
import Contact from "../component/Contact";
import ProjectLatest from "../component/ProjectLatest";

function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
        <AboutMe></AboutMe>
        <Technology></Technology>
        <ProjectLatest></ProjectLatest>
        <Contact></Contact>
      </div>
    </>
  );
}

export default HomePage;

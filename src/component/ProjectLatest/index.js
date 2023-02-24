import styles from "./ProjectLatest.module.scss";
import classNames from "classnames/bind";
import CardProject from "../ProjectCard";
import TitleSection from "../TitleSection";

let cx = classNames.bind(styles);

function ProjectLatest() {
  const sliderData = [
    {
      name: "Music website",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://cdn.discordapp.com/attachments/1014721583052496917/1078491584460496927/image.png",
    },
    // {
    //   name: "Music website 2",
    //   member: 2,
    //   tech: "ReactJS,NodeJS,Mui",
    //   github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
    //   img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc06d9f5150d2fcc8dc919_WestStudio_LOL_Splash_0173.jpg",
    // },
    // {
    //   name: "Music website 3",
    //   member: 2,
    //   tech: "ReactJS,NodeJS,Mui",
    //   github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
    //   img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc071716ef8ff7e007da42_WestStudio_LOL_Splash_0174.jpg",
    // },
    // {
    //   name: "Music website 4",
    //   member: 2,
    //   tech: "ReactJS,NodeJS,Mui",
    //   github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
    //   img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc07f0dd362539d5670442_WestStudio_LOL_Splash_0178.jpg",
    // },
    // {
    //   name: "Music website 5",
    //   member: 2,
    //   tech: "ReactJS,NodeJS,Mui",
    //   github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
    //   img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc07bfde84c1b8115f141e_WestStudio_LOL_Splash_0177.jpg",
    // },
    // {
    //   name: "Music website 6",
    //   member: 2,
    //   tech: "ReactJS,NodeJS,Mui",
    //   github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
    //   img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc078958041686be87a119_WestStudio_LOL_Splash_0176.jpg",
    // },
  ];
  return (
    <div id={cx("project_latest")}>
      <TitleSection content="Latest project"></TitleSection>
      <div className={cx("project_card")}>
        {sliderData.map((slide, index) => {
          return (
            <CardProject
              img={slide.img}
              name={slide.name}
              content={slide.tech}
              key={index}
            ></CardProject>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectLatest;

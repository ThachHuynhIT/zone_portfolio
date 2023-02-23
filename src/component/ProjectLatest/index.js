import styles from "./ProjectLatest.module.scss";
import classNames from "classnames/bind";
import CardProject from "../ProjectCard";
import TitleSection from "../TitleSection";

let cx = classNames.bind(styles);

function ProjectLatest() {
  const sliderData = [
    {
      name: "Music website 1",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/273158413_3261568100742538_5232867171666590438_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mLV04Not9MkAX-GbBwH&tn=xDielR37HqO92xlp&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfD4G--0JJ3LUCnxFr9GX9JPe5nwczBVX4wvh2en_nh0hA&oe=63FB57AE",
    },
    {
      name: "Music website 2",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc06d9f5150d2fcc8dc919_WestStudio_LOL_Splash_0173.jpg",
    },
    {
      name: "Music website 3",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc071716ef8ff7e007da42_WestStudio_LOL_Splash_0174.jpg",
    },
    {
      name: "Music website 4",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc07f0dd362539d5670442_WestStudio_LOL_Splash_0178.jpg",
    },
    {
      name: "Music website 5",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc07bfde84c1b8115f141e_WestStudio_LOL_Splash_0177.jpg",
    },
    {
      name: "Music website 6",
      member: 2,
      tech: "ReactJS,NodeJS,Mui",
      github: "https://github.com/VuongHuy2k1/Softwares-Games-Shop",
      img: "https://uploads-ssl.webflow.com/5c1bb997cb1dd611a0e6c8ce/61bc078958041686be87a119_WestStudio_LOL_Splash_0176.jpg",
    },
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
        {/* <CardProject></CardProject>
        <CardProject></CardProject>
        <CardProject></CardProject> */}
      </div>
    </div>
  );
}

export default ProjectLatest;

import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Hospital Management",
    description:
      "👉 hospital management system with appointment booking, admin panel, and appointment display. Demo: Admin email: admin@gmail.com, Password: 12345.",
    details: ["Mongodb", "Express", "React", "Node Js"],
    imgSrc:
      "https://a.storyblok.com/f/86602/965x541/f99b8b2b37/hospital-management-system-sm-01.png",
    link: "https://hospital-management-frontend-bp5y.onrender.com/",
    gitl: "https://github.com/Ar273404/hospitalManagement",
  },
  {
    id: 2,
    title: "Job posting/Seeking website",
    description:
      "👉 Built a full-stack job site for posting jobs, reviewing applications, managing details, with secure data, real-time updates, and a responsive UI. ",
    badge: "Mern stack",
    details: ["Mongodb", "Express", "React", "Node Js"],
    imgSrc:
      "https://img.freepik.com/premium-photo/online-job-search-modish-website-worker-search-job-opportunities_31965-80700.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user",
    link: "https://arun-job-seeker.netlify.app/",
    gitl: "https://github.com/Ar273404/job-frontend",
  },
  {
    id: 3,
    title: "Testify Food Delivery app",
    description:
      "👉 Developed a food delivery website with user authentication, responsive design, admin dashboard for orders and restaurants, and payment options.",
    badge: "Mern stack",
    details: ["Mongodb", "Express", "React Native", "Node Js"],
    imgSrc:
      "https://th.bing.com/th/id/OIP.LWxj90RiBh3gOM03edKqyAHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    link: "https://finalfoodfronted.onrender.com",
    gitl: "https://github.com/Anuragyadav622003/Testify_food_delivery_app",
  },
  {
    id: 4,
    title: "Blood Matcher",
    description:
      "Developed a blood matcher that helps identify compatible donors and recipients, ensuring accurate blood donations and improving transfusion efficiency.",
    details: ["Html", "Css", "Javascript"],
    imgSrc:
      "https://thumbs.dreamstime.com/b/blood-groups-donor-recipients-type-compatibility-possible-combinations-donation-match-arrows-show-which-can-be-used-311979870.jpg",
    link: "https://ar273404.github.io/blood-matcher/",
    gitl: "https://github.com/Ar273404/blood-matcher",
  },
  {
    id: 5,
    title: "Candy Crush",
    description:
      "Created a Candy Crush game with match-3 gameplay, colorful graphics, and challenging levels for an engaging experience.",
    details: ["Html", "Css", "Javascript"],
    imgSrc:
      "https://www.shutterstock.com/image-vector/match-3-candy-game-ui-600nw-2259723079.jpg",
    link: "https://github.com/Anuragyadav622003/FitFolio-Health-Fitness-tracker-android-app/releases/download/v1.0.0/app-release.apk",
    gitl: "https://github.com/Ar273404/Candy.git.io",
  },
  {
    id: 6,
    title: "FitFolio  app",
    description:
      "Developed Healthify, a React Native app featuring a to-do list, activity tracking with video guidance, and calorie burn monitoring. Implemented JWT for authentication and data management. Enhanced user experience with real-time push notifications.",
    details: ["React Native", "Expressjs","Nodejs","MongoDB"],
    imgSrc:
      "https://images.creativemarket.com/0.1.0/ps/11330168/2250/1500/m1/fpnw/wm0/fitness-cover-primary-.png?1640751677&s=44c18a5fcada74be90582a841312f0e5",
    link: "https://github.com/Anuragyadav622003/FitFolio-Health-Fitness-Tracker-app-android/releases/download/v1.0.0/app-release.apk",
    gitl: "https://github.com/Anuragyadav622003/FitFolio-Health-Fitness-Tracker-app-android",
  },
];

const Project = () => {
  return (
    <div className=" project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        👉 top recent project with live links and source code
      </p>
      <div className="row" id="ads">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => {
      return (
        <div key={project.id} className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div className="w-full h-[300px] overflow-hidden mx-auto">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <h4 className="text-sm text-blue-600 font-bold mt-2 mb-2">
                {project.description}
              </h4>
              <div className=" justify-between">
                {project.details.map((item, index) => {
                  return (
                    <span key={index} className="card-detail-badge mx-1">{item}</span>
                  );
                })}
              </div>
            </div>
            <div className="font-[sans-serif] space-x-4 text-center mt-3">
              <a href={project.link}>
                <button
                  type="button"
                  className="px-3 py-2 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-blue-800 active:bg-blue-700">
                  Live
                </button>
              </a>
              <a href={project.gitl}>
                <button
                  type="button"
                  className="px-3 py-2 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </div>
  );
};

export default Project;

// hero
import { createContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Heroimg from '../img/header.jpg'
import { FaGithub } from "react-icons/fa";



// projext
import img1 from '../img/projectThumbnile/Amazon.png'
import img2 from '../img/projectThumbnile/udemy.png'


// resume
import Bavan_Resume from '../img/Resume.pdf'

//advance project
// img / project-1

import projectimg1 from '../img/project-1/kfc.png'
import projectimg2 from '../img/project-1/madasa.png'
import projectimg3 from '../img/project-1/nostra1.png'
import projectimg4 from '../img/project-1/udamy-clone.png'
import projectimg5 from '../img/project-1/tripadvicer-clone.png'
import projectimg6 from '../img/project-1/greeden.png'
import projectimg7 from '../img/project-1/weather-api1.png'
import projectimg8 from '../img/projectThumbnile/Amazon.png'
import projectimg9 from '../img/projectThumbnile/udemy.png'

// mini project
// // img / project-2

import miniproject1 from '../img/project-1/Anime.png'

import miniproject6 from '../img/project-2/celibrity.png'

import miniproject10 from '../img/project-2/random-color-generator.png'

import miniproject13 from '../img/project-2/flex.png'
import miniproject14 from '../img/project-2/menu.png'
import miniproject15 from '../img/project-2/event.png'
import miniproject16 from '../img/project-2/actToDo.png'
import miniproject17 from '../img/project-2/animal.png'
import miniproject18 from '../img/project-2/perfume.png'

// games project
// // img / project-3
import gamesproject1 from '../img/project-3/tictactoe.png'


// All data

let database = createContext({})
export let Dataprovider = ({ children }) => {

    // hero 

    let details = {
        linkin_link: 'https://www.linkedin.com/in/bavanagaran-r/',
        gamil_link: "mailto:bavanab42@gmail.com",
        git_link: "https://github.com/bavanagaranR",
        name: "Bavanagaran R",
        my_domine: "I am Bavanagaran",

        linkdin_logo: <FaLinkedin size={30} />,
        gamil_logo: <SiGmail size={30} />,
        git_logo: <FaGithub size={30} />,
        image: Heroimg

    }



    let about = {
        name: "Bavanagaran",
        age: 19,
        gmail: "bavanab42@gmail.com",
        from: "Sivagangai",
        title: "About Me",
        para_1: "Hi, my name is Bavanagaran. Im a MERN Full Stack Developer.",
        para_2: "I am proficient in frontend skills like:",
        skills: "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Node.js , Express.js , MongoDB ,SQL,Java",
        title_2: "Education",
        college_1: "Govt Higher Secondary School - Eriyur, Sivaganga",
        college_1_year: "2021-2022",
        college_1_degree: "Higher Secondary Education",
        college_2: "Panimalar Engineering College (Autonomous), Chennai",
        college_2_year: "2022-Present",
        college_2_degree: "Bachelor of Technology ",
        address: "pongundupatti,KattaniPatti(po),Sivaganga(dt)",

        experience: [
            //             {
            //     "jobType": "Full-Time",
            //     "company": "FeatherSolution",
            //     "duration": "November 2024 - Feb 2025",
            //     "description": "Currently working as a MERN Stack and React Native Developer, contributing to the development of scalable full-stack web applications and cross-platform mobile apps. Engaged in building dynamic user interfaces, integrating APIs, and optimizing performance across platforms. Collaborating with teams to implement best practices in coding, debugging, and project management."
            // },

            {
                "jobType": "Web Developer & Designer– Madasa'25",
                "company": "Panimalar Engineering College ",
                "duration": "Jan 2025 - March 2025",
                "description": "I worked as a Web Developer for PEC, contributing to the design and development of key event websites. My role involved creating responsive and visually engaging web pages to enhance user experience."
            },
            {
                jobType: "Intern",
                company: "Internpe",
                duration: "May 2025 - June 2025",
                description: "I worked as a Web Development Intern at InternPe, focusing on creating responsive and interactive web applications. My role involved designing user-friendly interfaces and enhancing website functionality.",
            }
        ],

        certifications: [
            {
                provider: "Error Makes Clever Academy",
                course: "MERN Full Stack Development",
                duration: "May 2024 to September 2024",
                description: "Completed an intensive MERN stack course focused on mastering HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. Gained hands-on experience in building full-stack web applications, developing RESTful APIs, and managing version control with Git."
            },
            //             {
            //     "provider": "AKINFOPARK",
            //     "course": "Full Stack Development",
            //     "duration": "October 2024 to November 2024",
            //     "description": "Completed a focused full stack development program designed to strengthen expertise in building modern web applications. Acquired hands-on experience with front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks including Node.js and Express.js. Gained practical knowledge in database management using MongoDB and PostgreSQL, along with exposure to Git for version control and Agile methodologies for project management."
            // }

        ]

    };






    let project = {
        title: "Projects",
        para_1: "Here are some of my best projects built with React.",
        projects: [


           
            {
                title: "Amazon Prime Clone",
                description: "A fully responsive Amazon Prime UI clone built using HTML, CSS, and JavaScript. This project replicates the core layout and design of the Amazon Prime video streaming platform, featuring interactive navigation, dynamic content sections, responsive carousels, and user-friendly UI components. It showcases front-end development skills and attention to detail in replicating a real-world streaming service interface.",
                img: img1,
                site: "https://bavanagaranr.github.io/Amazon-Prime-Clone/",
            },
             {
                title: "Udemy-clone ",
                description: "Developed a fully responsive Udemy clone application using React.js and Tailwind CSS.",
                site: "https://udamy-react-latest.vercel.app/",
                img: img2,

            },
            {
                title: "visit my allprojext",
                description: "",

                link: "/allproject"
            }
        ]
    };
    // img: img3,

    // resume


    let resume = {
        title: "Resume",
        View_btn: "View CV",
        Downlode_btn: "Download CV",
        pdf: Bavan_Resume
    };


    // contact


    let contact = {
        title: "Contact",
        para_1: "If you want to discuss more about details,please contact me",
        gamil: 'bavanab42@gmail.com',
        mob_number: "9003820720"


    }


    // footer
    let year = new Date()
    let footer = {
        date: year.getFullYear()

    }


    // advance project
    let advancrproject = {
        details:
            [


                { name: "College Event Management ", img: projectimg2, link: "https://madasa.peccsbs.xyz/" },
                { name: "Shoping Website", img: projectimg3, link: "https://bavanagaranr.github.io/nostra-websiite/" },
                { name: "Udamy-clone", img: projectimg4, link: "https://react-udamy.vercel.app/" },
                { name: "Tripadvicer-clone", img: projectimg5, link: "https://bavanagaranr.github.io/tripadvisor-latest-clone/" },
                { name: "Greeden Website", img: projectimg6, link: "https://bavanagaranr.github.io/greenden-tailwind/" },
                { name: "Weather App", img: projectimg7, link: "https://bavanagaranr.github.io/Wether-App/" },
                { name: "Chiken Restarent website", img: projectimg1, link: "https://bavanagaranr.github.io/kfc-chiken/" },
                { name: "Amazon Prime Clone ", img: projectimg8, link: "https://bavanagaranr.github.io/Amazon-Prime-Clone/" },
                { name: "Udemy-clone ", img: projectimg9, link: "https://udamy-react-latest.vercel.app/" },



            ]
    }
    // mini project
    let miniproject = {
        details: [
            { name: "Anime Gallery App", img: miniproject1, link: "https://bavanagaranr.github.io/Image-gallery-web-for-Broken-Heros/" },

            { name: "Celibrity Cart", img: miniproject6, link: "https://card-react-gamma.vercel.app/" },

            { name: "Random Color Generator", img: miniproject10, link: "https://bavanagaranr.github.io/random-colour/" },

            { name: "Flex subscription", img: miniproject13, link: "https://bavanagaranr.github.io/Flex-Subscription-Website/" },
            { name: "Menu Card", img: miniproject14, link: "https://bavanagaranr.github.io/reestar-website/" },
            { name: "Event Page", img: miniproject15, link: "https://bavanagaranr.github.io/event-page/" },
            { name: "Act To Do App", img: miniproject16, link: "https://actodo-ten-hazel.vercel.app/" },
            { name: "Image Gallery App", img: miniproject17, link: "https://bavanagaranr.github.io/image-gallery-website/" },
            { name: "Perfume App", img: miniproject18, link: "https://perfumy-react-chi-six.vercel.app/" },
        ]
    }

    //    games project
    let gamesproject = {
        details: [
            // { name: "Tic-Tak-Toe", img: gamesproject1, link: "https://pasupathi-tic-tac-toe.netlify.app/" },

        ]
    }

    let combinedProjects = [
        ...advancrproject.details,
        ...miniproject.details,
        ...gamesproject.details,
    ];









    return (
        <database.Provider value={{
            details, about, project, resume, contact, footer, advancrproject, miniproject, gamesproject, combinedProjects

        }}>
            {children}
        </database.Provider>
    )

}
export default database

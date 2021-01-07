import React from "react";

import SEO from "../components/seo";



function WorkPage() {

    const portfolioProjects = [
        {
            title: "Pig Game",
            descripton: "A game of Pig created using HTML, CSS, and Javascript",
            githubLink: "https://github.com/Wrighttyler/My-Portfolio-site",
            link: "https://frosty-kepler-104c54.netlify.app/"
        },
        {
            title: "NBA Player Stat App ",
            descripton: "A web app that allows users to search any NBA player and get their statistics. Created using ReactJS and MaterialUI",
            githubLink: "https://github.com/Wrighttyler/nba-stat-app",
            link: "https://fervent-northcutt-56ffd9.netlify.app"
        },
        {
            title: "Portfolio v1",
            descripton: "The first iteration of this portfolio site. Created using HTML, CSS(SCSS), and JavaScript",
            githubLink: "https://github.com/Wrighttyler/My-Portfolio-site",
            link: "https://adoring-mcclintock-0d9daa.netlify.app"
        },



    ]

    return (
        <>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Resume"
            />


            <h1 className="text-4xl border-b-2 border-yellow-500"> Projects</h1>
            <section className="mx-auto  flex flex-col flex-wrap  w-full md:w-2/3 justify-center items-center md:flex-row">
                {portfolioProjects.map(project => (

                    <div key className=" py-8 w-auto md:px-4 md:m-auto md:max-w-sm ">
                        <div className="bg-white flex flex-col sm:w-auto shadow-2xl" >
                            <div>
                                <img src={project.im} />
                            </div>
                            <div className="px-5 py-2 mt-2 bg-white h-auto md:h-40 w-full">
                                <h2 className="font-bold text-lg text-gray-800 text-left">{project.title}</h2>
                                <p className="sm:text-sm text-xs text-gray-700  mr-1 my-3 text-left">
                                    {project.descripton}
                                </p>
                            </div>
                            <div className="flex flex-row">
                                <button className="p-3 w-12">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
                                    </a>
                                </button>
                                <button className="p-3 w-12">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 16.707031 2.2929688 L 15.292969 3.7070312 L 17.585938 6 L 17 6 C 10.936593 6 6 10.936593 6 17 L 6 18 L 8 18 L 8 17 C 8 12.017407 12.017407 8 17 8 L 17.585938 8 L 15.292969 10.292969 L 16.707031 11.707031 L 21.414062 7 L 16.707031 2.2929688 z M 2 8 L 2 9 L 2 19 C 2 20.64497 3.3550302 22 5 22 L 19 22 C 20.64497 22 22 20.64497 22 19 L 22 18 L 22 17 L 20 17 L 20 18 L 20 19 C 20 19.56503 19.56503 20 19 20 L 5 20 C 4.4349698 20 4 19.56503 4 19 L 4 9 L 4 8 L 2 8 z" /></svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                ))}

            </section>
        </>
    );
}

export default WorkPage;

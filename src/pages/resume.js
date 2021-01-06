import React from "react";

import SEO from "../components/seo";

function ResumePage() {

  const workExperience = [
    {
      id: 1,
      company: "Purdue Univeristy ECN",
      durationOfEmployment: "August 2020-Present",
      location: "West Lafayette, IN",
      bullet1: "Updated frontend of Engineering Computer Network ticketing system to React.js and Material-UI that is used by over 55 staff members.",
      bullet2: "Conducted usability testing to evaluate viability of design concepts. Created and maintained frontend code and documentation standards.",
      bullet3: "Ensured design complied with current user experience and WCAG 2.o standards",
      position: "User and Desktop Services",
    },
    {
      id: 2,
      company: "K&D Innovation",
      durationOfEmployment: "May 2020-Present",
      location: "Huntsville, AL",
      position: "Mobile Application Developer ",
      bullet1: "Developed a multi-platform mobile application utilizing C# and Xamarin as well as following the Model-View-ViewModel (MVVM) design pattern",
      bullet2: "Integrated Foursquare API using REST architectural standards",
      bullet3: "Converted mockup to functioning code allowing for interaction with business logic",
    },

    {
      id: 3,
      company: "Purdue University",
      durationOfEmployment: "August 2018-December 2019",
      location: "West Lafayette, IN",
      position: "Teaching Assistant",
      bullet1: "Supported head faculty member with task such as classroom instruction material, exams, grading, and attendance",
      bullet2: "Moderated group discussions between 6 students in order to develop a safe learning environment",
      bullet3: "Educated students on proper goal setting and time management skills to help improve student’s performance in academic settings",
    },
  ]

  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Resume"
      />


      <section className="mx-auto w-full flex flex-col justify-center items-center md:flex-column">

        <h1 className="text-4xl border-b-2 border-yellow-500">Resume</h1>
        <div className=" w-2/3 m-8 p-6 bg-gray-100 rounded-md">
          <div className="border-r-2 border-gray-200 border-dotted absolute h-full top-0  -left-7" ></div>
          <ul className="list-none m-0 p-0">
            {workExperience.map(job => (
              <li key={job.id} className="mb-2">
                <div className="flex items-center mb-1 ">
                  <div className="bg-yellow-600 rounded-full h-4 w-4 border-gray-200 border-2 ">
                  </div>
                  <div className=" ml-4 font-bold">{job.durationOfEmployment} - {job.position}</div>
                </div>
                <div className="  ml-10 text-left font-medium text-blue-500">
                  {job.location}
                </div>
                <div className="ml-12 text-left ">
                  <ul className="list-disc mx-auto">
                    <li>{job.bullet1}</li>
                    <li>{job.bullet2}</li>
                    <li>{job.bullet3}</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ResumePage;

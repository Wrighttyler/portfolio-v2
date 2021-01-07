import React from "react";

import SEO from "../components/seo";
import tylerHeadshot from "../images/headshot.png"

function AboutPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`,`web developer`, `portfolio`,`frontend`,`resume`]}
        title="About"
      />

      <h1 className="text-2xl md:text-4xl mb-1 pb-1 md:pb-4 border-b-2 border-yellow-500">About</h1>
      <section className="mx-auto max-w-4xl flex flex-col justify-center items-center lg:flex-row ">
        <div className="md:w-full md:mr-1">
          <p className="pl-4 text-lg md:text-xl w-full text-left leading-loose my-5">
          I am a student studying Web Programming and Design at Purdue University. My mom was my inspiration for taking up web design and she has helped guide me along the way. She currently works as a senior programming analyst in Indianapolis, IN. I&#39;ve always had a passion for art and technology and saw web design as a way to blend these two loves.
          </p>
          <p className="pl-4 text-lg md:text-xl w-full text-left leading-loose my-10 sm:my-1 sm:text-yellow-500 text-blue-500">
        Let&#39;s work together to create the site you want.
          </p>

        </div>

        <figure className="w-1/2 md:w-1/3">
          <img className="border-blue-200 border-1" alt="My Headshot" src={tylerHeadshot} />
        </figure>
      </section>
    </>
  );
}

export default AboutPage;

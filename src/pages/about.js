import React from "react";

import SEO from "../components/seo";
import tylerHeadshot from "../images/headshot.png"

function AboutPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`,`developer`, `frontend`, `web`,`portfolio`]}
        title="About"
      />

      <h1 className="text-4xl mb-3 pb-4 border-b-2 border-yellow-500">About</h1>
      <section className="mx-auto max-w-4xl flex flex-col justify-center items-center md:flex-row ">
        <div className="md:w-full md:mr-1">
          <p className="pl-4 text-xl w-full text-left leading-loose my-10">
          I am a student studying Web Programming and Design at Purdue University. My mom was my inspiration for taking up web design and she has helped guide me along the way. She currently works as a senior programming analyst in Indianapolis, IN. I&#39;ve always had a passion for art and technology and saw web design as a way to blend these two loves.
          </p>
          <p className="pl-4 text-xl w-full text-left leading-loose my-10 text-blue-500">
        Let&#39;s work together to create the site you want.
          </p>

        </div>

        <figure className="w-2/3 md:w-1/3">
          <img className="border-blue-200 border-1" alt="My Headshot" src={tylerHeadshot} />
        </figure>
      </section>
    </>
  );
}

export default AboutPage;

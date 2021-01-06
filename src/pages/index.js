import React from "react";
import Header from "../components/header";
import SEO from "../components/seo";
import AboutPage from "./about";
import ContactPage from "./contact";
import ResumePage from "./resume";
import WorkPage from "./work";
import { Link } from "gatsby";
import Footer from "../components/footer";


function IndexPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <Header />
      <div className="bg-gray-100">
      <section className=" hero-container flex flex-col justify-center items-center  text-center h-full bg-gray-700">
        <h1 className="text-white font-semibold text-3xl p-5 max-w-2xl">Hello Im <span className="text-blue-500">Tyler Wright</span> and I love to design beautiful websites and web applications</h1>
        <Link to="/#resume">
        <button className="bg-blue-500 border-blue-600 rounded my-5 hover:bg-yellow-500 hover:border-yellow-600 border-b-4  p-3 text-white  ">View my work</button>
        </Link>
      </section>
      <section id="about" className="h-screen flex flex-col mb-10 justify-center items-center mx-auto text-center ">
     <AboutPage/>
      </section>
      <section id="resume" className="h-screen bg-white p-10 flex flex-col justify-center items-center mx-auto text-center">
     <ResumePage/>
     <WorkPage/>
      </section>
      <section id="contact" className="h-screen flex flex-col justify-center items-center text-center  ">
     <ContactPage/>
      </section>
      </div>
      <Footer/>
    </>
  );
}

export default IndexPage;

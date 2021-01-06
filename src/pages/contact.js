import React from "react";
import SEO from "../components/seo";

function ContactPage() {

  
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <h1 className="text-4xl border-b-2 border-yellow-500">Contact</h1>
      <section className="w-full m-5 max-w-3xl">

        <form
        action="https://formspree.io/f/mdowpqle"
        method="POST"
        >
          <label
            className="block m-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
          name="first-name"
            className="w-2/3 mb-6 rounded-md border-gray-800  md:w-full"
            id="first-name"
            placeholder="First Name"
            type="text"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            name="last-name"
            className="w-2/3 mb-6 rounded-md border-gray-800  md:w-full"
            id="last-name"
            placeholder="Last Name"
            type="text"
            required
          />
          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="e-mail"
          >
            E-Mail
          </label>

          <input
            name="email"
            className="w-2/3 mb-6 rounded-md border-gray-800  md:w-full"
            id="last-name"
            placeholder="E-mail"
            type="email"
            required

          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            name="message"
            className="w-2/3 mb-6 rounded-md border-gray-800  md:w-full"
            id="message"
            placeholder="How can I help you?"
            rows="8"
            required
          />

          <button className="px-4 py-2 w-2/3 text-sm font-bold text-white bg-blue-500 border-b-4 border-blue-600 rounded hover:border-yellow-600 hover:bg-yellow-500  md:w-full">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;

import React from "react";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <h1 className="text-4xl">Contact</h1>
      <section className="w-full m-5 max-w-3xl">

        <form>
          <label
            className="block m-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
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
            className="w-2/3 mb-6 rounded-md border-gray-800  md:w-full"
            id="message"
            placeholder="How can I help you?"
            rows="8"
          />

          <button className="px-4 py-2 w-2/3 text-sm font-bold text-white bg-blue-400 border-b-4 border-blue-500 rounded hover:border-blue-600 hover:bg-blue-700  md:w-full">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;

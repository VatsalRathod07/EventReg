import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-10 sm:py-20" id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex justify-center">
          <form className="max-w-lg w-full px-4 flex flex-col ">
            <input
              type="text"
              className="w-full border-black border-[2px] rounded-sm bg-transparent px-3 py-2 mb-4 focus:outline-none"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="w-full border-black border-[2px] rounded-sm bg-transparent px-3 py-2 mb-4 focus:outline-none"
              placeholder="Enter your email"
            />
            <textarea
              rows="5"
              className="w-full border-black border-[2px] rounded-sm bg-transparent px-3 py-2 mb-4 focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

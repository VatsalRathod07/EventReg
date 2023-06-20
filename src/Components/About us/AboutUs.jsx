import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 px-5" id="about">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
          <div className="flex flex-col justify-center items-center mb-8 gap-5 text-left sm:text-left">
            <p className="text-lg text-gray-700 leading-loose">
              Event Registration is a leading event management platform that simplifies the entire event lifecycle. We empower event organizers with user-friendly tools and innovative solutions to create exceptional experiences.
            </p>

            <p className="text-lg text-gray-700 leading-loose">
              Our mission is to revolutionize the way events are planned, executed, and enjoyed. With our comprehensive features and intuitive interface, you can effortlessly manage registrations, engage attendees, and analyze event performance. By combining cutting-edge technology with a customer-centric approach, we ensure seamless event operations and maximize attendee satisfaction. From customizable registration forms to real-time communication and data insights, we have everything you need to make your event a resounding success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

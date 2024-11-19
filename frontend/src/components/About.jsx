import React from 'react';
import aboutImage from "../../public/Banner.jpg"; // Make sure to replace with your actual image path

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10">
        {/* Left Section (Text) */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-0">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              About Us
            </h1>
            <p className="text-xl">
              We are passionate about books and dedicated to providing our readers with a diverse selection of literature. Our mission is to foster a love of reading and to create a community of book enthusiasts. Join us on this literary journey and discover your next great read!
            </p>
            <p className="text-xl">
              Whether you're looking for educational resources, thrilling novels, or heartwarming stories, we have something for everyone. Our team is committed to curating a collection that inspires and engages readers of all ages.
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 md:order-2 flex justify-center">
          <img src={aboutImage} className="w-full h-auto" alt="About Us" />
        </div>
      </div>
    </>
  );
}

export default About;
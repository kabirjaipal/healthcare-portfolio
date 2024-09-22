import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-gray-900 text-white pb-1 py-6 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl mb-2">Socials</h2>
          <div className="flex gap-2 underline text-indigo-400">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-lg font-bold">
            &copy; {date.getFullYear()} Healthcare Company
          </p>
          <p className="text-sm">All rights reserved</p>
          <p className="text-sm mt-2">
            Providing quality healthcare services to improve lives.
          </p>
        </div>
      </div>
      <p className="text-md text-center mt-4">Coded By @kabirjaipal</p>
    </footer>
  );
};

export default Footer;

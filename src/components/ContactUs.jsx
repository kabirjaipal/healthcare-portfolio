import React from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineInstagram,
} from "react-icons/ai";

const contactMethods = [
  {
    icon: <AiOutlineMail className="text-4xl" />,
    text: "Email: info@healthcarecompany.com",
    link: "mailto:info@healthcarecompany.com",
  },
  {
    icon: <AiOutlinePhone className="text-4xl" />,
    text: "Phone: (123) 456-7890",
    link: "tel:+1234567890",
  },
  {
    icon: <AiOutlineWhatsApp className="text-4xl" />,
    text: "WhatsApp: (123) 456-7890",
    link: "https://wa.me/1234567890", // Use the correct WhatsApp link
  },
  {
    icon: <AiOutlineInstagram className="text-4xl" />,
    text: "Instagram: @healthcarecompany",
    link: "https://www.instagram.com/healthcarecompany/", // Use the correct Instagram link
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-4 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="flex justify-between items-center flex-wrap gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <div className="bg-white p-6 rounded-lg shadow-md mt-4 cursor-pointer text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col items-center space-x-4 mb-2">
                  {method.icon}
                  <p className="text-lg">{method.text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

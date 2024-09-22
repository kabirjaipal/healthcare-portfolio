import React, { useState } from "react";

const FAQs = () => {
  const faqsData = [
    {
      question: "What are your business hours?",
      answer:
        "Our business hours are from Monday to Friday, 9:00 AM to 5:00 PM. We are closed on weekends and public holidays.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by contacting our reception desk at (123) 456-7890 or using our online appointment booking system on our website.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept a variety of insurance plans. Please contact our billing department for more information on accepted insurance providers.",
    },
    // Add more FAQs as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="md:text-3xl text-xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4 flex-wrap">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 h-max rounded-lg shadow-md m-2 transition-height overflow-hidden"
            >
              <div
                className="cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              </div>
              <div
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

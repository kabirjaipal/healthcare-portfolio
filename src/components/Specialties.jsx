import React from "react";

const Specialties = () => {
  const specialtiesData = [
    {
      specialty: "Cardiology",
      description:
        "Advanced cardiac care with a focus on prevention and treatment.",
      testimonial: {
        author: "John Doe",
        quote:
          "The cardiology team at Healthcare Company saved my life. Their expertise and care were exceptional.",
      },
    },
    {
      specialty: "Orthopedics",
      description:
        "Comprehensive orthopedic services for bone and joint health.",
      testimonial: {
        author: "Jane Smith",
        quote:
          "I received excellent orthopedic care at Healthcare Company. The team helped me recover and regain mobility.",
      },
    },
    // Add more specialties as needed
  ];

  return (
    <section id="specialties" className="py-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Specialties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtiesData.map((specialty, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg transition-transform transform hover:scale-95 cursor-pointer m-4 shadow-sm shadow-gray-900"
            >
              <h3 className="text-xl font-bold mb-2">{specialty.specialty}</h3>
              <p className="text-gray-700">{specialty.description}</p>

              {specialty.testimonial && (
                <div className="mt-4">
                  <p className="italic text-gray-500">Testimonial:</p>
                  <p className="text-gray-700">{`"${specialty.testimonial.quote}"`}</p>
                  <p className="font-bold text-gray-800">{`- ${specialty.testimonial.author}`}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Primary Care",
      description:
        "Comprehensive primary care services for individuals and families.",
      icon: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to your icon
    },
    {
      title: "Specialty Care",
      description:
        "Specialized medical care for specific health conditions and diseases.",
      icon: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to your icon
    },
    {
      title: "Emergency Services",
      description:
        "24/7 emergency care with a team of experienced healthcare professionals.",
      icon: "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to your icon
    },
    // Add more services as needed
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="mb-4 h-[256px] w-full object-cover rounded-sm"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

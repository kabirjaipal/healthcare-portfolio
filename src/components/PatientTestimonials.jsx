import React from "react";

const PatientTestimonials = () => {
  const testimonialsData = [
    {
      author: "Mary Johnson",
      feedback:
        "I received excellent care at Healthcare Company. The staff was friendly and attentive, and I felt well taken care of.",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the avatar
    },
    {
      author: "Mary Johnson",
      feedback:
        "I received excellent care at Healthcare Company. The staff was friendly and attentive, and I felt well taken care of.",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the avatar
    },
    {
      author: "Robert Smith",
      feedback:
        "The healthcare professionals at Healthcare Company went above and beyond to ensure my well-being. I highly recommend their services.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the avatar
    },
    {
      author: "Robert Smith",
      feedback:
        "The healthcare professionals at Healthcare Company went above and beyond to ensure my well-being. I highly recommend their services.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the avatar
    },
    {
      author: "Robert Smith",
      feedback:
        "The healthcare professionals at Healthcare Company went above and beyond to ensure my well-being. I highly recommend their services.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the avatar
    },
  ];

  return (
    <section id="patienttestimonials" className="py-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Patients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center m-4"
            >
              <img
                src={testimonial.avatar}
                alt={`${testimonial.author} Avatar`}
                className="mx-auto mb-4 rounded-full object-cover"
                style={{ width: "120px", height: "120px" }}
              />
              <p className="text-gray-600">{`"${testimonial.feedback}"`}</p>
              <p className="font-bold text-gray-800">{`- ${testimonial.author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;

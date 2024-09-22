import React from "react";

const TeamMembers = () => {
  const teamMembersData = [
    {
      name: "Dr. John Doe",
      role: "Cardiologist",
      credentials: "MD, FACC",
      bio: "Dr. John Doe is a board-certified cardiologist with over 15 years of experience. He specializes in...",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the photo
    },
    {
      name: "Dr. Jane Smith",
      role: "Orthopedic Surgeon",
      credentials: "MD, FRCS",
      bio: "Dr. Jane Smith is a renowned orthopedic surgeon known for her expertise in joint replacement surgeries...",
      photo:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to the photo
    },
    {
      name: "Dr. Sarah Williams",
      role: "Pediatrician",
      credentials: "MD, FAAP",
      bio: "Dr. Sarah Williams is a compassionate pediatrician dedicated to providing exceptional care for children of all ages.",
      photo:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Michael Johnson",
      role: "Neurologist",
      credentials: "MD, PhD",
      bio: "Dr. Michael Johnson is a highly skilled neurologist specializing in the diagnosis and treatment of neurological disorders.",
      photo:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Dermatologist",
      credentials: "MD, FAAD",
      bio: "Dr. Emily Rodriguez is a board-certified dermatologist with expertise in skincare, cosmetic procedures, and dermatologic surgery.",
      photo:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Richard Anderson",
      role: "Gastroenterologist",
      credentials: "MD, FACG",
      bio: "Dr. Richard Anderson is an experienced gastroenterologist specializing in the diagnosis and treatment of digestive system disorders.",
      photo:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="teammembers" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center m-4"
            >
              <img
                src={member.photo}
                alt={`${member.name} Photo`}
                className="mx-auto mb-4 rounded-full object-cover"
                style={{ width: "120px", height: "120px" }}
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-500 mb-2">{member.credentials}</p>
              {/* <p className="text-gray-600">{member.bio}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

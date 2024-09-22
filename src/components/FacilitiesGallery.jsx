import React, { useState } from "react";

const FacilitiesGallery = () => {
  const galleryData = [
    "https://images.unsplash.com/photo-1619975101918-6d27886e8c6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1619975102790-13050c230cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512677859289-868722942457?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="facilitiesgallery" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Facilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden cursor-pointer m-4"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Facility Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative max-w-screen-md mx-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                &times;
              </button>
              <img
                src={galleryData[selectedImage]}
                alt={`Facility Image ${selectedImage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilitiesGallery;

import React from "react";
import "./../styles/Homepage.css";
import images from "../data/data.json";

const HomePage = () => {
  return (
    <section className="homepage-section">
      <div className="image-container">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;

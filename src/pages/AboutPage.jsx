import React from "react";
import "./../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <p>
          Joel Mamboka N'Kumu is a Congolese artist who was born in the vibrant
          city of Kinshasa, the Democratic Republic of Congo. His artistic
          journey has led him to the heart of downtown Cape Town, South Africa,
          where he currently lives and maintains his studio. This relocation has
          undoubtedly influenced his perspective and creative output,
          positioning him within a dynamic and diverse artistic landscape.
        </p>
        <p>
          Nkumu's introduction to the South African art scene was marked by a
          significant inclusion in the emerging artists program at the
          prestigious Zeitz MOCAA Museum in 2019. This was followed by his
          participation in the group exhibition "Home is Where the Art Is" at
          the same institution, further establishing his presence. His work has
          since been showcased in numerous group exhibitions and highlighted in
          two solo shows at Youngblood Gallery. Nkumu's artistic reach extends
          internationally through representation in the United States via The
          Black Art House digital gallery, in Kenya at the Bobu Africa Gallery,
          in Lisbon at This nota white cube, and through representation by read
          contemporary art/Knysna fine-art (formerly Everard Read Gallery
          Franschhoek), demonstrating a growing global recognition of his
          artistic vision.
        </p>
      </div>
      <div className="about-profile">
        <img
          src="https://ik.imagekit.io/06ua5mbab/images/about.jpeg?updatedAt=1746038974362"
          alt="profile"
        />
      </div>
    </section>
  );
};

export default AboutPage;

import React from "react";
import "./../assets/styles/Testimonials.css"; 

function Testimonials() {
  const testimonials = [
    {
      image: require("../assets/images/test1.avif"),
      quote: "sohiub did an amazing job on our project! Highly recommended.",
      name: "Stella Larson",
    },
    {
      image: require("../assets/images/test5.jpg"),
      quote: "Great service and fantastic attention to detail. Will work with them again!",
      name: "Nick Johnson",
    },
    {
      image: require("../assets/images/download.jpeg"),
      quote: "Professional and reliable. Very happy with the results!",
      name: "Olga Ivanova",
    },
    {
      image: require("../assets/images/test4.avif"),
      quote: "Outstanding experience! They exceeded our expectations.",
      name: "Paul Hudson",
    },
    {
      image: require("../assets/images/test3.avif"),
      quote: "A pleasure to work with. The results were fantastic!",
      name: "Cash Hudson",
    },
    {
      image: require("../assets/images/test2.avif"),
      quote: "Incredible work! I can't recommend them enough.",
      name: "Mike Perry",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} width="80px" style={{ borderRadius: "50%" }} />
            </div>
            <p>{`"${testimonial.quote}"`}</p>
            <h6>{testimonial.name}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

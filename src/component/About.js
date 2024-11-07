import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

const About = () => {
  return (
    <div className="p-5">
      <div className="font-bold text-center text-lg">Our Story</div>
      <div className="mt-5">
        <div>
          <h1 className="font-bold text-center">Our Journey</h1>
          <p className="mt-2 p-5">
          At FoodHub, our journey began with a simple dream: to connect food lovers with the best local chefs. Founded by a group of culinary enthusiasts, we recognized the need for convenient meal options that don’t compromise on quality. What started as a small initiative in our neighborhood has blossomed into a thriving platform. Over the years, we’ve partnered with talented chefs who bring diverse flavors to your table. Our commitment to fresh ingredients and exceptional service has earned us the trust of countless customers. With every delivery, we aim to share our love for food and community. Today, FoodHub serves as a bridge between local kitchens and hungry hearts. We are proud to support local businesses and contribute to a sustainable food ecosystem. Join us as we continue to evolve and innovate in the world of food delivery.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-center mt-5">Our Mission</h1>
          <p className="mt-2 p-5">
          At FoodHub, our mission is to deliver delicious, freshly prepared meals to your doorstep, making gourmet dining accessible for everyone. We are dedicated to partnering with local chefs who are passionate about their craft, ensuring every dish is made with love and care. Our focus on high-quality ingredients means you enjoy meals that are not only tasty but also nutritious. We believe in sustainability and use eco-friendly packaging to minimize our environmental impact. Customer satisfaction is at the heart of what we do; we listen to your feedback and strive to improve continuously. With a diverse menu that caters to all dietary preferences, we aim to provide something for everyone. We are committed to fast, reliable delivery, ensuring your meals arrive hot and fresh. At FoodHub, we don't just deliver food; we create memorable dining experiences. Together, let’s explore the world of flavors right from your home.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
